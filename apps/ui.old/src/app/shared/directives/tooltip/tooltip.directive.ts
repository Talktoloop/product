import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';
import { createPopper, Instance, Placement, VirtualElement } from '@popperjs/core';
import { Subject } from 'rxjs';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltipContent: TemplateRef<any>;
  @Input() tooltipContentContext: any;
  @Input() tooltipText: string;
  @Input() tooltipDelay = 100;
  @Input() tooltipCloseDelay? = 0;
  @Input() tooltipOffset: number[];
  @Input() tooltipPlacement: Placement;
  @Input() tooltipPadding = '1.25rem 1.563rem '; // CSS padding shorthand
  @Input() tooltipBackground = '#262626';
  @Input() lockTooltipMobile = true;
  @Input() showTooltip = true;
  @Input() maxWidth: string;

  popper: Instance;
  tooltipEl: HTMLElement;
  destroyed$ = new Subject();
  private openTimeout;
  private closeTimeout;

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private ui: UIService,
  ) {}

  ngOnDestroy(): void {
    this.clearTooltip();
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  createTooltipEl(isMobile = false): void {
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);

    let newElNodes;
    if (this.tooltipContent) {
      newElNodes = this.createContentNodes(this.tooltipContentContext);
    } else {
      newElNodes = [[document.createTextNode(this.tooltipText)]];
    }

    const componentRef = factory.create(this.injector, newElNodes);
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.passStyling(nativeElement, isMobile);
    this.tooltipEl = document.body.appendChild(nativeElement);
  }

  private passStyling(nativeElement: HTMLElement, isMobile = false): void {
    if (isMobile) {
      nativeElement.style.maxWidth = '90vw';
    }
    if (this.maxWidth && !isMobile) {
      nativeElement.style.maxWidth = this.maxWidth;
    }
    const tooltipHtmlElement = nativeElement.querySelector('.custom-tooltip') as HTMLElement;
    if (tooltipHtmlElement) {
      tooltipHtmlElement.style.padding = this.tooltipPadding;
      tooltipHtmlElement.style.background = this.tooltipBackground;
    }
  }

  createContentNodes(context: any): any[][] {
    const newEl = this.viewContainer.createEmbeddedView(this.tooltipContent, context);
    return [newEl.rootNodes];
  }

  createPopper(event: MouseEvent, isMobile = false): void {
    this.createTooltipEl(isMobile);
    this.zone.runOutsideAngular(() => {
      const sourceEl: Element | VirtualElement = this.tooltipPlacement ? this.el.nativeElement : this.createVirtualSourceElement(event);

      this.popper = createPopper(sourceEl, this.tooltipEl, {
        placement: isMobile ? 'top' : this.tooltipPlacement ? this.tooltipPlacement : 'top-start',
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              boundary: 'window',
              padding: 15,
            },
          },
          {
            name: 'offset',
            options: {
              offset: this.tooltipOffset ? this.tooltipOffset : this.tooltipPlacement ? [0, 5] : [-11, 8],
            },
          },
        ],
        strategy: 'fixed',
      });
    });
  }

  createVirtualSourceElement(event: MouseEvent): VirtualElement {
    return event
      ? {
          getBoundingClientRect: () => {
            return {
              width: 0,
              height: 0,
              top: event.clientY,
              bottom: event.clientY,
              left: event.clientX,
              right: event.clientX,
            } as ClientRect;
          },
        }
      : null;
  }

  openTooltip(event: MouseEvent, isMobile = false): void {
    this.ui.clearTooltips();
    if (this.showTooltip && (this.tooltipText || this.tooltipContent)) {
      this.createPopper(event, isMobile);
    }
  }

  clearTooltip(): void {
    this.popper?.destroy();
    this.popper = undefined;
    this.tooltipEl?.remove();
  }

  @HostListener('click', ['$event'])
  onMouseClick($event: MouseEvent): void {
    if (!this.lockTooltipMobile && this.ui.mobileView) {
      this.popper ? this.clearTooltip() : this.openTooltip($event, true);
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: MouseEvent): void {
    clearTimeout(this.openTimeout);
    clearTimeout(this.closeTimeout);
    if (!this.ui.mobileView && !this.popper) {
      this.openTimeout = setTimeout(() => {
        this.openTooltip($event);
      }, this.tooltipDelay);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(): void {
    clearTimeout(this.openTimeout);
    clearTimeout(this.closeTimeout);
    this.closeTimeout = setTimeout(() => {
      const hoveredTooltip = this.popper?.state.elements.popper.querySelector('.custom-tooltip:hover');
      if (hoveredTooltip) {
        hoveredTooltip.addEventListener('mouseleave', () => {
          this.clearTooltip();
        });
      } else {
        this.clearTooltip();
      }
    }, this.tooltipCloseDelay);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.clearTooltip();
  }
}
