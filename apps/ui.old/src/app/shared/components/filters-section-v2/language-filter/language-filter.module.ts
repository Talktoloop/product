import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxWrapperModule } from '../../checkbox-wrapper/checkbox-wrapper.module';
import { LanguageFilterComponent } from './language-filter.component';

@NgModule({
  declarations: [LanguageFilterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxWrapperModule, TranslateModule, SharedModule],
  exports: [LanguageFilterComponent],
})
export class LanguageFilterModule {}
