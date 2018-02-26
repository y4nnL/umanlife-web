import { CanDeactivate } from '@angular/router';
import { IServerComponent } from './IServerComponent';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

export class CanDeactivateServerComponent implements CanDeactivate<IServerComponent> {

  constructor(private _snackBar: MatSnackBar, private _translate: TranslateService) {}

  canDeactivate(serverComponent: IServerComponent): boolean {
    if (serverComponent.serverObservable) {
      this._snackBar.open(this._translate.instant('COMMON_PENDING_REQUEST'), null, {
        duration: 1000
      });
      return false;
    } else {
      return true;
    }
  }
}
