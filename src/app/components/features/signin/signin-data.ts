import { ActivatedRouteSnapshot } from '@angular/router';

import { RouterDataHeader, RouterDataState } from '../../../helpers/router-data';

export const signinRouterDataHeader: RouterDataHeader = {
  header: {
    display: true,
    back: (activated: ActivatedRouteSnapshot, previous: ActivatedRouteSnapshot): boolean => {
      if (previous) {
        while (previous.firstChild) {
          previous = previous.firstChild;
        }
        return previous.routeConfig.path !== 'password';
      } else {
        return true;
      }
    }
  }
};

export const signinRouterDataState: RouterDataState = {
  state: 'signin'
};
