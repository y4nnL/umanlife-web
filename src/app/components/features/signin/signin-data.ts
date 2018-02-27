import { ActivatedRouteSnapshot } from '@angular/router';

import { Utils } from '../../../helpers/Utils';
import { RouterDataHeader, RouterDataState } from '../../../helpers/router-data';

export const signinRouterDataHeader: RouterDataHeader = {
  header: {
    display: true,
    back: (activated: ActivatedRouteSnapshot, previous: ActivatedRouteSnapshot): boolean => {
      return Utils.getRouteSnapshotPath(previous) !== 'password';
    }
  }
};

export const signinRouterDataState: RouterDataState = {
  state: 'signin'
};
