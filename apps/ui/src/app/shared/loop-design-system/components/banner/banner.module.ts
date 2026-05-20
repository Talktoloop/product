import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoopDesignSystemModule } from '../../loop-design-system.module';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [CommonModule, LoopDesignSystemModule],
})
export class BannerModule {}
