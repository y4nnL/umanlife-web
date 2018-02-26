import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { Server, SignupData } from '../../../providers/Server/Server';

import { animations } from './signup-animation';
import { RouterDataState } from '../../../helpers/routerData/RouterDataState';
import { RouterDataHeader } from '../../../helpers/routerData/RouterDataHeader';

export const signupRouterDataHeader: RouterDataHeader = {
  header: {
    display: true,
    back: true
  }
};

export const signupRouterDataState: RouterDataState = {
  state: 'signup'
};

@Component({
  selector: 'uw-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.scss'
  ],
  animations: animations
})
export class SignupComponent implements OnInit {

  email = '';
  emailControl: FormControl;
  form: FormGroup;
  isPasswordVisible = false;
  matcher = new MaterialDirtyStateMatcher;
  passwordControl: FormControl;
  passwordMatchControl: FormControl;
  serverObservable: Observable<boolean>;
  usernameControl: FormControl;

  constructor(private _server: Server) { }

  getEmailHostname(): string {
    return this.email.split('@').pop();
  }

  goToMail() {
    window.open(`http://${this.getEmailHostname()}`);
  }

  ngOnInit() {
    this._initFormControls();
    this._initForm();
  }

  // TODO show TermsOfServiceComponent in signup
  showTermsOfService() {
    console.warn('TODO TermsOfServiceComponent');
  }

  signup() {
    if (this.form.valid) {
      const data: SignupData = {
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password,
      };
      this.serverObservable = this._server.signup(data);
      this.serverObservable
        .subscribe(
          () => this.email = this.form.value.email,
          () => this.serverObservable = null
        );
    }
  }

  togglePasswordVisibility(event: Event) {
    this.isPasswordVisible = !this.isPasswordVisible;
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  private _initForm() {
    this.form = new FormGroup(
      {
        username: this.usernameControl,
        email: this.emailControl,
        password: this.passwordControl,
        passwordMatch: this.passwordMatchControl
      },
      {
        validators: [
          this._passwordMatch
        ]
      }
    );
  }

  private _initFormControls() {
    this.usernameControl = new FormControl('', [
      Validators.required,
    ]);
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/(?=.*[a-z])(?=.*\d+)(?=.*[A-Z]+)(?=.*(\W|_)+)/),
      Validators.minLength(8)
    ]);
    this.passwordMatchControl = new FormControl('');
  }

  // TODO externalize and parameterize password matching validator
  private _passwordMatch(abstractControl: AbstractControl) {
    const passwordMatchValue = abstractControl.get('passwordMatch').value;
    const passwordValue = abstractControl.get('password').value;
    if (passwordMatchValue !== passwordValue) {
      abstractControl.get('passwordMatch').setErrors({ mismatch: true } );
    }
    return null;
  }

}
