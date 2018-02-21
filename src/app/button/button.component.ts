import { Component, Input } from '@angular/core';

@Component({
  selector: 'uw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('disabled') disabled: Boolean = false;
  @Input('inline') inline: Boolean = false;

  constructor() { }

}
