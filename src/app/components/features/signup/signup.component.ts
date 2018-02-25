import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { HeaderData } from '../../shared/header/header.component';
import { Server, ServerSignUpData } from '../../../providers/Server/Server';

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

  isPasswordVisible = false;
  matcher = new MaterialDirtyStateMatcher;
  signUpObservable: Observable<boolean>;
  signUpSuccess = false;
  signUpFormGroup: FormGroup;

  usernameFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  passwordMatchFormControl: FormControl;

  constructor(private _server: Server) { }

  ngOnInit() {
    this._initFormControls();
    this._initForm();
  }

  private _initFormControls() {
    this.usernameFormControl = new FormControl('', [
      Validators.required,
    ]);
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/(?=.*[a-z])(?=.*\d+)(?=.*[A-Z]+)(?=.*(\W|_)+)/),
      Validators.minLength(8)
    ]);
    this.passwordMatchFormControl = new FormControl('');
  }

  private _initForm() {
    this.signUpFormGroup = new FormGroup(
      {
        username: this.usernameFormControl,
        email: this.emailFormControl,
        password: this.passwordFormControl,
        passwordMatch: this.passwordMatchFormControl
      },
      {
        validators: [
          this._passwordMatch
        ]
      }
    );
  }

  private _passwordMatch(abstractControl: AbstractControl): null {
    const passwordMatchValue = abstractControl.get('passwordMatch').value;
    const passwordValue = abstractControl.get('password').value;
    if (passwordMatchValue !== passwordValue) {
      abstractControl.get('passwordMatch').setErrors({ mismatch: true } );
    }
    return null;
  }

  togglePasswordVisibility(event: Event) {
    this.isPasswordVisible = !this.isPasswordVisible;
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  showTermsOfService() {
    console.warn('TODO TermsOfServiceComponent');
  }

  signup() {
    if (this.signUpFormGroup.valid) {
      const data: ServerSignUpData = {
        username: this.signUpFormGroup.value.username,
        email: this.signUpFormGroup.value.email,
        password: this.signUpFormGroup.value.password,
      };
      this.signUpObservable = this._server.signup(data);
      this.signUpObservable
        .subscribe(
          () => this.signUpSuccess = true,
          () => this.signUpObservable = null
        );
    }
  }

}
