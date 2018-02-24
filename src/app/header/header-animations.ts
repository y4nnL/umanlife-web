import { trigger, style, animate, transition } from '@angular/animations';

const STYLE_DIPLAYED_VOID = {
  top: '-65px', opacity: 0
};

const STYLE_BACK_VOID = {
  opacity: 0
};

export const displayedAnimation = trigger('displayed', [
  transition('* => void', [
    animate('500ms cubic-bezier(0.800, -0.500, 0.520, 1.000)', style(STYLE_DIPLAYED_VOID)),
  ]),
  transition('void => *', [
    style(STYLE_DIPLAYED_VOID),
    animate('500ms cubic-bezier(0.700, 0.000, 0.500, 1.500)')
  ])
]);

export const backAnimation = trigger('back', [
  transition('* => void', [
    animate(500, style(STYLE_BACK_VOID)),
  ]),
  transition('void => *', [
    style(STYLE_BACK_VOID),
    animate(500)
  ])
]);

export const animations = [
  displayedAnimation,
  backAnimation
];
