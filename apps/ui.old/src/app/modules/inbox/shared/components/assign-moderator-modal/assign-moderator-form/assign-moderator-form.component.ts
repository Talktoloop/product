import { Component, Inject, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { IModeratorStoryBrief } from '@app/core/services/api/model/response/get-stories-moderator.model';
import { ModeratorDetailList } from '@app/core/services/api/model/response/moderator-details.model';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Subject, take, takeUntil, debounceTime } from 'rxjs';

@Component({
  selector: 'app-assign-moderator-form',
  templateUrl: './assign-moderator-form.component.html',
  styleUrls: ['./assign-moderator-form.component.scss'],
})
export class AssignModeratorFormComponent extends ModalBase implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  @Output() confirm = new Subject<any>();

  moderators: ModeratorDetailList[] = [];
  searchTerm: string;
  searchOrganisation = new FormControl();

  selectedModerator: ModeratorDetailList | null = null;
  isModeratorSelected = true;
  allModerators: ModeratorDetailList[] = [];

  constructor(
    @Inject('close$') close$: Subject<void>,
    @Optional() @Inject('selectedItems') public selectedItems?: IModeratorStoryBrief[],
    private toastr?: ToastrService,
    private metaDataService?: MetaDataService,
    private translateService?: TranslateService,
  ) {
    super(close$);
  }

  ngOnInit(): void {
    this.loadModerators();

    this.searchOrganisation.valueChanges
      .pipe(debounceTime(200), takeUntil(this.destroyed$))
      .subscribe((query) => {
        this.filterModerators(query);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(void 0);
    this.destroyed$.complete();
  }

  private loadModerators(): void {
    this.metaDataService
      .getModeratorsList()
      .pipe(
        take(1),
        map((response) => {
          return response.map((moderator) => ({
            first_name: moderator.first_name,
            last_name: moderator.last_name,
            email: moderator.email,
            id: moderator.id,
            role: moderator.role,
            nickname: moderator.nickname,
            selected: false,
          }));
        }),
        catchError((error) => {
          this.toastr.error(
            this.translateService.instant('error.generic.title'),
            this.translateService.instant('error.generic.subtitle')
          );
          this.onModalClose();
          throw error;
        }),
      )
      .subscribe((moderators) => {
        this.moderators = moderators;
        this.allModerators = moderators;
      });
  }

  private filterModerators(query: string): void {
    if (!query || !query.length) {
      this.moderators = this.allModerators;
    } else {
      this.moderators = this.allModerators.filter((moderator) =>
        moderator.nickname.toLowerCase().includes(query.toLowerCase()) ||
        moderator.email.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  onModeratorSelect(moderator: any): void {
    this.isModeratorSelected = false;
    this.moderators.forEach((mod) => (mod.selected = false));
    moderator.selected = true;
    this.selectedModerator = moderator;
  }

  confirmAssignment(): void {
    if (this.selectedModerator) {
      const payload = {
        moderatorId: this.selectedModerator.id,
        moderatorName: this.selectedModerator.nickname,
        assignedItems: this.selectedItems?.map((story) => story.id) || [],
      };
      this.confirm.next(payload);
      this.onModalClose();
    }
  }

  getPlaceholder(): string {
    return this.translateService.instant('admin.assignModeratorModal.searchPlaceholder');
  }
}
