import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouteStepperModule } from '@app/shared/components/route-stepper/route-stepper.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedInboxModule } from '../../shared/shared.module';
import { StoriesDetailsRoutingModule } from './stories-details-routing.module';
import { StoryDetailsService } from './story-details.service';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { StoryReviewModule } from './story-review/story-review.module';
import { StoryTranslateModule } from './story-translate/story-translate.module';

@NgModule({
  declarations: [StoryDetailsComponent],
  providers: [StoryDetailsService],
  imports: [
    CommonModule,
    RouteStepperModule,
    SharedInboxModule,
    SharedModule,
    StoriesDetailsRoutingModule,
    StoryReviewModule,
    StoryTranslateModule,
    TranslateModule,
  ],
})
export class StoriesDetailsModule {}
