import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalloutComponent } from './callout.component';

@NgModule({
  declarations: [CalloutComponent],
  exports: [CalloutComponent],
  imports: [CommonModule],
})
export class CalloutModule {}
