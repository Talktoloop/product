import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'loop-subpage-footer',
  templateUrl: './subpage-footer.component.html',
  styleUrls: ['./subpage-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubpageFooterComponent {
  @Input() text = 'newStoryV2.footerText';
  constructor(private translateService: TranslateService) {}
}
