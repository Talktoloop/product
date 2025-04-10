import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy, AfterViewInit {
  @Output() appClickOutside = new EventEmitter();
  @Input() omitFirstRenderCheck: boolean;
  @Input() dropdownVisible: boolean;
  private unsubscribe$ = new EventEmitter();

  rendered: boolean;

  constructor(private elementRef: ElementRef, private uiService: UIService) {}

  ngOnInit(): void {
    this.omitFirstRenderCheck && (this.rendered = true);
  }

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.rendered) {
      this.appClickOutside.emit(this.elementRef);
    } else if (clickedInside && this.dropdownVisible) {
      this.appClickOutside.emit(targetElement);
    }
    !this.rendered && (this.rendered = true); // Prevent emitting event before full rendering element on screen
  }

  ngOnDestroy(): void {
    this.unsubscribe$.emit(true);
  }

  ngAfterViewInit(): void {
    this.uiService.clearMenu$.subscribe(() => {
      this.appClickOutside.emit();
    });
  }
}
