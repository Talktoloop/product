import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownDirectiveModule } from '../../directives/dropdown/dropdown-directive.module';
import { ExpandMoreIconModule } from '../../icons/expand-more-icon/expand-more-icon.module';
import { SharedModule } from '../../shared.module';
import { InputModule } from '../input/input.module';
import { SelectOptionModule } from '../selectors/select-option/select-option.module';
import { SelectModule } from '../selectors/select/select.module';
import { PhoneInputDirective } from './phone-input.directive';
import { PhonePickerComponent } from './phone-picker.component';

@NgModule({
  declarations: [PhonePickerComponent, PhoneInputDirective, PhoneInputDirective],
  exports: [PhonePickerComponent],
  imports: [
    CommonModule,
    InputModule,
    SelectModule,
    SelectOptionModule,
    DropdownDirectiveModule,
    SharedModule,
    FormsModule,
    ExpandMoreIconModule,
    TranslateModule,
    ReactiveFormsModule,
    CyModule,
  ],
})
export class PhonePickerModule {}
