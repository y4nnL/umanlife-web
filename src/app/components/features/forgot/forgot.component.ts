import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { MaterialDirtyStateMatcher } from '../../../helpers/MaterialDirtyStateMatcher';
import { Server } from '../../../providers/Server/Server';
import { IServerComponent } from '../../../helpers/IServerComponent';
import { ForgotData } from '../../../providers/Server/Server-data';

import { animations } from './forgot-animation';

@Component({
  selector: 'uw-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: [
    './forgot.component.scss'
  ],
  animations: animations
})
export class ForgotComponent implements OnInit, IServerComponent {

  email = '';
  emailControl: FormControl;
  form: FormGroup;
  matcher = new MaterialDirtyStateMatcher;
  serverObservable: Observable<any>;

  constructor(private _server: Server) { }

  forgot() {
    if (this.form.valid) {
      const data: ForgotData = {
        email: this.form.value.email
      };
      this.serverObservable = this._server.forgot(data);
      this.serverObservable
        .subscribe(
          () => this.email = this.form.value.email,
          () => this.serverObservable = null,
          () => this.serverObservable = null
        );
    }
  }

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

  private _initForm() {
    this.form = new FormGroup({ email: this.emailControl });
  }

  private _initFormControls() {
    this.emailControl = new FormControl('', [ Validators.required ]);
  }

}
