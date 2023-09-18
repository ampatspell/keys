import { guidFor } from '@ember/object/internals';
import { setOwner } from '@ember/application';

export default class Model {
  constructor(owner) {
    setOwner(this, owner);
  }

  toStringExtension() {}

  toString() {
    const extension = this.toStringExtension();
    return `<${this.constructor.name}::${guidFor(this)}${
      extension ? `:${extension}` : ''
    }>`;
  }
}
