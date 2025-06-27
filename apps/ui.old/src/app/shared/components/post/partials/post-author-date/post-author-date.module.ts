import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PillsModule } from '@shared/components/pills/pills.module';
import { PostAuthorDateComponent } from './post-author-date.component';
import { TagsModule } from '@app/shared/loop-design-system/components/tags/tags.module';

@NgModule({
  declarations: [PostAuthorDateComponent],
  imports: [CommonModule, TranslateModule, PillsModule, TagsModule],
  exports: [PostAuthorDateComponent],
  providers: [DatePipe],
})
export class PostAuthorDateModule {}
