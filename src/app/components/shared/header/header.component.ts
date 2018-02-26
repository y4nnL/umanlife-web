import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

import { animations } from './header-animations';
import { RouterDataHeader, RouterDataHeaderBack } from '../../../helpers/router-data';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'uw-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ],
  animations: animations
})
export class HeaderComponent implements OnInit {

  displayed = false;
  back: boolean|string[]|RouterDataHeaderBack = false;

  private previousRouteSnapshot: ActivatedRouteSnapshot;

  constructor(
    private _location: Location,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let activatedRouteSnapshot: ActivatedRouteSnapshot;
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._activatedRoute)
      .do((route) => activatedRouteSnapshot = route.snapshot)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((data) => {
        const headerData = <RouterDataHeader>data;
        if (headerData && headerData.header) {
          this.displayed = headerData.header.display;
          this.back = headerData.header.back;
          if (typeof this.back === 'function') {
            this.back = this.back(activatedRouteSnapshot, this.previousRouteSnapshot);
          }
          this.previousRouteSnapshot = activatedRouteSnapshot;
        }
      });
  }

  canGoBack(): boolean {
    return typeof this.back === 'string' || this.back === true;
  }

  goBack() {
    if (Array.isArray(this.back)) {
      this._router.navigate(this.back);
    } else if (!!this.back) {
      this._location.back();
    }
  }

}
