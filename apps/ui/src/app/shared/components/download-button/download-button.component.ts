import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { StoryService } from '@app/core/services/api/story/story.service';
import { FiltersService } from '@app/core/services/filters/filters.service';
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
    private filtersService: FiltersService,
    private storyService: StoryService,
    private datePipe: DatePipe,
    private posthogService: PosthogService,
    private cdref: ChangeDetectorRef,
  ) { }

  onDownloadButtonClick() {
    // Export is open to everyone (no login, no "Loop Advocate" gate) ahead of
    // the platform shutdown.
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
        this.downloadInProgress = false;
        this.cdref.detectChanges();
      },
    });
  }
}
