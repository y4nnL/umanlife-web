import { Component, Input } from '@angular/core';

@Component({
  selector: 'uw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('type') type = 'button';
  @Input('disabled') disabled = false;
  @Input('inline') inline = false;

  constructor() { }

}
