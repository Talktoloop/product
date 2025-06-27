import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConversationModule } from '@app/modules/admin/components/conversation/conversation.module';
import { AudioPlayerModule } from '@app/shared/components/audio-player/audio-player.module';
import { BannerModule } from '@app/shared/loop-design-system/components/banner/banner.module';
import { TranslateModule } from '@ngx-translate/core';
import { CaseManagerNoteModule } from '@shared/components/case-manager-note/case-manager-note.module';
import { SharedStoryDetailsModule } from '../shared/shared-story-details.module';
import { StoryReviewMessengerWhatsappDesktopComponent } from './story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-desktop/story-review-messenger-whatsapp-desktop.component';
import { StoryReviewMessengerWhatsappMobileComponent } from './story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-mobile/story-review-messenger-whatsapp-mobile.component';
import { StoryReviewMessengerWhatsappWrapperComponent } from './story-review-messenger-whatsapp-wrapper/story-review-messenger-whatsapp-wrapper.component';
import { StoryReviewVoiceDesktopComponent } from './story-review-voice-wrapper/story-review-voice-desktop/story-review-voice-desktop.component';
import { StoryReviewVoiceMobileComponent } from './story-review-voice-wrapper/story-review-voice-mobile/story-review-voice-mobile.component';
import { StoryReviewVoiceWrapperComponent } from './story-review-voice-wrapper/story-review-voice-wrapper.component';
import { StoryReviewWebDesktopComponent } from './story-review-web-wrapper/story-review-web-desktop/story-review-web-desktop.component';
import { StoryReviewWebMobileComponent } from './story-review-web-wrapper/story-review-web-mobile/story-review-web-mobile.component';
import { StoryReviewWebWrapperComponent } from './story-review-web-wrapper/story-review-web-wrapper.component';
import { StoryReviewComponent } from './story-review.component';
import { StoryTranslateModule } from '../story-translate/story-translate.module';

@NgModule({
  declarations: [
    StoryReviewComponent,
    StoryReviewMessengerWhatsappDesktopComponent,
    StoryReviewMessengerWhatsappMobileComponent,
    StoryReviewMessengerWhatsappWrapperComponent,
    StoryReviewVoiceDesktopComponent,
    StoryReviewVoiceMobileComponent,
    StoryReviewVoiceWrapperComponent,
    StoryReviewWebDesktopComponent,
    StoryReviewWebMobileComponent,
    StoryReviewWebWrapperComponent,
  ],
  exports: [
    StoryReviewComponent,
    StoryReviewMessengerWhatsappDesktopComponent,
    StoryReviewMessengerWhatsappMobileComponent,
    StoryReviewMessengerWhatsappWrapperComponent,
    StoryReviewVoiceDesktopComponent,
    StoryReviewVoiceMobileComponent,
    StoryReviewVoiceWrapperComponent,
    StoryReviewWebDesktopComponent,
    StoryReviewWebMobileComponent,
    StoryReviewWebWrapperComponent,
  ],
  imports: [
    CommonModule,
    SharedStoryDetailsModule,
    RouterModule,
    TranslateModule,
    AudioPlayerModule,
    ConversationModule,
    BannerModule,
    CaseManagerNoteModule,
    StoryTranslateModule,
  ],
})
export class StoryReviewModule {}
