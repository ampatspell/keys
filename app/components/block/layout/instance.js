import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { action } from '@ember/object';
import { reads } from 'macro-decorators';

export default class BlockLayoutInstanceComponent extends Component {
  @reads('args.layout') layout;
  @reads('args.instance') instance;
  @reads('instance.scale') scale;
  @reads('instance.key') key;

  @cached
  get selection() {
    return this.scale?.select(this.key);
  }

  @action
  onSelectKey(key) {
    let { layout } = this;
    layout.replaceInstanceKey(this.instance, key);
    layout.transitionTo();
  }

  @action
  onRemove() {
    let { layout } = this;
    layout.removeInstance(this.instance);
    layout.transitionTo();
  }
}
