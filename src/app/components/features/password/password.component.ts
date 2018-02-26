import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { Server } from '../../../providers/Server/Server';
import { IServerComponent } from '../../../providers/Server/Server-guard';
import { PasswordData } from '../../../providers/Server/Server-data';

import { animations } from './password-animation';

@Component({
  selector: 'uw-password',
  templateUrl: './password.component.html',
  styleUrls: [
    './password.component.scss'
  ],
  animations: animations
})
export class PasswordComponent implements OnInit, IServerComponent {

  form: FormGroup;
  isPasswordVisible = false;
  matcher = new MaterialDirtyStateMatcher;
  passwordControl: FormControl;
  passwordMatchControl: FormControl;
  serverObservable: Observable<any>;
  success = false;

  constructor(private _server: Server) { }

  ngOnInit() {
    this._initFormControls();
    this._initForm();
  }

  password() {
    if (this.form.valid) {
      const data: PasswordData = { password: this.form.value.password };
      this.serverObservable = this._server.password(data);
      this.serverObservable
        .subscribe(
          () => this.success = true,
          () => this.serverObservable = null,
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
    this.form = new FormGroup({
      password: this.passwordControl,
      passwordMatch: this.passwordMatchControl
    }, {
      validators: [
        this._passwordMatch
      ]
    });
  }

  private _initFormControls() {
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
