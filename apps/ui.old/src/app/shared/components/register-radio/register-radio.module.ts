import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { RegisterRadioComponent } from './register-radio.component';

@NgModule({
  declarations: [RegisterRadioComponent],
  imports: [CommonModule, LoopDesignSystemModule],
  exports: [RegisterRadioComponent],
})
export class RegisterRadioModule {}
