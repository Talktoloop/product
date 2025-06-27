import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from '@shared/components/card2/card.module';
import { PostAuthorDateModule } from '@shared/components/post/partials/post-author-date/post-author-date.module';
import { StoryContentModule } from '@shared/components/post/partials/story-content/story-content.module';
import { StoryOrganisationsModule } from '@shared/components/post/partials/story-organisations/story-organisations.module';
import { StoryTranslationsModule } from '@shared/components/post/partials/story-translations/story-translations.module';
import { TooltipDirectiveModule } from '@shared/directives/tooltip/tooltip.directive.module';
import { PostActionsModule } from '../partials/post-actions/post-actions.module';
import { PostContextMenuModule } from '../partials/post-context-menu/post-context-menu.module';
import { PostPreviewComponent } from './post-preview.component';
import { TagsModule } from '@app/shared/loop-design-system/components/tags/tags.module';
import { ShareIconModule } from "@shared/icons/share-icon/share-icon.module";

@NgModule({
  declarations: [PostPreviewComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    PostAuthorDateModule,
    PostActionsModule,
    StoryOrganisationsModule,
    StoryContentModule,
    StoryTranslationsModule,
    CardModule,
    PostContextMenuModule,
    TooltipDirectiveModule,
    TagsModule,
    ShareIconModule,
  ],
  exports: [PostPreviewComponent],
})
export class PostPreviewModule {}
