import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { IModeratorCommentBrief } from '@app/core/services/api/model/response/get-comments-moderator.model';
import { UIService } from '@app/core/services/ui/ui.service';
import { RepliesService } from '@app/modules/inbox/replies/replies.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { MobileTableAction, MobileTableActionCallback } from '@app/shared/components/mobile-table/mobile-table.model';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { InboxTable } from '../../shared/inbox-table.model';
import { repliesColumns } from './replies-columns.const';

@Component({
  selector: 'app-replies-list',
  templateUrl: './replies-list.component.html',
  styleUrls: ['./replies-list.component.scss'],
})
export class RepliesListComponent extends BaseComponent implements AfterViewInit, OnDestroy {
  columns: InboxTable[] = repliesColumns;
  displayedColumns: string[] = this.columns.map((column: InboxTable) => column.key);
  listActions: MobileTableAction<IModeratorCommentBrief>[] = [new MobileTableAction('inbox.table.actions.review')];
  DATE_FORMAT = 'dd/MM/yy h:mm a';
  processedReplyId: string;
  loading: boolean;
  private deleteLastVisitedId: number;

  constructor(
    public ui: UIService,
    private router: Router,
    public repliesService: RepliesService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
  ) {
    super();
  }

  getColumnHeader(column: string): string {
    const translation = this.columns.find((element: InboxTable) => element.key === column)?.label;

    return translation ? this.translateService.instant(translation) : 'Unknown';
  }

  rowClicked(item: IModeratorCommentBrief): void {
    this.repliesService.lastVisitedId$.next(item.id);
    this.repliesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    this.router.navigateByUrl(`${MAIN_ROUTES.INBOX}/${INBOX_ROUTES.REPLIES}/${item.id}`);
  }

  onActionClick(callback: MobileTableActionCallback<IModeratorCommentBrief>): void {
    this.repliesService.lastVisitedId$.next(callback.element.id);
    this.repliesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    if (callback.action === this.listActions[0]) {
      this.router.navigate([MAIN_ROUTES.INBOX, INBOX_ROUTES.REPLIES, callback.element.id]);
    }
  }

  ngAfterViewInit(): void {
    const animationDelay = 1000;
    this.processedReplyId = this.route.snapshot.queryParamMap.get('processedReplyId');

    this.repliesService.loading$.pipe(takeUntil(this.destroyed$)).subscribe((loading) => {
      this.loading = loading;
      this.cdRef.detectChanges();
    });
    if (this.repliesService.lastVisitedId$.getValue()) {
      setTimeout(() => {
        window.scrollTo(0, this.repliesService.scrollPos$.getValue());
      });
      setTimeout(() => {
        this.repliesService.deleteElement(this.processedReplyId);
      }, animationDelay);
    }
    this.deleteLastVisitedId = setTimeout(() => {
      this.repliesService.lastVisitedId$.next(null);
    }, animationDelay) as never;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.deleteLastVisitedId) {
      clearTimeout(this.deleteLastVisitedId);
    }
  }
}
