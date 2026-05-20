import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineLoadingComponent } from './inline-loading.component';

@NgModule({
  declarations: [InlineLoadingComponent],
  exports: [InlineLoadingComponent],
  imports: [CommonModule],
})
export class InlineLoadingModule {}
