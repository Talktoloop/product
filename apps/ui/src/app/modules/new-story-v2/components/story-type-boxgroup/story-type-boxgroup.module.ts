import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxIconSquareModule } from '@app/shared/components/checkbox/checkbox-icon-square/checkbox-icon-square.module';
import { NewStoryRadioModule } from '@app/shared/components/new-story-radio/new-story-radio.module';
import { RadioModule } from '@app/shared/components/radio/radio.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { InfoLinkModule } from '@shared/components/info-link/info-link.module';
import { StoryTypeIconModule } from '@shared/components/story-category-icon/story-type-icon.module';
import { StoryTypeBoxgroupComponent } from './story-type-boxgroup.component';
@NgModule({
  declarations: [StoryTypeBoxgroupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxIconSquareModule,
    StoryTypeIconModule,
    TranslateModule,
    RadioModule,
    NewStoryRadioModule,
    InfoLinkModule,
    CyModule,
  ],
  exports: [StoryTypeBoxgroupComponent],
})
export class StoryTypeBoxgroupModule {}
