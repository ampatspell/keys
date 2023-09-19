import Service from '@ember/service';

export default class WakeLockService extends Service {
  _refcount = 0;

  async _withLock(cb) {
    const lock = navigator.wakeLock;
    if (!lock) {
      return;
    }
    await cb(lock);
  }

  async _activate() {
    await this._withLock(async (lock) => {
      try {
        this._lock = await lock.request('screen');
      } catch (err) {
        console.log(err.stack);
      }
    });
  }

  async _deactivate() {
    await this._withLock(async () => {
      const lock = this._lock;
      this._lock = null;
      lock?.release();
    });
  }

  activate() {
    this._refcount++;
    if (this._refcount === 1) {
      this._activate();
    }
    return () => {
      this._refcount--;
      if (this._refcount === 0) {
        this._deactivate();
      }
    };
  }
}
