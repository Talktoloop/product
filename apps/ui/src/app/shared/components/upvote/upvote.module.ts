import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArrowDropUpIconModule } from '@shared/icons/arrow-drop-up-icon/arrow-drop-up-icon.module';
import { ArrowUpwardIconModule } from '@shared/icons/arrow-upward-icon/arrow-upward-icon.module';
import { UpvoteComponent } from './upvote.component';

@NgModule({
  declarations: [UpvoteComponent],
  imports: [CommonModule, TranslateModule, ArrowUpwardIconModule, ArrowDropUpIconModule],
  exports: [UpvoteComponent],
})
export class UpvoteModule {}
