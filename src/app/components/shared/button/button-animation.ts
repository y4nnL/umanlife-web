import { trigger, style, animate, transition } from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition('* => void', [
    animate('200ms ease-out', style({
      top: -30,
      opacity: 0
    })),
  ]),
  transition('void => *', [
    style({
      top: 30,
      opacity: 0
    }),
    animate('200ms ease-out')
  ])
]);

export const animations = [
  fadeAnimation
];
