import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { ArrowNextIconModule } from '@shared/icons/arrow-next-icon/arrow-next-icon.module';
import { ArrowPreviousIconModule } from '@shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { ActionsFooterComponent } from './actions-footer.component';

@NgModule({
  declarations: [ActionsFooterComponent],
  imports: [CommonModule, ButtonModule, TranslateModule, ArrowNextIconModule, ArrowPreviousIconModule, CyModule],
  exports: [ActionsFooterComponent],
})
export class ActionsFooterModule {}
