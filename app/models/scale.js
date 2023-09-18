import Model from './model';
import { inject as service } from '@ember/service';

export default class Scale extends Model {
  @service keys;

  constructor(owner, opts) {
    super(owner);
    this.opts = opts;
  }

  get name() {
    return this.opts.name;
  }

  get pattern() {
    return this.opts.pattern;
  }

  select(root) {
    if (!root) {
      return null;
    }

    let {
      keys: { all },
      pattern,
    } = this;

    let double = all;
    let base = all.indexOf(root);
    return pattern.map((index) => double[base + index]);
  }

  toStringExtension() {
    return this.opts.name;
  }
}
