import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INBOX_REPLY_ROUTES } from '@app/app-routing.props';
import { ReplyDetailsComponent } from '@app/modules/inbox/replies/reply-details/reply-details.component';
import { ReplyDetailsService } from '@app/modules/inbox/replies/reply-details/reply-details.service';
import { ReplyReviewAndTranslateComponent } from '@app/modules/inbox/replies/reply-details/reply-review-and-translate/reply-review-and-translate.component';
import { ReplyTranscribeComponent } from '@app/modules/inbox/replies/reply-details/reply-transcribe/reply-transcribe.component';

const routes: Routes = [
  {
    path: '',
    component: ReplyDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: INBOX_REPLY_ROUTES.REPLY_TRANSCRIBE,
        pathMatch: 'prefix',
      },
      {
        path: INBOX_REPLY_ROUTES.REPLY_TRANSCRIBE,
        component: ReplyTranscribeComponent,
        data: { title: 'transcribeReply' },
        pathMatch: 'prefix',
      },
      {
        path: INBOX_REPLY_ROUTES.REPLY_REVIEW_AND_TRANSLATE,
        component: ReplyReviewAndTranslateComponent,
        data: { title: 'reviewAndTranslate' },
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ReplyDetailsService],
})
export class ReplyDetailsRoutingModule {}
