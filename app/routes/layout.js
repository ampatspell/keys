import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LayoutRoute extends Route {
  @service wakeLock;

  activate() {
    super.activate(...arguments);
    this._cancel = this.wakeLock.activate();
  }

  deactivate() {
    super.deactivate(...arguments);
    this._cancel();
  }
}
