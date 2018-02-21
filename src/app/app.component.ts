import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { animations } from './app-animations';

import * as localeEN from './app-locale-en.json';
import * as localeFR from './app-locale-fr.json';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

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

  private _isNavigating: Boolean = true;
  private _spinnerIsReady: Boolean = false;

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {
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
