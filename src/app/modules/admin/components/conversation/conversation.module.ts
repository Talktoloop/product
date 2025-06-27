import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { SkeletonLoaderModule } from '@app/shared/components/skeleton-loader/skeleton-loader.module';
import { TextareaModule } from '@app/shared/components/textarea/textarea.module';
import { InfoIconModule } from '@app/shared/icons/info-icon/info-icon.module';
import { PinIconModule } from '@app/shared/icons/pin-icon/pin-icon.module';
import { ReplyIconModule } from '@app/shared/icons/reply-icon/reply-icon.module';
import { SendIconModule } from '@app/shared/icons/send-icon/send-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { PinStoryModule } from '@shared/components/pin-story/pin-story.module';
import { ConversationComponent } from './conversation.component';

@NgModule({
  declarations: [ConversationComponent],
  imports: [
    ButtonModule,
    CommonModule,
    InfoIconModule,
    PinIconModule,
    PinStoryModule,
    ReplyIconModule,
    RouterModule,
    SendIconModule,
    SkeletonLoaderModule,
    TextareaModule,
    TranslateModule,
  ],
  exports: [ConversationComponent],
})
export class ConversationModule {}
