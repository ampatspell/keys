import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { cached } from '@glimmer/tracking';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RouteDevComponent extends Component {
  @service keys;

  @cached
  get scale() {
    return this.keys.scales[1];
  }

  @tracked root;

  @cached
  get selection() {
    return this.scale?.select(this.root);
  }

  @action
  onSelectRoot(root) {
    this.root = root;
  }
}
