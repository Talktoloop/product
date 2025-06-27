import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inbox-outbox-styler',
  template: '<ng-content></ng-content>',
  styleUrls: ['./inbox-outbox-styler.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InboxOutboxStylerComponent {}
