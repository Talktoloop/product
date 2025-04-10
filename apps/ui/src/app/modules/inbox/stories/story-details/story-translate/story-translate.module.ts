import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConversationModule } from '@app/modules/admin/components/conversation/conversation.module';
import { ContentTranslationStepModule } from '@app/modules/inbox/shared/components/content-translation-step/content-translation-step.module';
import { PostTranslationControllerModule } from '@app/modules/inbox/shared/components/post-translation-controller/post-translation-controller.module';
import { AudioPlayerModule } from '@app/shared/components/audio-player/audio-player.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedStoryDetailsModule } from '../shared/shared-story-details.module';
import { StoryTranslateDesktopComponent } from './story-translate-desktop/story-translate-desktop.component';
import { StoryTranslateMobileComponent } from './story-translate-mobile/story-translate-mobile.component';
import { StoryTranslateComponent } from './story-translate.component';

@NgModule({
  declarations: [StoryTranslateComponent, StoryTranslateMobileComponent, StoryTranslateDesktopComponent],
  exports: [StoryTranslateComponent, StoryTranslateMobileComponent, StoryTranslateDesktopComponent],
  imports: [
    AudioPlayerModule,
    CommonModule,
    ContentTranslationStepModule,
    ConversationModule,
    PostTranslationControllerModule,
    SharedStoryDetailsModule,
    TranslateModule,
  ],
})
export class StoryTranslateModule {}
