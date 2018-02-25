import { Component, Input } from '@angular/core';

@Component({
  selector: 'uw-container-simple',
  templateUrl: './container-simple.component.html',
  styleUrls: [
    './container-simple.component.scss'
  ]
})
export class ContainerSimpleComponent {

  @Input('title') title = '';

  constructor() { }

  hasTitle(): boolean {
    return this.title !== '';
  }

}
