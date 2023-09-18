import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';

export default class ModelsService extends Service {
  _factoryFor(owner, name) {
    const fullName = `model:${name}`;
    const factory = owner.factoryFor(fullName);
    assert(`'${fullName}' is not registered`, !!factory?.class);
    return factory.class;
  }

  create(name, opts = {}) {
    const owner = getOwner(this);
    const factory = this._factoryFor(owner, name);
    return new factory(owner, opts);
  }
}
