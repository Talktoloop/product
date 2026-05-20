import { Injectable } from '@angular/core';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { CommentService } from '@core/services/api/comment/comment.service';
import { IVRRService } from '@core/services/api/ivrr/ivrr';
import { IComment } from '@core/services/api/model/comment.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

@Injectable()
export class ReplyDetailsService {
  reply = new ReplaySubject<IComment>(1);
  s3fileUrl = new ReplaySubject<string>(1);
  thematicsMetaData: IGetThematicAPIExtended[] = [];
  thematics: number[] = [];

  constructor(
    private toastr: ToastrService,
    private ivrrService: IVRRService,
    private commentService: CommentService,
    private translateService: TranslateService,
    private metaDataService: MetaDataService
  ) {}

  fetch(id: string): void {
    this.loadThematics().pipe(
      switchMap(() => {
        return this.commentService.getCommentModerator(id);
      }),
      catchError(() => {
        this.handleError();
        return of(null);
      })
    ).subscribe((replyFetched: IComment | null) => {
      if (replyFetched) {
        this.thematics = replyFetched.thematics;
        if (replyFetched.s3FileId) {
          this.ivrrService.getSignedUrlForS3Audio(replyFetched.s3FileId).subscribe(
            (fileUrl: string) => {
              this.s3fileUrl.next(fileUrl);
              this.reply.next(replyFetched);
            },
            () => {
              this.handleError();
            }
          );
        } else {
          this.reply.next(replyFetched);
        }
      }
    });
  }

  private loadThematics() {
    return this.metaDataService.thematicAreas$.pipe(
      take(1),
      map((thematics: IGetThematicAPIExtended[]) => {
        this.thematicsMetaData = thematics;
        return thematics;
      })
    );
  }

  private handleError(): void {
    this.toastr.error(
      this.translateService.instant(`admin.comment.toast.preview.error.title`),
      this.translateService.instant('admin.comment.toast.preview.error.subtitle')
    );
  }
}
