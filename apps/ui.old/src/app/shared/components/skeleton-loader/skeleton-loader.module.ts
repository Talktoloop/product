import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonLoaderLineComponent } from './skeleton-loader-line/skeleton-loader-line.component';
import { SkeletonLoaderComponent } from './skeleton-loader.component';

@NgModule({
  declarations: [SkeletonLoaderComponent, SkeletonLoaderLineComponent],
  exports: [SkeletonLoaderComponent],
  imports: [CommonModule],
})
export class SkeletonLoaderModule {}
