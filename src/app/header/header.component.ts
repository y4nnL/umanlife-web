import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { animations } from './header-animations';

export interface HeaderData {
  header: {
    display: Boolean;
    back?: Boolean|String;
  };
}

@Component({
  selector: 'uw-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ],
  animations: animations
})
export class HeaderComponent implements OnInit {

  displayed: Boolean = false;
  back: Boolean|String = false;

  constructor(
    private _location: Location,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._activatedRoute)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((data) => {
        const headerData = <HeaderData>data;
        if (headerData && headerData.header) {
          this.displayed = headerData.header.display;
          this.back = headerData.header.back;
        }
        console.log(headerData);
      });
  }

  canGoBack(): Boolean {
    return typeof this.back === 'string' || this.back === true;
  }

  goBack() {
    if (typeof this.back === 'string') {
      this._router.navigate([ this.back ]);
    } else if (this.back === true) {
      this._location.back();
    }
  }

}
