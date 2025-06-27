import { Directive, Inject } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export class ModalBase {
  close$: Subject<any>;
  constructor(@Inject('close$') close$) {
    this.close$ = close$;
  }

  onModalClose(): void {
    this.close$.next(null);
  }
}
