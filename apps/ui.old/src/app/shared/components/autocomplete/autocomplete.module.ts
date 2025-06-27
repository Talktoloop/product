import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownDirectiveModule } from '../../directives/dropdown/dropdown-directive.module';
import { AddIconModule } from '../../icons/add-icon/add-icon.module';
import { ErrorIconModule } from '../../icons/error-icon/error-icon.module';
import { ExpandMoreIconModule } from '../../icons/expand-more-icon/expand-more-icon.module';
import { NewLineIconModule } from '../../icons/new-line-icon/new-line-icon.module';
import { SearchIconModule } from '../../icons/search-icon/search-icon.module';
import { SharedModule } from '../../shared.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { SelectOptionModule } from '../selectors/select-option/select-option.module';
import { SelectModule } from '../selectors/select/select.module';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    InputModule,
    SearchIconModule,
    ExpandMoreIconModule,
    ButtonModule,
    SelectModule,
    DropdownDirectiveModule,
    SelectOptionModule,
    NewLineIconModule,
    AddIconModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    ErrorIconModule,
    CyModule,
  ],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {}
