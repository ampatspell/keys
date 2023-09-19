import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LayoutIndexRoute extends Route {
  @service models;

  model() {
    return this.models.create('layout').load();
  }
}
