import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { RequestPremiumModalModule } from '../request-premium-modal/request-premium-modal.module';
import { DownloadButtonComponent } from './download-button.component';

@NgModule({
  declarations: [DownloadButtonComponent],
  imports: [CommonModule, ButtonModule, LoopDesignSystemModule, RequestPremiumModalModule, TranslateModule],
  exports: [DownloadButtonComponent],
})
export class DownloadButtonModule {}
