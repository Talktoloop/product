import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { StoryTranslationTypeIconModule } from '@shared/components/post/partials/story-translation-type-icon/story-translation-type-icon.module';
import { SelectOptionModule } from '@shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@shared/components/selectors/select/select.module';
import { DropdownDirectiveModule } from '@shared/directives/dropdown/dropdown-directive.module';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { SharedModule } from '@shared/shared.module';
import { StoryTranslationsComponent } from './story-translations.component';

@NgModule({
  declarations: [StoryTranslationsComponent],
  exports: [StoryTranslationsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CloseIconModule,
    ButtonModule,
    SelectModule,
    SelectOptionModule,
    StoryTranslationTypeIconModule,
    SharedModule,
    ExpandMoreIconModule,
    DropdownDirectiveModule,
  ],
})
export class StoryTranslationsModule {}
