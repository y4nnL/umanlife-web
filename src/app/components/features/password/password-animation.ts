import { trigger, style, animate, transition } from '@angular/animations';

export const collapseAnimation = trigger('collapse', [
  transition('* => void', [
    animate('500ms ease-in-out', style({
      height: 0,
      opacity: 0
    }))
  ])
]);
export const successAnimation = trigger('success', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('500ms 300ms')
  ])
]);

export const animations = [
  collapseAnimation,
  successAnimation
];
