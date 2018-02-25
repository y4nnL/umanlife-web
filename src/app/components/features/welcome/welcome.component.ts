import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../../shared/header/header.component';

export const welcomeHeaderData: HeaderData = {
  header: {
    display: false
  }
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
