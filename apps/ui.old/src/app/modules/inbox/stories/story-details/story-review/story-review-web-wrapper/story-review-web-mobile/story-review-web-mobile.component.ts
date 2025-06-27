import { Component } from '@angular/core';
import { StoryReviewGlobalComponent } from '../../../shared/story-review-global/story-review-global.component';
import { StoryDetailsService } from '../../../story-details.service';

@Component({
  selector: 'app-story-review-web-mobile',
  templateUrl: './story-review-web-mobile.component.html',
  styleUrls: ['./story-review-web-mobile.component.scss'],
})
export class StoryReviewWebMobileComponent extends StoryReviewGlobalComponent {
  //translation keys
  rightSectionTabs: string[] = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];

  constructor(storyDetailsService: StoryDetailsService) {
    super(storyDetailsService);
  }
}
