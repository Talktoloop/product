import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { ReplyDetailsService } from '@app/modules/inbox/replies/reply-details/reply-details.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IComment } from '@core/services/api/model/comment.model';
import { TranslateService } from '@ngx-translate/core';
import { RouteStep } from '@shared/components/route-stepper/route-step.model';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-reply-details',
  templateUrl: './reply-details.component.html',
  styleUrls: ['./reply-details.component.scss'],
})
export class ReplyDetailsComponent implements OnInit, OnDestroy {
  readonly backUrl = `/${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}`;
  public steps: RouteStep[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private replyDetailsService: ReplyDetailsService,
  ) {}

  ngOnInit(): void {
    this.replyDetailsService.reply.subscribe((reply: IComment) => {
      if (!reply) {
        return;
      }
      this.getSteps(reply.channel);
    });
    this.replyDetailsService.fetch(this.route.snapshot.params['id']);
  }

  getSteps(channel: CHANNEL_CONSTANTS) {
    const steps: RouteStep[] = [
      {
        title: this.translateService.instant(`admin.pendingReplyReview.reviewAndTranslate`),
        path: ['./', 'review-and-translate'],
      },
    ];
    if (channel === CHANNEL_CONSTANTS.IVRR) {
      steps.unshift({
        title: this.translateService.instant(`story.details.step.transcribe`),
        path: ['./', 'transcribe'],
      });
    }
    this.steps = steps;
  }

  ngOnDestroy(): void {
    this.replyDetailsService.reply.unsubscribe();
    this.replyDetailsService.s3fileUrl.unsubscribe();
    this.replyDetailsService.s3fileUrl = new ReplaySubject<string>();
    this.replyDetailsService.reply = new ReplaySubject<IComment>();
  }
}
