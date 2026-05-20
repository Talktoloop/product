import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStory } from '@app/core/services/api/model/story.model';
import { STORY_STATUS } from '@app/shared/enums/story-status.enum';
import { UIService } from '@core/services/ui/ui.service';
import { StoryDetailsService } from '../../story-details.service';

@Component({
  selector: 'app-story-action-buttons',
  templateUrl: './story-action-buttons.component.html',
  styleUrls: ['./story-action-buttons.component.scss'],
})
export class StoryActionButtonsComponent {
  @Input() backButtonDisplayCondition = true;
  @Input() submitButtonDisplayCondition = true;
  @Input() rejectButtonDisplayCondition = true;
  @Input() loading: boolean;
  @Input() submitTranslateKey: string;
  @Input() backTranslateKey: string;
  @Input() rejectTranslateKey: string;
  @Output() backClick = new EventEmitter();
  @Output() rejectClick = new EventEmitter();
  @Output() submitClick = new EventEmitter();

  story: IStory;

  get warningTextTranslationKey(): string {
    switch (this.story.status) {
      case STORY_STATUS.REJECTED:
        return 'story.details.review.buttons.storyAlreadyRejected';
      case STORY_STATUS.PUBLISHED:
        return 'story.details.review.buttons.storyAlreadyPublished';
      case STORY_STATUS.SENT_TO_CASE_MANAGER:
        return 'story.details.review.buttons.storyAlreadySentToCaseManager';
    }

    return null;
  }

  constructor(public ui: UIService, private storyService: StoryDetailsService) {
    this.story = this.storyService.story;
  }
}
