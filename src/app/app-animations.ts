import { trigger, style, animate, transition, query, group } from '@angular/animations';

export const splashAnimation = trigger('splash', [
  transition('* => void', [
    animate('1s ease-out', style({ opacity: 0 }))
  ])
]);

export const bg1Animation = trigger('bg1', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(-28deg)' }),
    animate('1s ease-out')
  ])
]);

export const bg2Animation = trigger('bg2', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(-28deg)' }),
    animate('1s 200ms ease-out')
  ])
]);

export const bg3Animation = trigger('bg3', [
  transition('* => *', [
    style({ opacity: 0, transform: 'rotate(0deg)' }),
    animate('1s 400ms ease-out')
  ])
]);

export const spinnerAnimation = trigger('spinner', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate('1s 1200ms ease-out')
  ])
]);

const routerAnimationDiveGroup = group([
  query('.app-content :leave', [
    style({ zIndex: 1, transform: 'scale(1)', opacity: 1 }),
    animate('200ms ease-out', style({ transform: 'scale(1.08)', opacity: 0 }))
  ], { optional: true }),
  query('.app-content :enter', [
    style({ zIndex: 2, transform: 'scale(0.92)', opacity: 0 }),
    animate('200ms 100ms ease-in', style({ transform: 'scale(1)', opacity: 1 }))
  ], { optional: true }),
]);

const routerAnimationRiseGroup = group([
  query('.app-content :leave', [
    style({ zIndex: 2, transform: 'scale(1)', opacity: 1 }),
    animate('200ms ease-in', style({ transform: 'scale(0.92)', opacity: 0 }))
  ], { optional: true }),
  query('.app-content :enter', [
    style({ zIndex: 1, transform: 'scale(1.08)', opacity: 0 }),
    animate('200ms 100ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ], { optional: true })
]);

const routerAnimationSlideLeftGroup = group([
  query('.app-content :leave', [
    style({ zIndex: 2, left: 0, opacity: 1 }),
    animate('200ms ease-in', style({ left: 200, opacity: 0 }))
  ], { optional: true }),
  query('.app-content :enter', [
    style({ zIndex: 1, left: -200, opacity: 0 }),
    animate('200ms 100ms ease-out', style({ left: 0, opacity: 1 }))
  ], { optional: true })
]);

const routerAnimationSlideRightGroup = group([
  query('.app-content :leave', [
    style({ zIndex: 2, left: 0, opacity: 1 }),
    animate('200ms ease-in', style({ left: -200, opacity: 0 }))
  ], { optional: true }),
  query('.app-content :enter', [
    style({ zIndex: 1, left: 200, opacity: 0 }),
    animate('200ms 100ms ease-out', style({ left: 0, opacity: 1 }))
  ], { optional: true })
]);

export const routerAnimation = trigger('router', [
  transition('welcome => *', [ routerAnimationDiveGroup ]),
  transition('* => welcome', [ routerAnimationRiseGroup ]),
  transition('* => forgot', [ routerAnimationSlideRightGroup ]),
  transition('forgot => *', [ routerAnimationSlideLeftGroup ])
]);

export const animations = [
  splashAnimation,
  bg1Animation,
  bg2Animation,
  bg3Animation,
  spinnerAnimation,
  routerAnimation
];
