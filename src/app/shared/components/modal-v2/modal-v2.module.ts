import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { CloseIconModule } from '../../icons/close-icon/close-icon.module';
import { ModalV2Component } from './modal-v2.component';
import { FiltersPresetService } from "@core/services/api/filters-preset/filters-preset.service";

@NgModule({
  declarations: [ModalV2Component],
  imports: [CloseIconModule, CommonModule, TranslateModule.forChild(), CyModule, SharedModule],
  exports: [ModalV2Component],
  providers: [FiltersPresetService],
})
export class ModalV2Module {}
