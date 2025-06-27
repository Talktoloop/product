import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownDirectiveModule } from '../../directives/dropdown/dropdown-directive.module';
import { ExpandMoreIconModule } from '../../icons/expand-more-icon/expand-more-icon.module';
import { ButtonModule } from '../button/button.module';
import { SelectOptionModule } from '../selectors/select-option/select-option.module';
import { SelectModule } from '../selectors/select/select.module';
import { SortComponent } from './sort.component';

@NgModule({
  declarations: [SortComponent],
  imports: [
    CommonModule,
    DropdownDirectiveModule,
    ExpandMoreIconModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    SelectOptionModule,
    SharedModule,
    TranslateModule,
    ButtonModule,
  ],
  exports: [SortComponent],
})
export class SortModule {}
