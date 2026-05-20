import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoryTypeIconModule } from '@app/shared/components/story-category-icon/story-type-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoopDesignSystemModule } from '../../loop-design-system.module';
import { FilterTagComponent } from './filter-tag/filter-tag.component';
import { NewTagComponent } from './new-tag/new-tag.component';
import { RequiredTagComponent } from './required-tag/required-tag.component';
import { SelectorTagComponent } from './selector-tag/selector-tag.component';
import { SimpleTagComponent } from './simple-tag/simple-tag.component';
import { StoryTagComponent } from './story-tag/story-tag.component';
import { ModeratorTagComponent } from "./story-tag/moderator-tag/review-tag.component";

@NgModule({
  declarations: [FilterTagComponent, ModeratorTagComponent, NewTagComponent, RequiredTagComponent, SelectorTagComponent, SimpleTagComponent, StoryTagComponent],
  exports: [FilterTagComponent, ModeratorTagComponent, NewTagComponent, RequiredTagComponent, SelectorTagComponent, SimpleTagComponent, StoryTagComponent],
  imports: [CommonModule, LoopDesignSystemModule, StoryTypeIconModule, TranslateModule],
})
export class TagsModule {}
