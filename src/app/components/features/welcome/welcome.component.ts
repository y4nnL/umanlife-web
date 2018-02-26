import { Component, OnInit } from '@angular/core';
import { RouterDataHeader } from '../../../helpers/routerData/RouterDataHeader';
import { RouterDataState } from '../../../helpers/routerData/RouterDataState';

export const welcomeRouterDataHeader: RouterDataHeader = {
  header: {
    display: false
  }
};

export const welcomeRouterDataState: RouterDataState = {
  state: 'welcome'
};

@Component({
  selector: 'uw-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [
    './welcome.component.scss'
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
