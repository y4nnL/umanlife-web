import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { Server } from '../../../providers/Server/Server';
import { IServerComponent } from '../../../providers/Server/Server-guard';
import { SigninData } from '../../../providers/Server/Server-data';
import { Auth } from '../../../providers/Auth/Auth';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'uw-signin',
  templateUrl: './signin.component.html',
  styleUrls: [
    './signin.component.scss'
  ]
})
export class SigninComponent implements OnInit, IServerComponent {

  emailControl: FormControl;
  form: FormGroup;
  matcher = new MaterialDirtyStateMatcher;
  passwordControl: FormControl;
  serverObservable: Observable<any>;

  constructor(
    private _auth: Auth,
    private _server: Server,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _translate: TranslateService
  ) { }

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
      this.serverObservable = this._server.signin(data)
        .do(() => this.serverObservable = null)
        .mergeMap(() => this._auth.token())
        .mergeMap((hasToken) => {
          return hasToken ? Observable.of(true) : Observable.throw(new Error());
        })
        .catch((error: Error) => {
          this._handleError(error);
          return Observable.throw(error);
        });
      this.serverObservable.subscribe(() => {
        setTimeout(() => this._router.navigate(['program']), 500);
      });
    }
  }

  private _handleError(error: Error) {
    // TODO handle all the sign in form error types
    if (error instanceof Error) {
      this._snackBar.open(this._translate.instant('ERROR_TECHNICAL'), null, {
        duration: 2000
      });
    }
  }

  private _initForm() {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  private _initFormControls() {
    this.emailControl = new FormControl('', [ Validators.required ]);
    this.passwordControl = new FormControl('', [ Validators.required ]);
  }

}
