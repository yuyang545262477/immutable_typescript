import {List, Record} from 'immutable';
import {cleanSession} from 'selenium-webdriver/safari';
import of = List.of;

export interface Constructable<T> {
  new(...args: any[]): T;
}

export interface StaticallyTypedRecord<T> extends Constructable<T> {
  get<K extends keyof T>(key: K): T[K];

  set<K extends keyof T, V extends T[K]>(key: K, value: V);

  withMutations(cb: (r: StaticallyTypedRecord<T>) => StaticallyTypedRecord<T>);

  setIn<K1 extends keyof T, V extends T[K1]>(keys: [K1], val: V);

  setIn<K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(keys: [K1, K2], val: V);

  setIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], V extends T[K1][K2][K3]>(
    keys: [K1, K2, K3],
    val: V
  );

  toJS(): T;

  equals(other: any): boolean

  isList(maybeList: any): boolean
}

// export const RecordFactory = <T>(seed: T): StaticallyTypedRecord<T> => {
//   return (Record(seed) as any) as StaticallyTypedRecord<T>;
// };

export const RecordFactory = <T>(
  seed: T
): new (...args: any[]) => StaticallyTypedRecord<T> =>
  (Record(seed) as any) as new (...args: any[]) => StaticallyTypedRecord<T>;

export enum VMState {
  Pending = 'Pending',
  Running = 'Running '
}

export class Connection {
  constructor(_: any) {
  }
}

export interface IotherBody {
  hand: string,
  leg: string
}


export interface IVirtualMachine {
  id: string
  state: VMState,
  connection: Connection;
  screenshot: string;
  brothers: List<OtherBody>
}

const virtualMachine = RecordFactory<IVirtualMachine>({
  id: '',
  state: VMState.Pending,
  connection: new Connection({}),
  screenshot: '',
  brothers: List.of<OtherBody>()
});
const otherBody = RecordFactory<IotherBody>({
  leg: '',
  hand: ''
});

export class OtherBody extends otherBody implements IotherBody {
  hand: string;
  leg: string;

  constructor(props) {
    super(props);
  }
}


export class VirtualMachine extends virtualMachine implements IVirtualMachine {
  connection: Connection;
  id: string;
  screenshot: string;
  state: VMState;
  brothers: List<OtherBody>;

  constructor(props) {
    super(props);
  }


}
