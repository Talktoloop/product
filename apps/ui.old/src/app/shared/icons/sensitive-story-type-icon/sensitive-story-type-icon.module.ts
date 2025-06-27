import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SensitiveStoryTypeIconComponent } from './sensitive-story-type-icon.component';

@NgModule({
  declarations: [SensitiveStoryTypeIconComponent],
  exports: [SensitiveStoryTypeIconComponent],
  imports: [CommonModule],
})
export class SensitiveStoryTypeIconModule {}
