import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[loopMobileCell]',
})
export class MobileCellDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
