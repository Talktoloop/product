import { Component, Input } from '@angular/core';
import { StoryCategory } from '@app/shared/types/story-category.type';
import { TagSize } from '../tag-size.enum';

@Component({
  selector: 'loop-story-tag',
  templateUrl: './story-tag.component.html',
  styleUrls: ['./story-tag.component.scss'],
})
export class StoryTagComponent {
  @Input() category: StoryCategory;
  @Input() tagSize: TagSize = TagSize.MEDIUM;
  @Input() fitContent = false;

  get isSensitive(): string {
    return this.category === StoryCategory.SENSITIVE ? 'sensitive' : '';
  }
}
