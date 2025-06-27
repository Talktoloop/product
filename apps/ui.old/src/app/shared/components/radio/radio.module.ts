import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent, RadioGroupComponent],
  imports: [CommonModule],
  exports: [RadioComponent, RadioGroupComponent],
})
export class RadioModule {}
