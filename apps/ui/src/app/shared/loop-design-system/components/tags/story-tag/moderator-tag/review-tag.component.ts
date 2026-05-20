import { Component, Input } from '@angular/core';
import { TagSize } from '../../tag-size.enum';
import {StoryCategory} from "@shared/types/story-category.type";

@Component({
  selector: 'loop-moderator-tag',
  templateUrl: './review-tag.component.html',
  styleUrls: ['./review-tag.component.scss'],
})
export class ModeratorTagComponent {
  @Input() category: StoryCategory;
  @Input() tagSize: TagSize = TagSize.MEDIUM;
  @Input() fitContent = false;
}
