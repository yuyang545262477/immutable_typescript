import {Map as ImmutableMap, Record} from 'immutable';
import * as lodashForEach from 'lodash/forEach';

export abstract class BunkerRecord {
  _data: ImmutableMap<any, any> = ImmutableMap<any, any>();

  protected constructor(initialValues?: any) {
    if (initialValues) {
      this._data = this._data.merge(initialValues);
      lodashForEach(initialValues, (value, key) => {
        Object.defineProperty(this, key, {
          enumerable: false,
          get(): any {
            return this._data.get(key);
          },
          set(): any {
            throw  new Error('Cannot set on an immutable record.');
          }
        });
      });
    } else {
      this._data = ImmutableMap<any, any>();
    }
  }

  toJs() {
    console.log(this._data.toJS());
    return this._data.toJS();
  }

  equals(otherRecord: BunkerRecord): boolean {
    return typeof this === typeof otherRecord && this._data.equals(otherRecord._data);
  }

  with(values: any) {
    const returnVal = new (this.constructor as any);
    returnVal._data = this._data.merge(values);
    return returnVal;
  }
}
