import Model from '../model';
import { tracked } from '@glimmer/tracking';

export default class Instance extends Model {
  @tracked key;
  @tracked scale;

  constructor(owner, { layout, scale, key }) {
    super(owner);
    this.layout = layout;
    this.scale = scale;
    this.key = key;
  }

  get serialized() {
    return `${this.scale.id}-${this.key.name.toLowerCase()}`;
  }

  toStringExtension() {
    return this.serialized;
  }
}
