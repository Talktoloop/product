import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  @Input() backLabel: string;
  @Input() headingLabel: string;
  @Input() subheadingLabel: string;
  @Input() backUrl: string;
  @Input() extraContent: TemplateRef<any>;
  @Input() sideContent: TemplateRef<any>;
}
