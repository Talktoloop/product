import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
})
export class InfoIconComponent {
  @Input() size = 20;
  @Input() fillColor = 'currentColor';
}
