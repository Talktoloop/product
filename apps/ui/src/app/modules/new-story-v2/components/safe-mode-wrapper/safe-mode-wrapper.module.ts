import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CyModule } from '@app/shared/directives/cy/cy.module';
import { TranslateModule } from '@ngx-translate/core';
import { LockIconModule } from '@shared/icons/lock-icon/lock-icon.module';
import { SafeModeWrapperComponent } from './safe-mode-wrapper.component';

@NgModule({
  declarations: [SafeModeWrapperComponent],
  imports: [CommonModule, TranslateModule, LockIconModule, CyModule],
  exports: [SafeModeWrapperComponent],
})
export class SafeModeWrapperModule {}
