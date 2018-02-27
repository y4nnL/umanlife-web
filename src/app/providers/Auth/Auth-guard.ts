import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Auth } from './Auth';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

export class CanActivateSecured implements CanActivate {

  constructor(private _auth: Auth, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._auth.token()
      .first()
      .do((hasToken) => {
        if (!hasToken) {
          this._router.navigate(['', 'signin']);
        }
      });
  }
}

export class CanActivateUnsecured implements CanActivate {

  constructor(private _auth: Auth, private _router: Router) {}

  canActivate(): Observable<boolean> {
    return this._auth.isAuthenticated()
      .first()
      .do((isAuthenticated) => {
        if (isAuthenticated) {
          this._router.navigate(['program']);
        }
      })
      .map((isAuthenticated) => isAuthenticated === false);
  }
}
