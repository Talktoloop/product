import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { environment } from '@env/environment';

const ATTRIBUTE_NAME = 'data-cy';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[cy]',
})
export class CyDirective<T extends string> implements OnInit {
  @Input('cy') selector: T;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (environment.includeE2E) {
      this.renderer.setAttribute(this.element.nativeElement, ATTRIBUTE_NAME, this.selector);
    }
  }
}
