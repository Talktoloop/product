import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { ModalV2Module } from '../modal-v2/modal-v2.module';
import { RequestPremiumModalComponent } from './request-premium-modal.component';

@NgModule({
  declarations: [RequestPremiumModalComponent],
  imports: [CommonModule, ModalV2Module, ButtonModule, TranslateModule, LoopDesignSystemModule],
  exports: [RequestPremiumModalComponent],
})
export class RequestPremiumModalModule {}
