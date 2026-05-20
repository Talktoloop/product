import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { SelectOptionModule } from '@shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@shared/components/selectors/select/select.module';
import { DropdownDirectiveModule } from '@shared/directives/dropdown/dropdown-directive.module';
import { AccountCircleIconModule } from '@shared/icons/account-circle-icon/account-circle-icon.module';
import { AddCircleIconModule } from '@shared/icons/add-circle-icon/add-circle-icon.module';
import { ArrowDropUpIconModule } from '@shared/icons/arrow-drop-up-icon/arrow-drop-up-icon.module';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { MenuIconModule } from '@shared/icons/menu-icon/menu-icon.module';
import { OpenInNewIconModule } from '@shared/icons/open-in-new-icon/open-in-new-icon.module';
import { OpenRegAltIconModule } from '@shared/icons/open-reg-alt-icon/open-reg-alt-icon.module';
import { SharedModule } from '@shared/shared.module';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { LanguagePickerModalComponent } from './components/language-picker/language-picker-modal/language-picker-modal.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, LanguagePickerComponent, LoginStatusComponent, AsideMenuComponent, LanguagePickerModalComponent],
  imports: [
    AccountCircleIconModule,
    AddCircleIconModule,
    ArrowDropUpIconModule,
    ButtonModule,
    CloseIconModule,
    CommonModule,
    CyModule,
    DropdownDirectiveModule,
    ExpandMoreIconModule,
    MenuIconModule,
    ModalV2Module,
    OpenInNewIconModule,
    OpenRegAltIconModule,
    RouterModule,
    SelectOptionModule,
    SharedModule,
    TranslateModule,
    SelectModule,
    MatIconModule,
  ],
  exports: [HeaderComponent, LanguagePickerComponent],
})
export class HeaderModule {}
