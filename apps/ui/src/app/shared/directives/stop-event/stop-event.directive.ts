import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const eventCanceler = (event: Event) => {
  event.stopPropagation();
  event.preventDefault();
};

@Directive({
  selector: '[appStopEvent]',
})
export class StopEventDirective implements AfterViewInit, OnDestroy {
  @Input('appStopEvent') eventName: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.addEventListener(this.eventName, eventCanceler);
  }

  ngOnDestroy(): void {
    this?.el?.nativeElement?.removeListener?.(this?.eventName, eventCanceler);
  }
}
