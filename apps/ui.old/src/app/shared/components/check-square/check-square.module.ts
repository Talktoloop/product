import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckSquareComponent } from './check-square.component';

@NgModule({
  declarations: [CheckSquareComponent],
  exports: [CheckSquareComponent],
    imports: [CommonModule, NgOptimizedImage],
})
export class CheckSquareModule {}
