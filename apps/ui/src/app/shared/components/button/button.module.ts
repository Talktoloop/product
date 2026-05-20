import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineLoadingModule } from '../inline-loading/inline-loading.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, InlineLoadingModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
