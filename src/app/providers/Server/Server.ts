import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TokenData, ForgotData, PasswordData, SigninData, SignupData } from './Server-data';
import { TokenDTO } from './Server-DTOs';
import { TokenError } from './Server-errors';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

const FAKE_LONG_DELAY = 2000;
const FAKE_SHORT_DELAY = 100;

@Injectable()
export class Server {

  constructor() { }

  signup(data: SignupData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_LONG_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  signin(data: SigninData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_LONG_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  forgot(data: ForgotData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_LONG_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  password(data: PasswordData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_LONG_DELAY);
      // .mergeMap(() => Observable.throw(new Error('error')));
  }

  passwordToken(data: TokenData): Observable<boolean> {
    return Observable.of(data.token === 't0k3n')
      .delay(FAKE_LONG_DELAY);
  }

  token(): Observable<TokenDTO> {
    const tokenDTO: TokenDTO = {
      id: 'abc123'
    };
    return Observable.of(tokenDTO)
      .delay(FAKE_SHORT_DELAY)
      .catch(() => Observable.throw(new TokenError()));
  }

}
