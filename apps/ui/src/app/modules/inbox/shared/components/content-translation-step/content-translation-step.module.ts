import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { FabButtonModule } from '@app/shared/components/fab-button/fab-button.module';
import { TextareaV2Module } from '@app/shared/components/textarea-v2/textarea-v2.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { AddCircleIconModule } from '@app/shared/icons/add-circle-icon/add-circle-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageAutocompleteModule } from '../language-autocomplete/language-autocomplete.module';
import { ContentTranslationStepComponent } from './content-translation-step.component';

@NgModule({
  declarations: [ContentTranslationStepComponent],
  imports: [
    AddCircleIconModule,
    ButtonModule,
    CommonModule,
    CyModule,
    FabButtonModule,
    FormsModule,
    LanguageAutocompleteModule,
    ReactiveFormsModule,
    TextareaV2Module,
    TranslateModule,
  ],
  exports: [ContentTranslationStepComponent],
})
export class ContentTranslationStepModule {}
