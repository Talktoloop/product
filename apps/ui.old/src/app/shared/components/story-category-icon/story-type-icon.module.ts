import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConcernStoryTypeIconModule } from '../../icons/concern-story-type-icon/concern-story-type-icon.module';
import { HearingDifficultyIconModule } from '../../icons/hearing-difficulty-icon/hearing-difficulty-icon.module';
import { LearningDifficultyIconModule } from '../../icons/learing-difficulty-icon/learning-difficulty-icon.module';
import { MobilityDifficultyIconModule } from '../../icons/mobility-difficulty-icon/mobility-difficulty-icon.module';
import { OpinionStoryTypeIconModule } from '../../icons/opinion-story-type-icon/opinion-story-type-icon.module';
import { QuestionStoryTypeIconModule } from '../../icons/question-story-type-icon/question-story-type-icon.module';
import { SeeingDifficultyIconModule } from '../../icons/seeing-difficulty-icon/seeing-difficulty-icon.module';
import { SelfCareDifficultyIconModule } from '../../icons/self-care-difficulty-icon/self-care-difficulty-icon.module';
import { SensitiveStoryTypeIconModule } from '../../icons/sensitive-story-type-icon/sensitive-story-type-icon.module';
import { SpeakingDifficultyIconModule } from '../../icons/speaking-difficulty-icon/speaking-difficulty-icon.module';
import { RequestStoryTypeIconModule } from '../../icons/suggestion-story-type-icon/request-story-type-icon.module';
import { ThanksStoryTypeIconModule } from '../../icons/thanks-story-type-icon/thanks-story-type-icon.module';
import { StoryCategoryIconComponent } from './story-category-icon.component';

@NgModule({
  declarations: [StoryCategoryIconComponent],
  imports: [
    CommonModule,
    SensitiveStoryTypeIconModule,
    ThanksStoryTypeIconModule,
    QuestionStoryTypeIconModule,
    OpinionStoryTypeIconModule,
    RequestStoryTypeIconModule,
    ConcernStoryTypeIconModule,
    SeeingDifficultyIconModule,
    HearingDifficultyIconModule,
    SpeakingDifficultyIconModule,
    MobilityDifficultyIconModule,
    LearningDifficultyIconModule,
    SelfCareDifficultyIconModule,
  ],
  exports: [StoryCategoryIconComponent],
})
export class StoryTypeIconModule {}
