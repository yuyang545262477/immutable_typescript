import {BunkerRecord} from './bunker-record';

export interface UserParams {
  firstName?: string
  lastName?: string
  email?: string
}

const _defaultValues: UserParams = {firstName: '', lastName: '', email: ''};

export class User extends BunkerRecord implements UserParams {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;


  constructor(params?: UserParams) {
    if (params) {
      super({..._defaultValues, ...params} as UserParams);
    } else {
      super(_defaultValues);
    }
  }

  with(values: any): any {
    return super.with(values);
  }
}

