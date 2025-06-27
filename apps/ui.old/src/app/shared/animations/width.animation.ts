import { animate, state, style, transition, trigger } from '@angular/animations';

export const widthAnimation = trigger('widthAnimation', [
  state(
    'in',
    style({
      display: 'block',
      minWidth: '5rem',
      opacity: '1',
    }),
  ),
  state(
    'out',
    style({
      opacity: '0',
      minWidth: '0',
      width: '0',
      visibility: 'hidden',
      overflow: 'hidden',
      margin: '0',
    }),
  ),
  transition('in => out', animate('300ms ease-in-out')),
  transition('out => in', animate('300ms ease-in-out')),
]);
