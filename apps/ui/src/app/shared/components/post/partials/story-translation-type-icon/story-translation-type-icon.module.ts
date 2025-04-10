import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { OpenRegAltIconModule } from '@shared/icons/open-reg-alt-icon/open-reg-alt-icon.module';
import { TranslateIconModule } from '@shared/icons/translate-icon/translate-icon.module';
import { StoryTranslationTypeIconComponent } from './story-translation-type-icon.component';

@NgModule({
  declarations: [StoryTranslationTypeIconComponent],
  exports: [StoryTranslationTypeIconComponent],
  imports: [CommonModule, OpenRegAltIconModule, TranslateIconModule, CloseIconModule],
})
export class StoryTranslationTypeIconModule {}
