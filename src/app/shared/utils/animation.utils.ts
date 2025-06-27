import { animate, AnimationTriggerMetadata, group, style, transition, trigger } from '@angular/animations';

export class AnimationUtils {
  static collapsible(options?: { ms?: number; opacity?: boolean }): AnimationTriggerMetadata {
    return trigger('collapsible', [
      transition('void => *', [
        style({ height: 0 }),
        animate(
          options && options.ms ? options.ms : 200,
          style(
            options && options.opacity
              ? {
                  height: '*',
                  opacity: 1,
                }
              : { height: '*' },
          ),
        ),
      ]),
      transition('* => void', [
        style({ height: '*' }),
        animate(
          options && options.ms ? options.ms : 200,
          style(
            options && options.opacity
              ? {
                  height: 0,
                  opacity: 0,
                }
              : { height: 0 },
          ),
        ),
      ]),
    ]);
  }

  static slideDownUp(options: { y: string; ms?: number; name?: string }): AnimationTriggerMetadata {
    return trigger(options.name || 'slideDownUp', [
      transition(':enter', [
        group([
          style({ transform: `translateY(${options.y})` }),
          animate(options && options.ms ? options.ms : '200ms ease-in-out', style({ transform: 'translateY(0px)' })),
        ]),
      ]),
      transition(':leave', [
        group([
          style({ transform: 'translateY(0px)' }),
          animate(options && options.ms ? options.ms : '200ms ease-in-out', style({ transform: `translateY(${options.y})` })),
        ]),
      ]),
    ]);
  }

  static fade(options?: { ms?: number }): AnimationTriggerMetadata {
    return trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(options && options.ms ? options.ms : 200, style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate(options && options.ms ? options.ms : 200, style({ opacity: 0 }))]),
    ]);
  }
}
