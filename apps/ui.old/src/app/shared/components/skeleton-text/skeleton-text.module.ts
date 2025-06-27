import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonTextComponent } from './skeleton-text.component';

@NgModule({
  declarations: [SkeletonTextComponent],
  exports: [SkeletonTextComponent],
  imports: [CommonModule],
})
export class SkeletonTextModule {}
