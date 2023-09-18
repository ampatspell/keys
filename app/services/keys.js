import Service, { inject as service } from '@ember/service';
import { cached } from '@glimmer/tracking';
import { lastObject } from '../utils/array';

const octave = [
  { name: 'C' },
  { name: 'C♯', black: true },
  { name: 'D' },
  { name: 'D♯', black: true },
  { name: 'E' },
  { name: 'F' },
  { name: 'F♯', black: true },
  { name: 'G' },
  { name: 'G♯', black: true },
  { name: 'A' },
  { name: 'A♯', black: true },
  { name: 'B' },
];

const keys = [...octave, ...octave];

const scales = [
  { name: 'Major', pattern: [0, 2, 4, 5, 7, 9, 11] },
  { name: 'Minor', pattern: [0, 2, 3, 5, 7, 8, 10] },
];

export default class KeysService extends Service {
  @service models;

  @cached
  get all() {
    let { models } = this;
    return keys.map((opts) => models.create('key', opts));
  }

  @cached
  get pairs() {
    let { all } = this;
    let pairs = [];
    all.forEach((key) => {
      if (key.isWhite) {
        pairs.push([key]);
      } else {
        lastObject(pairs).push(key);
      }
    });
    return pairs;
  }

  @cached
  get scales() {
    let { models } = this;
    return scales.map((opts) => models.create('scale', opts));
  }
}
