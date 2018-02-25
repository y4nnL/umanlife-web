import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { animations } from './button-animation';

const ERROR_DELAY = 4000;

@Component({
  selector: 'uw-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss'
  ],
  animations: animations
})
export class ButtonComponent implements OnChanges {

  @Input('type') type = 'button';
  @Input('disabled') disabled = false;
  @Input('inline') inline = false;
  @Input('observable') observable: Observable<any>;

  @Output('action') action = new EventEmitter<any>();

  subscription: Subscription = null;

  success = false;
  error = false;
  errorTimeout: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.observable) {
      const newObservable = changes.observable.currentValue as Observable<any>;
      if (newObservable) {
        this.success = false;
        this.error = false;
        clearTimeout(this.errorTimeout);
        this.subscription = newObservable.subscribe(this._onSuccess.bind(this), this._onError.bind(this));
      }
    }
  }

  private _onSuccess() {
    this.success = true;
    this._onComplete();
  }

  private _onError() {
    this.error = true;
    this.errorTimeout = setTimeout(() => this.error = false, ERROR_DELAY);
    this._onComplete();
  }

  private _onComplete() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    } else {
      this.success = false;
      this.error = false;
      clearTimeout(this.errorTimeout);
    }
  }

  _doAction() {
    this.action.emit();
  }

}
