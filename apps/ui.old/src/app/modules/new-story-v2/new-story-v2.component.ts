import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { UIService } from '@app/core/services/ui/ui.service';
import { BaseComponent } from '@app/shared/components/base.component';
import { IUserProfileAPI } from '@core/services/api/model/response/user-profile.model';
import { ProfileService } from '@core/services/api/profile/profile.service';
import { LocalStorageKeys, LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-story-v2',
  templateUrl: './new-story-v2.component.html',
  styleUrls: ['./new-story-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewStoryV2Component extends BaseComponent implements OnInit, OnDestroy {
  readonly LocalStorageKeys = LocalStorageKeys;
  userProfile: IUserProfileAPI = null;
  safeMode = false;

  constructor(
    private cd: ChangeDetectorRef,
    private googleAnalyticsService: GoogleAnalyticsService,
    private profileService: ProfileService,
    private ui: UIService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
    super();
    this.userProfile = this.profileService.userProfile;

    this.ui.uiUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.cd.detectChanges();
    });
  }

  ngOnInit(): void {
    this.ui.addHtmlClass('v2');
    this.googleAnalyticsService.event('newStoryCreation', 'open', this.userProfile?.email || 'anonymous');
    this.openShareExperienceModalIfNeeded();
  }

  safeModeChanged(safeMode: boolean): void {
    this.safeMode = safeMode;
    this.cd.markForCheck();
  }

  ngOnDestroy(): void {
    this.ui.removeHtmlClass('v2');
  }

  openShareExperienceModalIfNeeded(): void {
    const modalConfirmed = this.localStorageService.get<boolean>(LocalStorageKeys.SHARE_EXPERIENCE_MODAL_READ);
    if (!modalConfirmed) {
      this.localStorageService.set(LocalStorageKeys.SHARE_EXPERIENCE_MODAL_READ, 'true');
      this.router.navigate([`${MAIN_ROUTES.NEW_STORY}/info-modal`]);
    }
  }
}
