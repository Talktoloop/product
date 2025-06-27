import { animateChild, query, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, Renderer2 } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';
import { ModalRoutingService } from '@shared/utils/modal-routing.service';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AnimationUtils } from '../../utils/animation.utils';

const ANIMATION_DURATION = 200;

@Component({
  selector: 'loop-modal',
  templateUrl: './modal-v2.component.html',
  styleUrls: ['./modal-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('modalAnimation', [transition(':enter', [query('@*', animateChild())]), transition(':leave', [query('@*', animateChild())])]),
    AnimationUtils.fade(),
    AnimationUtils.slideDownUp({ y: '-50px', ms: ANIMATION_DURATION, name: 'slideDesktop' }),
    AnimationUtils.slideDownUp({ y: '100vh', ms: ANIMATION_DURATION, name: 'slideMobile' }),
  ],
})
export class ModalV2Component implements AfterViewInit {
  @Input() title: string;
  @Input() showBack = false;
  @Input() showActionButtons = true;
  @Input() fitContent;
  @Input() padding: number;
  animationStart: boolean;
  close$: Subject<void>;

  constructor(
    private cdr: ChangeDetectorRef,
    public ui: UIService,
    private renderer: Renderer2,
    private modalRoutingService: ModalRoutingService,
    @Inject('close$') close$?: Subject<void>,
  ) {
    if (close$) {
      this.close$ = close$;
      this.close$.pipe(take(1)).subscribe(() => this.clearAnimationVariables());
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationStart = true;
      this.cdr.markForCheck();
    });
  }

  close(): void {
    this.close$.next(null);
  }

  clearAnimationVariables(): void {
    this.animationStart = false;
    this.cdr.markForCheck();
  }
}
