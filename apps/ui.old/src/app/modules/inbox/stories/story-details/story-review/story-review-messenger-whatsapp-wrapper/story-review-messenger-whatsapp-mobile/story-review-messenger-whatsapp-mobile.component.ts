import { Component, OnInit } from '@angular/core';
import { CHANNEL_CONSTANTS } from '@app/core/services/api/model/channel.enum';
import { StoryReviewGlobalComponent } from '../../../shared/story-review-global/story-review-global.component';
import { StoryDetailsService } from '../../../story-details.service';

@Component({
  selector: 'app-story-review-messenger-whatsapp-mobile',
  templateUrl: './story-review-messenger-whatsapp-mobile.component.html',
  styleUrls: ['./story-review-messenger-whatsapp-mobile.component.scss'],
})
export class StoryReviewMessengerWhatsappMobileComponent extends StoryReviewGlobalComponent implements OnInit {
  CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;

  //translation keys
  leftSectionTabs: string[] = ['story.details.review.tabs.storyPreview'];
  rightSectionTabs: string[] = ['story.details.review.tabs.review', 'story.details.review.tabs.storyInformation'];

  constructor(storyDetailsService: StoryDetailsService) {
    super(storyDetailsService);
  }

  ngOnInit(): void {
    let reviewConversationTab = 'story.details.review.tabs.smsConversation';

    if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.MESSENGER) {
      reviewConversationTab = 'story.details.review.tabs.messengerConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.WHATSAPP) {
      reviewConversationTab = 'story.details.review.tabs.whatsAppConversation';
    } else if (this.storyDetailsService.story.channel === CHANNEL_CONSTANTS.TELEGRAM) {
      reviewConversationTab = 'story.details.review.tabs.telegramConversation';
    }

    this.leftSectionTabs.unshift(reviewConversationTab);
  }
}
