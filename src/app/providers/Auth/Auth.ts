import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Server } from '../Server/Server';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  private _isAuthenticated: BehaviorSubject<boolean>;

  constructor(private _server: Server) {
    this._isAuthenticated = new BehaviorSubject(false);
  }

  token(): Observable<boolean> {
    const observable = this._server.token()
      .map(() => true)
      .catch(() => Observable.of(false));
    observable.subscribe((hasToken) => this._isAuthenticated.next(hasToken));
    return observable;
  }

  isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable()
      .distinctUntilChanged();
  }

}
