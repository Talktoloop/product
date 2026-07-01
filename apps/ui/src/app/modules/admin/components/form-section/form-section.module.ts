import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { FabButtonModule } from '@app/shared/components/fab-button/fab-button.module';
import { ModalV2Module } from '@app/shared/components/modal-v2/modal-v2.module';
import { PillsModule } from '@app/shared/components/pills/pills.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { DropdownDirectiveModule } from '@app/shared/directives/dropdown/dropdown-directive.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormSectionComponent } from './form-section.component';

@NgModule({
  declarations: [FormSectionComponent],
  exports: [FormSectionComponent, TranslateModule],
  imports: [
    CommonModule,
    TranslateModule,
    FabButtonModule,
    PillsModule,
    DropdownDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SharedModule,
    ModalV2Module,
    CyModule,
  ],
})
export class FormSectionModule {}
