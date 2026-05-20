import { AfterViewInit, Directive, DoCheck, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';
import { createPopper, Instance, Placement } from '@popperjs/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements AfterViewInit, OnDestroy, DoCheck {
  @Input() sourceEl: HTMLElement;
  @Input() sourceWidth: number | 'auto';
  @Input() offset: number[];
  @Input() boundaryClass: string;
  @Input() dropDownPlacement: Placement = 'top';
  @Input() autoWidth: boolean;
  @Input() isAxisNotReversed = false;
  @Input() isNotSticky? = false;
  @Input() isDisabled? = false;
  @Input() isDisabledOnMobile? = false;
  @Input() isStatic? = false;
  isInitiated = false;

  popper: Instance;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone, private uiService: UIService) {}

  ngAfterViewInit(): void {
    if (this.isDisabled) {
      if (this.popper) {
        this.popper.destroy;
      }
      return;
    }
    if (this.isDisabledOnMobile && this.uiService.mobileView) {
      if (this.popper) {
        this.popper.destroy();
      }
      document.body.style.overflow = 'hidden';
      return;
    }
    if (!this.isInitiated) {
      this.isInitiated = true;
      document.querySelectorAll('[appDropdown]').forEach((element: Element) => {
        if (this.el.nativeElement === element) {
          return;
        }
        if (element.querySelector('[appDropdown]') !== this.el.nativeElement) {
          this.uiService.clearMenu$.next(this.el);
        }
      });
    }
    if (!this.isStatic) {
      !this.autoWidth && this.setWidth();
      this.zone.runOutsideAngular(() => {
        this.popper = createPopper(this.sourceEl, this.el.nativeElement, {
          modifiers: [
            {
              name: 'preventOverflow',
              options: this.isAxisNotReversed
                ? {}
                : {
                    mainAxis: true,
                    altAxis: !this.isNotSticky,
                  },
            },
          ],
        });

        setInterval(() => {
          if (this.popper) {
            this.popper.forceUpdate();
          }
        }, 100);

        !this.autoWidth && this.setWidth();
        !this.autoWidth &&
          setTimeout(() => {
            if (this.popper) {
              this.popper.forceUpdate();
            }
          }, 200);
      });
    }
  }

  ngDoCheck(): void {
    if (this.isStatic) {
      return;
    }
    
    setTimeout(() => {
      if (this.popper) {
        this.popper.forceUpdate();
      }
    }, 1);
  }

  ngOnDestroy(): void {
    this.popper?.destroy();
    if (this.isDisabledOnMobile && this.uiService.mobileView) {
      document.body.style.overflow = 'unset';
    }
  }

  setWidth(): void {
    if (this.isStatic || !this.sourceEl || !this.el.nativeElement) {
      return;
    }
    
    this.el.nativeElement.style.width = this.calculateWidth();
  }

  private calculateWidth(): string {
    if (this.sourceWidth) {
      return this.sourceWidth === 'auto' ? 'auto' : `${this.sourceWidth}px`;
    }

    return `${this.sourceEl.getBoundingClientRect().width}px`;
  }
}
