import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

const FAKE_DELAY = 2000;

export interface SignupData {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class Server {

  constructor(_httpClient: HttpClient) { }

  signup(data: SignupData): Observable<boolean> {
    return Observable.of(true)
      .delay(FAKE_DELAY);
      // .mergeMap(() => Observable.throw(new Error('yo')));
  }

}
