import { utils } from 'js-data';
import { fromPromise } from 'rxjs/observable/fromPromise';

Object.defineProperty(
  utils.Promise.prototype,
  'toObservable',
  {
    value() {
      return fromPromise(this);
    }
  }
);
