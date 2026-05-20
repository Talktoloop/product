import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EyeHideIconModule } from '@app/shared/icons/eye-hide-icon/eye-hide-icon.module';
import { EyeIconModule } from '@app/shared/icons/eye-icon/eye-icon.module';
import { PasswordVisibilityComponent } from './password-visibility.component';

@NgModule({
  declarations: [PasswordVisibilityComponent],
  exports: [PasswordVisibilityComponent],
  imports: [CommonModule, EyeIconModule, EyeHideIconModule],
})
export class PasswordVisibilityModule {}
