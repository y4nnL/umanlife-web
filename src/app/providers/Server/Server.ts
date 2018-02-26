import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TokenData, ForgotData, PasswordData, SigninData, SignupData } from './Server-data';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

const FAKE_DELAY = 2000;

@Injectable()
export class Server {

  constructor() { }

  signup(data: SignupData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  signin(data: SigninData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  forgot(data: ForgotData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  password(data: PasswordData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  passwordToken(data: TokenData): Observable<boolean> {
    return Observable.of(data.token === 't0k3n')
      .delay(FAKE_DELAY);
  }

}
