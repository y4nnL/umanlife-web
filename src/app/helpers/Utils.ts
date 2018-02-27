import { ActivatedRouteSnapshot } from '@angular/router';

export class Utils {

  static getRouteSnapshotPath(routeSnapshot: ActivatedRouteSnapshot): string {
    if (routeSnapshot) {
      while (routeSnapshot.firstChild) {
        routeSnapshot = routeSnapshot.firstChild;
      }
      return routeSnapshot.routeConfig.path;
    } else {
      return '';
    }
  }

}
