import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Difficulty } from '@shared/types/difficulty.type';
import { StoryCategory } from '@shared/types/story-category.type';

@Component({
  selector: 'app-story-category-icon',
  templateUrl: './story-category-icon.component.html',
  styleUrls: ['./story-category-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryCategoryIconComponent {
  @Input() category: StoryCategory | Difficulty;
  readonly categories = StoryCategory;
  readonly difficulties = Difficulty;
}
