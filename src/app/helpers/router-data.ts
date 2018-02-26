import {ActivatedRouteSnapshot} from '@angular/router';

export type RouterDataHeaderBack = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  previousRouteSnapshot: ActivatedRouteSnapshot
) => boolean|string[];

export interface RouterDataHeader {
  header: {
    display: boolean;
    back?: boolean|string[]|RouterDataHeaderBack;
  };
}

export interface RouterDataState {
  state: string;
}
