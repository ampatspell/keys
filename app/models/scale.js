import Model from './model';
import { inject as service } from '@ember/service';
import { reads } from 'macro-decorators';

export default class Scale extends Model {
  @service keys;

  constructor(owner, opts) {
    super(owner);
    this.opts = opts;
  }

  @reads('opts.id') id;
  @reads('opts.name') name;
  @reads('opts.pattern') pattern;

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
