import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoopDesignSystemModule } from '@app/shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '../../shared.module';
import { PasswordVisibilityModule } from '../password-visibility/password-visibility.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [CommonModule, FormsModule, PasswordVisibilityModule, SharedModule, LoopDesignSystemModule],
})
export class InputModule {}
