import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { StoryService } from '@app/core/services/api/story/story.service';
import { DatePipe } from '@angular/common';
import { IUserProfileAPI } from "@core/services/api/model/response/user-profile.model";
import { ProfileService } from "@core/services/api/profile/profile.service";
import { OrganisationService } from "@core/services/api/organisation/organisation.service";
import { ORGANISATION_NAME } from "@shared/types/organisation-type.type";
import { FiltersService } from "@core/services/filters/filters.service";

@Component({
  selector: 'app-un-feedback-export-button',
  templateUrl: './un-feedback-export-button.component.html',
  styleUrls: ['./un-feedback-export-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class UnFeedbackExportButtonComponent implements OnInit {
  downloadInProgress = false;
  user: IUserProfileAPI | null = null;
  isLoopMember = false;
  organisationName = ORGANISATION_NAME.Loop;

  constructor(
    private storyService: StoryService,
    private profileService: ProfileService,
    private organisationService: OrganisationService,
    private cdref: ChangeDetectorRef,
    private datePipe: DatePipe,
    private filtersService: FiltersService,
) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;
        this.cdref.detectChanges();

        if (this.user) {
          this.isLoopMember = this.user.organisation.name === this.organisationName;
          this.cdref.detectChanges();
        }
      },
    });
  }

  onDownloadClick() {
    this.downloadInProgress = true;
    this.cdref.detectChanges();

    this.storyService.exportUNFeedbackToCSV(this.filtersService.userFilters).subscribe({
      next: (response) => {
        this.downloadInProgress = false;
        this.cdref.detectChanges();

        const formattedDate = this.datePipe.transform(new Date(), 'ddMMMyyyy-h:mm');
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([response], { type: 'text/csv' }));
        link.download = `${formattedDate}-UNFeedbackData.csv`;
        link.click();
      },
      error: () => {
        this.downloadInProgress = false;
        this.cdref.detectChanges();
      },
    });
  }
}
