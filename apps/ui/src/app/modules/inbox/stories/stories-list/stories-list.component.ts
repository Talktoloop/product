import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { INBOX_ROUTES, MAIN_ROUTES } from '@app/app-routing.props';
import { FiltersService } from '@app/core/services/filters/filters.service';
import { INBOX_FILTER_TAB } from '@app/modules/inbox/inbox-filter-tab.enum';
import { InboxFiltersService } from '@app/modules/inbox/inbox-filters.service';
import { InboxRejectFormComponent } from '@app/modules/inbox/shared/components/reject-modal/reject-form/reject-form.component';
import { InboxTable } from '@app/modules/inbox/shared/inbox-table.model';
import { storiesColumns } from '@app/modules/inbox/stories/stories-list/stories-columns.const';
import { StoriesService } from '@app/modules/inbox/stories/stories.service';
import { StoryDetailsService } from '@app/modules/inbox/stories/story-details/story-details.service';
import { AudioService } from '@app/shared/components/audio-player/audio.service';
import { CHANNEL_CONSTANTS, TEXT_CHANNELS } from '@core/services/api/model/channel.enum';
import { IRejectReason } from '@core/services/api/model/request/reject-reason.model';
import { IModeratorStoryBrief } from '@core/services/api/model/response/get-stories-moderator.model';
import { StoryService } from '@core/services/api/story/story.service';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';
import { UIService } from '@core/services/ui/ui.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { MobileTableAction, MobileTableActionCallback, MobileTableDataRow } from '@shared/components/mobile-table/mobile-table.model';
import { STORY_STATUS } from '@shared/enums/story-status.enum';
import { ToastrService } from 'ngx-toastr';
import { take, takeUntil } from 'rxjs/operators';
import { AssignModeratorFormComponent } from '../../shared/components/assign-moderator-modal/assign-moderator-form/assign-moderator-form.component';
import { SelectionService } from '../pagination/selection.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss'],
})
export class StoriesListComponent extends BaseComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('mobileSelection') mobileSelection: ElementRef;
  DATE_FORMAT = 'dd/MM/yy h:mm a';
  columns: InboxTable[] = storiesColumns;
  listActions: MobileTableAction<IModeratorStoryBrief>[] = [new MobileTableAction('inbox.table.actions.review')];
  displayedColumns: string[] = this.columns.filter((column) => column.key !== 'empty').map((column: InboxTable) => column.key);
  readonly CHANNEL_CONSTANTS = CHANNEL_CONSTANTS;
  private deleteLastVisitedId: number;
  private processedStoryId: string;

  constructor(
    public ui: UIService,
    public storiesService: StoriesService,
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private inboxFiltersService: InboxFiltersService,
    private modalService: ModalServiceV2,
    private storyDetailsService: StoryDetailsService,
    private toastr: ToastrService,
    private storyService: StoryService,
    private audioService: AudioService,
    private selectionService: SelectionService,
    private filtersService: FiltersService,
  ) {
    super();

    if (this.inboxFiltersService.getCurrentInboxFilterTab() !== INBOX_FILTER_TAB.STORIES) {
      this.inboxFiltersService.setCurrentInboxFilterTab(INBOX_FILTER_TAB.STORIES);
    }
  }
  ngOnInit(): void {
    this.filtersService.filtersChanged$.subscribe(() => {
      this.selectionService.selectedItems$.next([]);
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.ui.mobileView) {
      return;
    }

    const selectionShowBreakpoint = 100;
    this.mobileSelection.nativeElement.style.display = window.scrollY >= selectionShowBreakpoint ? 'flex' : 'none';
  }

  get selectedChannel(): string {
    return this.selectionService.selectedChannel;
  }

  disableChannel(element: IModeratorStoryBrief) {
    if (!this.selectedChannel) {
      return false;
    }

    if (this.selectedChannel === CHANNEL_CONSTANTS.IVRR) {
      return element.channel !== CHANNEL_CONSTANTS.IVRR;
    } else {
      return !TEXT_CHANNELS.includes(element.channel);
    }
  }

  getStoryTypes(types: Array<string>, elipsis?: number): string {
    const translated = (types || []).map((type) => this.translateService.instant(`category.${type}`)).join(', ');
    return elipsis && translated.length > elipsis ? `${translated.substring(0, elipsis - 3)}...` : translated;
  }

  getStatusImage(storyStatus): string {
    if (storyStatus) {
      return `assets/icons/story-status/${storyStatus}.svg`;
    }
  }

  getStoryStatus(status: STORY_STATUS): string {
    return `story.status.${status}`;
  }

  getColumnHeader(column: string): string {
    const translation = this.columns.find((element: InboxTable) => element.key === column)?.label;

    return translation ? this.translateService.instant(translation) : 'Unknown';
  }

  rowClicked(item: IModeratorStoryBrief): void {
    this.storiesService.lastVisitedId$.next(item.id);
    this.storiesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
    const step = 'review';
    this.navigateToStoryDetailsStepper(step, item.channel, item.id);
  }

  onActionClick(callback: MobileTableActionCallback<MobileTableDataRow<IModeratorStoryBrief>>): void {
    if (callback.action === (callback.element.customActions?.[0] || this.listActions[0])) {
      this.storiesService.lastVisitedId$.next(callback.element.id);
      this.storiesService.scrollPos$.next(this.ui.lastScrollTop$.getValue());
      const step = 'review';
      this.navigateToStoryDetailsStepper(step, callback.element.channel, callback.element.id);
    }
  }

  private navigateToStoryDetailsStepper(step: string, channel: CHANNEL_CONSTANTS, storeId: string): void {
    this.router.navigate([MAIN_ROUTES.INBOX, INBOX_ROUTES.STORIES, 'story', channel, storeId, step]).then();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const animationDelay = 1000;
      this.processedStoryId = this.route.snapshot.queryParamMap.get('processedStoryId');
      if (this.storiesService.lastVisitedId$.getValue()) {
        setTimeout(() => {
          window.scrollTo(0, this.storiesService.scrollPos$.getValue());
        });
        setTimeout(() => {
          this.storiesService.deleteElement(this.processedStoryId);
        }, animationDelay);
      } else {
        const activeSort = this.storiesService.activeSort$.getValue();
        if (!!activeSort) {
          this.storiesService.sortChange(activeSort);
        }
      }
      this.deleteLastVisitedId = setTimeout(() => {
        this.storiesService.lastVisitedId$.next(null);
      }, animationDelay) as never;
    }, 0);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.deleteLastVisitedId) {
      clearTimeout(this.deleteLastVisitedId);
    }
  }

  handleRejectClick(event: Event, story: IModeratorStoryBrief): void {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.audioService.stopAudio();
    const modal = this.modalService.open(InboxRejectFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: story.channel,
      languageCode: story.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: story.channel === CHANNEL_CONSTANTS.IVRR,
      multiple: false,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.rejectStory(payload, story.id));
  }

  mobileRowAdditionalClassCondition(element: IModeratorStoryBrief): string {
    return element.isRejected ? 'rejected' : null;
  }

  onCheckboxClicked(event: MouseEvent, element: IModeratorStoryBrief) {
    event.preventDefault();
    event.stopImmediatePropagation();

    if (this.disableChannel(element)) {
      return;
    }
    element.selected = !element.selected;
    this.selectionService.changeSelection(element);
  }

  onSelectAllChanged(selectAll: boolean) {
    const newSelectedItems = this.storiesService.listElements$.getValue();

    if (!selectAll) {
      newSelectedItems.forEach((item) => (item.selected = false));
    } else {
      newSelectedItems.forEach((item) => {
        if (item.isRejected) {
          return;
        }
        const selectByChannel =
          this.selectedChannel ??
          (newSelectedItems[0].channel === CHANNEL_CONSTANTS.IVRR ? newSelectedItems[0].channel : CHANNEL_CONSTANTS.TEXT);

        if (
          (selectByChannel === CHANNEL_CONSTANTS.IVRR && item.channel === selectByChannel) ||
          (selectByChannel === CHANNEL_CONSTANTS.TEXT && TEXT_CHANNELS.includes(item.channel))
        ) {
          item.selected = true;
        }
      });
    }

    this.storiesService.dataSource$.next(new MatTableDataSource(newSelectedItems));
    this.selectionService.selectedItems$.next(newSelectedItems.filter((item) => item.selected));
  }

  onRejectSelectedStories() {
    this.audioService.stopAudio();
    const modal = this.modalService.open(InboxRejectFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: this.selectedChannel,
      languageCode: this.selectionService.firstSelectedItem.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: this.selectedChannel === CHANNEL_CONSTANTS.IVRR,
      multiple: true,
      selectedItems: this.selectionService.selectedItems,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.rejectMultipleStories(payload));
  }

  onAssignSelectedStories() {
    this.audioService.stopAudio();
    const modal = this.modalService.open(AssignModeratorFormComponent, {
      hasAuthor: false,
      type: 'story',
      channel: this.selectedChannel,
      languageCode: this.selectionService.firstSelectedItem.language,
      contactIsNotAccepted: false,
      simpleRejectForVoice: this.selectedChannel === CHANNEL_CONSTANTS.IVRR,
      multiple: true,
      selectedItems: this.selectionService.selectedItems,
    });
    modal.confirm.pipe(take(1), takeUntil(this.destroyed$)).subscribe((payload) => this.assignMultipleStories(payload));
  }

  private rejectStory(payload: IRejectReason, storyId: string): void {
    const handleResponseError = (): void => {
      this.storyDetailsService.backToStoriesListWithoutStory(storyId);
      this.toastr.error(
        this.translateService.instant(`admin.story.toast.rejected.error.title`),
        this.translateService.instant('admin.story.toast.rejected.error.subtitle'),
      );
    };
    this.storyService
      .rejectStoryModerator(storyId, payload)
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(
        (res) => {
          if (res.success) {
            const loadedStories = this.storiesService.listElements$.getValue();
            const foundRejectedStoryIndex = loadedStories.findIndex((story) => story.id === storyId);
            if (foundRejectedStoryIndex >= 0) {
              loadedStories[foundRejectedStoryIndex].isRejected = true;
            }
            this.storiesService.setNewListItems(loadedStories, null, true);
          } else {
            handleResponseError();
          }
        },
        () => {
          handleResponseError();
        },
      );
  }

  private rejectMultipleStories(payload: IRejectReason): void {
    const handleResponseError = (): void => {
      this.toastr.error(
        this.translateService.instant(`admin.story.toast.rejected.error.title`),
        this.translateService.instant('admin.story.toast.rejected.error.subtitle'),
      );
    };
    const selectedItems = this.selectionService.selectedItems$.getValue();
    this.storyService
      .rejectStoriesModerator({
        storiesToReject: selectedItems.map((item) => {
          return {
            reasonIds: payload.reasonIds,
            reasonTexts: payload.reasonTexts,
            rationale: payload.rationale,
            notificationLanguage: item.language,
            storyId: item.id,
          };
        }),
      })
      .subscribe(
        (res) => {
          const loadedStories = this.storiesService.listElements$.getValue();
          res.rejectedStoryIds.forEach((rejectedStoryId) => {
            const foundRejectedStoryIndex = loadedStories.findIndex((story) => story.id === rejectedStoryId);
            if (foundRejectedStoryIndex >= 0) {
              loadedStories[foundRejectedStoryIndex].isRejected = true;
              loadedStories[foundRejectedStoryIndex].selected = false;
            }
          });

          this.storiesService.setNewListItems(loadedStories, null, true);
          this.selectionService.selectedItems$.next([]);
        },
        () => {
          handleResponseError();
        },
      );
  }

  private assignMultipleStories(payload: { assignedItems: string[]; moderatorId: string; moderatorName: string }): void {
    const { assignedItems, moderatorId } = payload;

    this.storyService
      .assignStoryToModerators({
        id: moderatorId,
        storyIds: assignedItems,
      })
      .subscribe({
        next: (response) => this.handleSuccessfulAssignment(response),
        error: () => this.handleAssignmentError(),
      });
  }

  private handleSuccessfulAssignment(response: any): void {
    const { assignedModerator, assignedStoriesIds } = response;
    const isMultipleStories = assignedStoriesIds.length > 1;
    const storyCountLabel = isMultipleStories ? 'Stories' : 'Story';

    const translationParams = {
      nickname: assignedModerator.nickname,
      storyCount: storyCountLabel,
    };

    const successTitle = this.translateService.instant('admin.story.toast.assignedToModerator.success.title', translationParams);
    const successSubtitle = this.translateService.instant('admin.story.toast.assignedToModerator.success.subtitle', translationParams);

    this.toastr.success(successSubtitle, successTitle);

    const updatedStories = this.updateAssignedStories(assignedStoriesIds, assignedModerator.nickname);
    this.storiesService.setNewListItems(updatedStories, null, true);
    this.selectionService.selectedItems$.next([]);
  }

  private handleAssignmentError(): void {
    this.toastr.error(
      this.translateService.instant(`admin.story.toast.assignedToModerator.error.title`),
      this.translateService.instant(`admin.story.toast.assignedToModerator.error.subtitle`),
    );
  }

  private updateAssignedStories(assignedStoryIds: string[], moderatorName: string): any[] {
    const loadedStories = this.storiesService.listElements$.getValue();

    assignedStoryIds.forEach((storyId) => {
      const storyIndex = loadedStories.findIndex((story) => story.id === storyId);

      if (storyIndex >= 0) {
        Object.assign(loadedStories[storyIndex], {
          moderatorName,
          selected: false,
        });
      }
    });

    return loadedStories;
  }
}
