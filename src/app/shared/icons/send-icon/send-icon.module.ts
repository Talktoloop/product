import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SendIconComponent } from './send-icon.component';

@NgModule({
  declarations: [SendIconComponent],
  exports: [SendIconComponent],
  imports: [CommonModule],
})
export class SendIconModule {}
