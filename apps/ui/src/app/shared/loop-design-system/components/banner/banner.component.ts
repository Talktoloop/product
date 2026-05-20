import { Component, EventEmitter, Input, Output } from '@angular/core';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { BannerTheme } from './banner-theme.enum';

@Component({
  selector: 'loop-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  LoopIcon = LoopIcon;

  @Input() text: string;
  @Input() prefixIcon: LoopIcon.Name;
  @Input() bannerTheme: BannerTheme = BannerTheme.INFO;
  @Output() close$ = new EventEmitter<void>();

  get iconTheme(): LoopIcon.Theme {
    if (this.bannerTheme === BannerTheme.SUCCESS) {
      return LoopIcon.Theme.Action;
    } else if (this.bannerTheme === BannerTheme.WARNING) {
      return LoopIcon.Theme.Alert;
    } else if (this.bannerTheme === BannerTheme.ERROR) {
      return LoopIcon.Theme.Danger;
    } else {
      return LoopIcon.Theme.Primary;
    }
  }
}
