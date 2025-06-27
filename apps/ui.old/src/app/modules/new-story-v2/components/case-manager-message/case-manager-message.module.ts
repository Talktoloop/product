import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { CaseManagerMessageComponent } from './case-manager-message.component';

@NgModule({
  declarations: [CaseManagerMessageComponent],
  exports: [CaseManagerMessageComponent],
  imports: [CommonModule, TranslateModule, CyModule],
})
export class CaseManagerMessageModule {}
