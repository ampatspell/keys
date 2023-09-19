import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BlockLayoutInstanceScalesComponent extends Component {
  @service keys;

  @action
  onSelect(scale) {
    let {
      args: { layout, instance },
    } = this;
    layout.replaceInstanceScale(instance, scale);
    layout.transitionTo();
  }
}
