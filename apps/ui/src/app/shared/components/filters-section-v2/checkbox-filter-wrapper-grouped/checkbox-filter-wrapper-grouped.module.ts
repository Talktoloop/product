import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { ButtonModule } from '../../button/button.module';
import { CheckboxWrapperModule } from '../../checkbox-wrapper/checkbox-wrapper.module';
import { CheckboxFilterWrapperGroupedComponent } from './checkbox-filter-wrapper-grouped.component';

@NgModule({
  declarations: [CheckboxFilterWrapperGroupedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    ExpandMoreIconModule,
    CheckboxWrapperModule,
    CyModule,
  ],
  exports: [CheckboxFilterWrapperGroupedComponent],
})
export class CheckboxFilterWrapperGroupedModule {}
