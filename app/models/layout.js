import Model from './model';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { removeObject } from '../utils/array';

export default class Layout extends Model {
  @service keys;
  @service models;
  @service router;

  @tracked instances;

  constructor(owner, opts) {
    super(owner);
    this.opts = opts;
  }

  load() {
    let {
      opts: { path },
    } = this;

    path = decodeURIComponent(path || '');

    this.instances = path
      .split('/')
      .map((string) => {
        if (!string) {
          return;
        }

        let [scaleId, noteId] = string.split('-');
        if (!scaleId || !noteId) {
          return;
        }

        const scale = this.keys.scales.find((scale) => scale.id === scaleId);
        if (!scale) {
          return;
        }

        noteId = noteId.toUpperCase();

        const key = this.keys.all.find((key) => key.name === noteId);
        if (!key) {
          return;
        }

        return this.models.create('layout/instance', {
          layout: this,
          scale,
          key,
        });
      })
      .filter(Boolean);

    return this;
  }

  addInstance() {
    const instance = this.models.create('layout/instance', {
      layout: this,
      scale: this.keys.scales[0],
      key: this.keys.all[0],
    });
    this.instances = [...this.instances, instance];
    return this.serialized;
  }

  replaceInstanceScale(instance, scale) {
    instance.scale = scale;
  }

  replaceInstanceKey(instance, key) {
    key = this.keys.all.find((i) => i.name == key.name);
    instance.key = key;
  }

  removeInstance(instance) {
    this.instances = removeObject(this.instances, instance);
  }

  get serialized() {
    return this.instances.map((c) => c.serialized).join('/');
  }

  transitionTo() {
    let { router, serialized } = this;
    if (serialized) {
      router.transitionTo('layout.path', serialized);
    } else {
      router.transitionTo('layout');
    }
  }

  toStringExtension() {
    return this.serialized;
  }
}
