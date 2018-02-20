import { trigger, style, animate, transition } from '@angular/animations';

export const splashAnimation = trigger('splash', [
  transition('* => void', [
    animate('1s ease-out', style({ opacity: 0 }))
  ])
]);

export const bg1Animation = trigger('bg1', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(-25deg)' }),
    animate('1s ease-out')
  ])
]);

export const bg2Animation = trigger('bg2', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(-25deg)' }),
    animate('1s 200ms ease-out')
  ])
]);

export const bg3Animation = trigger('bg3', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(-4deg)' }),
    animate('1s 400ms ease-out')
  ])
]);

export const spinnerAnimation = trigger('spinner', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate('1s 1200ms ease-out')
  ])
]);

export const animations = [
  splashAnimation,
  bg1Animation,
  bg2Animation,
  bg3Animation,
  spinnerAnimation
];
