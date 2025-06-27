import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReplyDetailsRoutingModule } from '@app/modules/inbox/replies/reply-details/reply-details-routing.module';
import { ReplyDetailsComponent } from '@app/modules/inbox/replies/reply-details/reply-details.component';
import { ReplyDetailsService } from '@app/modules/inbox/replies/reply-details/reply-details.service';
import { ReplyReviewAndTranslateComponent } from '@app/modules/inbox/replies/reply-details/reply-review-and-translate/reply-review-and-translate.component';
import { ReplyTranscribeComponent } from '@app/modules/inbox/replies/reply-details/reply-transcribe/reply-transcribe.component';
import { InboxRejectModalModule } from '@app/modules/inbox/shared/components/reject-modal/reject-modal.module';
import { TopBarModule } from '@app/modules/inbox/shared/components/top-bar/top-bar.module';
import { SharedInboxModule } from '@app/modules/inbox/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AudioPlayerModule } from '@shared/components/audio-player/audio-player.module';
import { ButtonModule } from '@shared/components/button/button.module';
import { InlineLoadingModule } from '@shared/components/inline-loading/inline-loading.module';
import { RouteStepperModule } from '@shared/components/route-stepper/route-stepper.module';
import { SkeletonTextModule } from '@shared/components/skeleton-text/skeleton-text.module';
import { SlideToggleModule } from '@shared/components/slide-toggle/slide-toggle.module';
import { TextareaV2Module } from '@shared/components/textarea-v2/textarea-v2.module';
import { TooltipDirectiveModule } from '@shared/directives/tooltip/tooltip.directive.module';
import { TagsModule } from '@shared/loop-design-system/components/tags/tags.module';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ReplyDetailsComponent, ReplyTranscribeComponent, ReplyReviewAndTranslateComponent],
  imports: [
    CommonModule,
    TopBarModule,
    SharedModule,
    TranslateModule,
    SharedInboxModule,
    RouteStepperModule,
    SkeletonTextModule,
    ReplyDetailsRoutingModule,
    AudioPlayerModule,
    TextareaV2Module,
    TooltipDirectiveModule,
    TagsModule,
    InboxRejectModalModule,
    LoopDesignSystemModule,
    SlideToggleModule,
    ButtonModule,
    InlineLoadingModule,
  ],
  providers: [ReplyDetailsService],
})
export class ReplyDetailsModule {}
