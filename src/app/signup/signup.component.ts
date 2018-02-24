import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../header/header.component';

export const signupHeaderData: HeaderData = {
  header: {
    display: true,
    back: true
  }
};

@Component({
  selector: 'uw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
