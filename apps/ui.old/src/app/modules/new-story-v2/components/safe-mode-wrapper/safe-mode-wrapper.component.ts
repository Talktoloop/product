import { Component, Input } from '@angular/core';

@Component({
  selector: 'loop-safe-mode-wrapper',
  templateUrl: './safe-mode-wrapper.component.html',
  styleUrls: ['./safe-mode-wrapper.component.scss'],
})
export class SafeModeWrapperComponent {
  @Input() safeMode = false;
}
