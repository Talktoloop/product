import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { PillComponent } from './pill/pill.component';
import { PillsComponent } from './pills.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [PillsComponent, PillComponent],
  exports: [PillComponent, PillsComponent],
  imports: [CommonModule, CloseIconModule, CyModule, TranslateModule],
})
export class PillsModule {}
