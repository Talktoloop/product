import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-story-info-section',
  templateUrl: './additional-story-info-section.component.html',
  styleUrls: ['./additional-story-info-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalStoryInfoSectionComponent {
  @Input() heading: string;
}
