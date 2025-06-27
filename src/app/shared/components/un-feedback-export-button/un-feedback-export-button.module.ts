import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { UnFeedbackExportButtonComponent } from './un-feedback-export-button.component';

@NgModule({
  declarations: [UnFeedbackExportButtonComponent],
  imports: [CommonModule, ButtonModule, LoopDesignSystemModule, TranslateModule, NgOptimizedImage],
  exports: [UnFeedbackExportButtonComponent],
})
export class UnFeedbackExportButtonModule {}
