import Model from './model';

export default class Key extends Model {
  constructor(owner, opts) {
    super(owner);
    this.opts = opts;
  }

  get isBlack() {
    return !!this.opts.black;
  }

  get isWhite() {
    return !this.isBlack;
  }

  get name() {
    return this.opts.name;
  }

  toStringExtension() {
    return this.opts.name;
  }
}
