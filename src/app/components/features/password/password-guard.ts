import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Server } from '../../../providers/Server/Server';
import { TokenData } from '../../../providers/Server/Server-data';

export class CanActivatePasswordToken implements CanActivate {

  constructor(private _server: Server, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|boolean {
    const data: TokenData = {
      token: route.queryParams.token
    };
    const serverObservable = this._server.passwordToken(data);
    serverObservable.subscribe(
      (success) => {
        if (!success) {
          this._handleError();
        }
      },
      this._handleError.bind(this)
    );
    return serverObservable;
  }

  private _handleError() {
    this._router.navigate(['']);
  }
}
