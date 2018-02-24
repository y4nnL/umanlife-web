import { trigger, style, animate, transition } from '@angular/animations';

const STYLE_VOID = {
  top: '-65px', opacity: 0
};

export const collapsedAnimation = trigger('collapsed', [
  transition('* => void', [
    animate('500ms cubic-bezier(0.800, -0.500, 0.520, 1.000)', style(STYLE_VOID)),
  ]),
  transition('void => *', [
    style(STYLE_VOID),
    animate('500ms cubic-bezier(0.700, 0.000, 0.500, 1.500)')
  ])
]);

export const animations = [
  collapsedAnimation
];
