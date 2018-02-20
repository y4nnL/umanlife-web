import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { animations } from './app-animations';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

const SPINNER_MIN_TIME: Number = 2000;

@Component({
  selector: 'uw-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
  animations: animations
})
export class AppComponent implements OnInit {

  private _isNavigating: Boolean = true;
  private _spinnerIsReady: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => this._isNavigating = false);
  }

  spinnerIsReady() {
    setTimeout(() => this._spinnerIsReady = true, SPINNER_MIN_TIME);
  }

  isSplashDisplayed(): Boolean {
    return this._spinnerIsReady === false || this._isNavigating === true;
  }
}
