import { animate, query, style, transition, trigger } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  transition('* <=> *', [
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('100ms', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
    query(':leave', [animate('300ms', style({ transform: 'translateX(300%)' }))], { optional: true }),
  ]),
]);
