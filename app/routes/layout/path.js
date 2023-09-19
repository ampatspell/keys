import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LayoutPathRoute extends Route {
  @service models;

  model({ path }) {
    return this.models.create('layout', { path }).load();
  }
}
