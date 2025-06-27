import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['../icon-style.scss'],
})
export class CloseIconComponent {
  @Input() fillColor = 'currentColor';
  @Input() rotate = 0;
  @Input() size = 12;

  @HostBinding('style.transition') get transition(): string {
    return 'transform 0.2s';
  }

  @HostBinding('style.transform') get rotation(): string | null {
    if (!this.rotate) {
      return null;
    }

    return `rotate(${this.rotate}deg)`;
  }
}
