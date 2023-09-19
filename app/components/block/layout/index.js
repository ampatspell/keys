import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BlockLayoutIndexComponent extends Component {
  @action
  onAdd() {
    let {
      args: { layout },
    } = this;

    layout.addInstance();
    layout.transitionTo();
  }
}
