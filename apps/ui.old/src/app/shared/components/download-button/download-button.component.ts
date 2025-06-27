import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { StoryService } from '@app/core/services/api/story/story.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { FiltersService } from '@app/core/services/filters/filters.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { RequestPremiumModalComponent } from '../request-premium-modal/request-premium-modal.component';
import { PosthogService } from '@app/shared/services/posthog.service';
import { POSTHOG_EVENTS } from '@app/shared/enums/posthog-event.enum';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonComponent {
  downloadInProgress: boolean;

  constructor(
    private router: Router,
    private modalService: ModalServiceV2,
    private authService: AuthService,
    private filtersService: FiltersService,
    private storyService: StoryService,
    private datePipe: DatePipe,
    private posthogService: PosthogService,
    private cdref: ChangeDetectorRef,
  ) { }

  onDownloadButtonClick() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([`${MAIN_ROUTES.AUTH}/${AUTH_ROUTES.MAGIC_LINK_LOGIN}`], { state: { accountRequired: true } });
      return;
    }

    this.downloadInProgress = true;
    this.cdref.detectChanges();
    this.storyService.exportStoriesToCSV(this.filtersService.userFilters).subscribe({
      next: (response) => {
        this.downloadInProgress = false;
        this.cdref.detectChanges();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([response], { type: 'text/csv' }));
        link.download = `${this.datePipe.transform(new Date(), 'ddMMMyyyy-h:mm')}TalkToLoop.org FeedBack Data.csv`;
        link.click();
        this.posthogService.trackEvent(POSTHOG_EVENTS.DATA_EXPORTED_FE, { filters: this.filtersService.userFilters })
      },
      error: () => {
        this.modalService.open(RequestPremiumModalComponent).close$.subscribe((value) => {
          if (!value) {
            this.storyService.saveUserCSVActivity().subscribe();
          }
        });
        this.downloadInProgress = false;
        this.cdref.detectChanges();
      },
    });
  }
}
