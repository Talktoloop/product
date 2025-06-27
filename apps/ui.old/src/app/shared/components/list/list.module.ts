import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DownloadButtonModule } from '../download-button/download-button.module';
import { InlineLoadingModule } from '../inline-loading/inline-loading.module';
import { PostPreviewModule } from '../post/post-preview/post-preview.module';
import { SkeletonTextModule } from '../skeleton-text/skeleton-text.module';
import { SortModule } from '../sort/sort.module';
import { ListComponent } from './list.component';
import { UnFeedbackExportButtonModule
} from "@shared/components/un-feedback-export-button/un-feedback-export-button.module";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    InlineLoadingModule,
    PostPreviewModule,
    SkeletonTextModule,
    SortModule,
    TranslateModule,
    DownloadButtonModule,
    UnFeedbackExportButtonModule,
  ],
  exports: [ListComponent],
})
export class ListModule {}
