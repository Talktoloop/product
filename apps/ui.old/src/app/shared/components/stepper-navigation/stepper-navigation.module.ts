import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { ArrowNextIconModule } from '@app/shared/icons/arrow-next-icon/arrow-next-icon.module';
import { ArrowPreviousIconModule } from '@app/shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { StepperNavigationComponent } from './stepper-navigation.component';

@NgModule({
  declarations: [StepperNavigationComponent],
  imports: [CommonModule, TranslateModule, ButtonModule, ArrowPreviousIconModule, ArrowNextIconModule, CyModule],
  exports: [StepperNavigationComponent],
})
export class StepperNavigationModule {}
