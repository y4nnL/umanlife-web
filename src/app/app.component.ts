import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { animations } from './app-animations';

import * as localeEN from './app-locale-en.json';
import * as localeFR from './app-locale-fr.json';

import 'rxjs/add/operator/filter';

import * as FastClick from 'fastclick';
FastClick.attach(document.body);

const SPINNER_MIN_TIME: Number = 1200;

const LOCALES = {
  en: localeEN,
  fr: localeFR
};

@Component({
  selector: 'uw-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
  animations: animations
})
export class AppComponent implements OnInit {

  private _isNavigating = true;
  private _spinnerIsReady = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this._initTranslate();
    this._initNavigationRx();
  }

  spinnerIsReady() {
    setTimeout(() => this._spinnerIsReady = true, SPINNER_MIN_TIME);
  }

  isSplashDisplayed(): boolean {
    return this._spinnerIsReady === false || this._isNavigating === true;
  }

  private _initTranslate() {
    const localesArray = Object.keys(LOCALES);
    const browserLocale = this.translate.getBrowserLang();
    const localesRegEx = new RegExp(localesArray.join('|'));
    const usedLocale = localesRegEx.test(browserLocale) ? browserLocale : 'en';

    this.translate.addLangs(localesArray);
    this.translate.setDefaultLang(localesArray[0]);

    localesArray.forEach((locale) => {
      this.translate.setTranslation(locale, LOCALES[locale]);
    });

    this.translate.use(usedLocale);
  }

  private _initNavigationRx() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => this._isNavigating = false);
  }
}
