import { Component, Input } from '@angular/core';

export enum InlineLoadingTheme {
  PRIMARY = 'primary',
  ACCENT = 'accent',
}

@Component({
  selector: 'app-inline-loading',
  templateUrl: './inline-loading.component.html',
  styleUrls: ['./inline-loading.component.scss'],
})
export class InlineLoadingComponent {
  @Input() theme: InlineLoadingTheme = InlineLoadingTheme.PRIMARY;
  @Input() diameter = 30;
  @Input() overlay = false;
}
