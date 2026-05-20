import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
  isVisible = true;

  close() {
    this.isVisible = false;
  }
}
