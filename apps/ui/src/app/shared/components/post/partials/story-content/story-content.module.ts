import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { StoryContentComponent } from './story-content.component';

@NgModule({
  declarations: [StoryContentComponent],
  exports: [StoryContentComponent],
  imports: [CommonModule, ButtonModule, RouterModule, TranslateModule],
})
export class StoryContentModule {}
