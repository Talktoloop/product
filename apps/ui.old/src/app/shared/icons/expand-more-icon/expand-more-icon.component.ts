import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { RtlService } from '@app/core/services/locales/rtl.service';
import { UserLanguageService } from '@app/core/services/locales/user-language.service';

@Component({
  selector: 'app-expand-more-icon',
  templateUrl: './expand-more-icon.component.html',
  styleUrls: ['../icon-style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandMoreIconComponent {
  @Input() rotate: number;
  @Input() rtl = true;
  @HostBinding('style.transform') get chevronRotation(): string | null {
    if (this.rotate !== 0 && !this.rotate) {
      return null;
    }
    const rotation = this.rtl && this.getRotationValue(this.rtlService.isRtlLanguage(this.userLanguageService.getLanguage()));

    return `rotate(${rotation}deg)`;
  }

  getRotationValue(isRtl: boolean): number {
    if (this.rotate === 0) {
      return isRtl ? 180 : 0;
    } else {
      return isRtl ? this.rotate * -1 : this.rotate;
    }
  }

  constructor(private readonly userLanguageService: UserLanguageService, private readonly rtlService: RtlService) {}
}
