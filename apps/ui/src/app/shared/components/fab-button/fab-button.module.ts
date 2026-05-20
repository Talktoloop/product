import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseIconModule } from '@app/shared/icons/close-icon/close-icon.module';
import { FabButtonComponent } from './fab-button.component';

@NgModule({
  declarations: [FabButtonComponent],
  imports: [CommonModule, CloseIconModule],
  exports: [FabButtonComponent],
})
export class FabButtonModule {}
