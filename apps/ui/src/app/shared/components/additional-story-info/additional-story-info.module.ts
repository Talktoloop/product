import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { AdditionalStoryInfoSectionModule } from '../additional-story-info-section/additional-story-info-section.module';
import { CardModule } from '../card2/card.module';
import { PillsModule } from '../pills/pills.module';
import { StoryTypeIconModule } from '../story-category-icon/story-type-icon.module';
import { AdditionalStoryInfoComponent } from './additional-story-info.component';

@NgModule({
  declarations: [AdditionalStoryInfoComponent],
  imports: [CommonModule, TranslateModule, CardModule, SharedModule, AdditionalStoryInfoSectionModule, PillsModule, StoryTypeIconModule],
  exports: [AdditionalStoryInfoComponent],
})
export class AdditionalStoryInfoModule {}
