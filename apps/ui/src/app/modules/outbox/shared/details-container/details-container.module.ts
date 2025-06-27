import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedStoryDetailsModule } from '@app/modules/inbox/stories/story-details/shared/shared-story-details.module';
import { DetailsContainerComponent } from '@app/modules/outbox/shared/details-container/details-container.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DetailsContainerComponent],
  imports: [CommonModule, TranslateModule, RouterModule, SharedStoryDetailsModule],
  exports: [DetailsContainerComponent],
})
export class DetailsContainerModule {}
