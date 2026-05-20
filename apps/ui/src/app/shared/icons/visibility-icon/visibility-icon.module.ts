import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VisibilityIconComponent } from './visibility-icon.component';

@NgModule({
  declarations: [VisibilityIconComponent],
  exports: [VisibilityIconComponent],
  imports: [CommonModule],
})
export class VisibilityIconModule {}
