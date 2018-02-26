import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { Server, SigninData } from '../../../providers/Server/Server';

import { RouterDataState } from '../../../helpers/routerData/RouterDataState';
import { RouterDataHeader } from '../../../helpers/routerData/RouterDataHeader';

export const signinRouterDataHeader: RouterDataHeader = {
  header: {
    display: true,
    back: true
  }
};

export const signinRouterDataState: RouterDataState = {
  state: 'signin'
};

@Component({
  selector: 'uw-signin',
  templateUrl: './signin.component.html',
  styleUrls: [
    './signin.component.scss'
  ]
})
export class SigninComponent implements OnInit {

  emailControl: FormControl;
  form: FormGroup;
  matcher = new MaterialDirtyStateMatcher;
  passwordControl: FormControl;
  serverObservable: Observable<boolean>;

  constructor(private _server: Server, private _router: Router) { }

  ngOnInit() {
    this._initFormControls();
    this._initForm();
  }

  signup() {
    if (this.form.valid) {
      const data: SigninData = {
        email: this.form.value.email,
        password: this.form.value.password,
      };
      this.serverObservable = this._server.signin(data);
      this.serverObservable
        .subscribe(() => setTimeout(() => this._router.navigate(['']), 500));
    }
  }

  private _initForm() {
    this.form = new FormGroup(
      {
        email: this.emailControl,
        password: this.passwordControl
      },
    );
  }

  private _initFormControls() {
    this.emailControl = new FormControl('', [ Validators.required ]);
    this.passwordControl = new FormControl('', [ Validators.required ]);
  }

}
