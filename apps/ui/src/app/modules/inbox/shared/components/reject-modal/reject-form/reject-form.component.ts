import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { IModeratorStoryBrief } from '@app/core/services/api/model/response/get-stories-moderator.model';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { MetaDataService } from '@core/services/api/meta-data/meta-data.service';
import { CHANNEL_CONSTANTS } from '@core/services/api/model/channel.enum';
import { IRejectReason } from '@core/services/api/model/request/reject-reason.model';
import { IBaseEntityD, IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';
import { TranslateService } from '@ngx-translate/core';
import { SkeletonLine } from '@shared/components/skeleton-loader/line-type.type';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-inbox-reject-form',
  templateUrl: './reject-form.component.html',
  styleUrls: ['./reject-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxRejectFormComponent extends ModalBase implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  rejectForm: UntypedFormGroup;
  rejectionReasons$ = new BehaviorSubject<IBaseEntityDN[]>(null);
  allRejectionReasons: IBaseEntityDN[] = [];
  otherReasonId: string;
  readonly skeletonLines: SkeletonLine[] = new Array(5).fill('medium');
  @Output() confirm = new Subject<IRejectReason>();
  showDropDown = false;
  openDropdowns: { [key: string]: boolean } = {};
  selectedOptions: number[] = [];

  get isOtherSelected(): boolean {
    const value = this.rejectForm.get('reasons').value;

    if (Array.isArray(value)) {
      if (value.indexOf(Number(this.otherReasonId)) >= 0) {
        this.setOtherReasonRequired();
        return true;
      } else {
        this.disableOtherReason();
        return false;
      }
    } else {
      if (value === Number(this.otherReasonId)) {
        this.setOtherReasonRequired();
        return true;
      } else {
        this.disableOtherReason();
        return false;
      }
    }
  }

  get showFeedbackForm(): boolean {
    return this.rejectForm.get('sendFeedback').value === true;
  }

  get expectedReasons(): Observable<IBaseEntityDN[]> {
    return this.rejectionReasons$.pipe(
      map((items) => items.filter((item) =>
        !item.children.length &&
        item.isTopLevel &&
        (this.channel === CHANNEL_CONSTANTS.IVRR ? item.code !== 'other' : item.code !== 'poorAudioQuality')
      )),
    );
  }

  get expectedReasonsWithChildren(): Observable<IBaseEntityDN[]> {
    return this.rejectionReasons$.pipe(
      map((items) => items.filter((item) => item.children.length)),
    );
  }

  toggleDropdown(code: string, leave = false): void {
    if (leave) this.openDropdowns[code] = false;
    else this.openDropdowns[code] = !this.openDropdowns[code];
    this.cd.markForCheck();
  }

  isDropdownOpen(code: string): boolean {
    return this.openDropdowns[code] || false;
  }

  getSelectedCount(parentCode: string): number {
    const parent = this.rejectionReasons$.getValue()?.find(item => item.code === parentCode);
    if (!parent || !parent.children) {
      return 0;
    }
    const childIds = parent.children.map(child => Number(child.id));
    const formValue = this.rejectForm.get('childrenReasons').value || [];
    return formValue.filter(id => childIds.includes(Number(id))).length;
  }

  isChildSelected(childId: string): boolean {
    const formValue = this.rejectForm.get('childrenReasons').value || [];
    return formValue.includes(Number(childId));
  }

  onChildOptionChange(event: Event, childId: string): void {
    const checkbox = event.target as HTMLInputElement;
    const currentValue = this.rejectForm.get('childrenReasons').value || [];
    if (checkbox.checked) {
      currentValue.push(Number(childId));
      this.rejectForm.get('childrenReasons').setValue(currentValue);
    } else {
      this.rejectForm.get('childrenReasons').setValue(
        currentValue.filter((id) => id !== Number(childId)),
      );
    }



  }

  constructor(
    @Inject('close$') close$: Subject<any>,
    @Inject('type') public type,
    @Inject('hasAuthor') public hasAuthor: boolean,
    @Inject('languageCode') public languageCode: string,
    @Inject('channel') public channel: CHANNEL_CONSTANTS,
    @Inject('contactIsNotAccepted') public contactIsNotAccepted?: boolean,
    @Inject('multiple') public multiple?: boolean,
    @Optional() @Inject('simpleRejectForVoice') public simpleRejectForVoice?: boolean,
    @Optional() @Inject('selectedItems') public selectedItems?: IModeratorStoryBrief[],
    private cd?: ChangeDetectorRef,
    private metaDataService?: MetaDataService,
    private toastr?: ToastrService,
    private translateService?: TranslateService,
  ) {
    super(close$);
    this.rejectForm = new UntypedFormGroup({
      reasons: new UntypedFormControl([]),
      childrenReasons: new UntypedFormControl([]),
      reasonText: new UntypedFormControl(''),
      sendFeedback: new UntypedFormControl(false, [Validators.required]),
      rationale: new UntypedFormControl(''),
    });

    this.metaDataService
      .getReasons()
      .pipe(
        take(1),
        map((response) =>
          response.map((item: any) => ({
            ...item,
            content: this.translateService.instant(
              `admin.${this.type}.rejectReasons.${item.code.split('/').join('_')}`,
            ),
            children: item.children
              ? item.children.map((child) => ({
                ...child,
                content: this.translateService.instant(
                  `admin.${this.type}.rejectReasons.${child.code.split('/').join('_')}`,
                ),
              }))
              : [],
          })),
        ),
        catchError((error) => {
          this.toastr.error(
            this.translateService.instant('error.generic.title'),
            this.translateService.instant('error.generic.subtitle'),
          );
          this.onModalClose();
          throw error;
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe((res) => {
        this.rejectionReasons$.next(res);
        this.allRejectionReasons = this.getAllReasons();
        const otherReason = this.allRejectionReasons.find((reason) => reason.code === 'other');
        if (otherReason) this.otherReasonId = otherReason.id;
      });
  }

  rejectClick(): void {
    const formValues = this.rejectForm.value;
    const hasSelectedReasons = formValues.reasons?.length > 0 || formValues.childrenReasons?.length > 0;

    if (!hasSelectedReasons || (this.isOtherSelected && !formValues.reasonText)) {
      this.rejectForm.markAllAsTouched();
      return;
    }

    const reasons: string[] = [];
    const allReasons = this.allRejectionReasons;
    (formValues.reasons || []).forEach((reasonId: number) => {
      const foundItem = allReasons.find((item) => Number(item.id) === Number(reasonId));
      if (foundItem && foundItem.code !== 'other') {
        reasons.push(foundItem.content);
      }
    });
    (formValues.childrenReasons || []).forEach((reasonId: number) => {
      const foundItem = this.findChildReason(reasonId);
      if (foundItem) {
        reasons.push(foundItem.content);
      }
    });

    if (this.isOtherSelected) {
      reasons.push(formValues.reasonText);
    }

    const payload: IRejectReason = {
      reasonIds: [...(formValues.reasons || []), ...(formValues.childrenReasons || [])],
      rationale: formValues.rationale,
      reasonTexts: reasons,
      notificationLanguage: this.languageCode,
    };

    this.confirm.next(payload);
    this.onModalClose();
  }

  ngOnInit(): void {
    this.watchSendFeedbackControlChange();
    setTimeout(() => {
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  onChangeToDefaultMode(event: Event): void {
    event.stopImmediatePropagation();
    this.rejectForm.get('reasons').reset();
    this.simpleRejectForVoice = false;
    this.cd.markForCheck();
  }

  trackById(_, item: IBaseEntityD): any {
    return item.id;
  }

  private watchSendFeedbackControlChange(): void {
    this.rejectForm
      .get('sendFeedback')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        if (value) {
          this.rejectForm.get('rationale').enable();
          this.rejectForm
            .get('rationale')
            .setValidators([Validators.required, Validators.minLength(5)]);
        } else {
          this.rejectForm.get('rationale').reset();
          this.rejectForm.get('rationale').disable();
        }
        this.rejectForm.get('rationale').updateValueAndValidity();
        this.cd.markForCheck();
      });
  }

  private setOtherReasonRequired(): void {
    this.rejectForm.get('reasonText').enable();
    this.rejectForm
      .get('reasonText')
      .setValidators([Validators.required, Validators.minLength(5)]);
    this.rejectForm.get('reasonText').updateValueAndValidity();
    this.cd.markForCheck();
  }

  private disableOtherReason(): void {
    this.rejectForm.get('reasonText').reset();
    this.rejectForm.get('reasonText').disable();
    this.rejectForm.get('reasonText').clearValidators();
    this.rejectForm.get('reasonText').updateValueAndValidity();
    this.cd.markForCheck();
  }

  private getAllReasons(): IBaseEntityDN[] {
    const reasons = this.rejectionReasons$.getValue() || [];
    const allReasons: IBaseEntityDN[] = [];
    const selectedChildReasons: number[] = [];

    const flattenReasons = (items: IBaseEntityDN[]) => {
      items.forEach((item) => {
        allReasons.push(item);
        if (item.children && item.children.length > 0) {
          // Get selected children for this parent
          const childrenSelected = item.children
            .filter(child => this.isChildSelected(child.id))
            .map(child => Number(child.id));

          selectedChildReasons.push(...childrenSelected);
          flattenReasons(item.children);
        }
      });
    };

    flattenReasons(reasons);

    // // Update the form with flattened selected children
    // const currentReasons = this.rejectForm.get('reasons').value || [];
    // const uniqueReasons = Array.from(new Set([...currentReasons, ...selectedChildReasons]));
    // this.rejectForm.get('reasons').setValue(uniqueReasons);

    return allReasons;
  }

  private findChildReason(childId: number): IBaseEntityDN | null {
    const reasons = this.rejectionReasons$.getValue() || [];
    for (const parent of reasons) {
      if (parent.children) {
        const child = parent.children.find(c => Number(c.id) === Number(childId));
        if (child) return child;
      }
    }
    return null;
  }

  isFormValid(): boolean {
    if (!this.rejectionReasons$.getValue()?.length) {
      return false;
    }

    const formValues = this.rejectForm.value;
    const hasSelectedReasons = formValues.reasons?.length > 0 || formValues.childrenReasons?.length > 0;

    // Check if other reason is selected and has text
    if (this.isOtherSelected && !formValues.reasonText) {
      return false;
    }

    // Check feedback form if it's shown and required
    if (this.showFeedbackForm && !formValues.rationale) {
      return false;
    }

    return hasSelectedReasons;
  }
}
