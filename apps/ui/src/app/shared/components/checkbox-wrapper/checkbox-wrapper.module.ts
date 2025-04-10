import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CheckboxWrapperComponent } from './checkbox-wrapper.component';

@NgModule({
  declarations: [CheckboxWrapperComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, CheckboxModule, ButtonModule, CyModule],
  exports: [CheckboxWrapperComponent],
})
export class CheckboxWrapperModule {}
