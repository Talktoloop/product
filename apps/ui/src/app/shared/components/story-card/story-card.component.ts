import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStory } from '@core/services/api/model/story.model';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCardComponent {
  @Input() story: IStory;
  @Input() showSubheading = false;
  @Input() loading: boolean;
  readonly limit = -1;
}
