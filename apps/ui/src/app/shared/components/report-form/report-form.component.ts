import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { ReportService } from '@app/core/services/api/report/report.service';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFormComponent extends ModalBase implements OnDestroy {
  destroyed$ = new Subject();
  reportForm: UntypedFormGroup;
  submitting = false;
  communityGuidelinesUrl = `/${MAIN_ROUTES.COMMUNITY_GUIDELINES}`;

  guidelineOptions = [
    { value: 'Offensive or discriminatory language', labelKey: 'report.offensiveLanguage' },
    { value: 'Does not follow community standards designed to ensure a safe space', labelKey: 'report.communityStandards' },
    { value: 'Concern about the authenticity of the feedback or reply', labelKey: 'report.authenticityConcern' },
    { value: 'Causes harm to others', labelKey: 'report.causesHarm' },
    { value: 'Does not respect the privacy of others', labelKey: 'report.privacyViolation' },
  ];

  constructor(
    @Inject('close$') close$: Subject<any>,
    @Inject('postId') public postId: string,
    @Inject('postType') public postType: 'story' | 'reply',
    private cd: ChangeDetectorRef,
    private reportService: ReportService,
    private toastr: ToastrService,
    private translateService: TranslateService,
  ) {
    super(close$);
    this.reportForm = new UntypedFormGroup({
      reportAbout: new UntypedFormControl(this.postType === 'reply' ? 'reply' : 'feedback'),
      replySpecification: new UntypedFormControl(''),
      guidelineBreaches: new UntypedFormControl([], [Validators.required]),
      additionalInfo: new UntypedFormControl(''),
      contactEmail: new UntypedFormControl(''),
    });
  }

  get isReplySelected(): boolean {
    return this.reportForm.get('reportAbout').value === 'reply';
  }

  get isFormValid(): boolean {
    const breaches = this.reportForm.get('guidelineBreaches').value;
    return breaches && breaches.length > 0;
  }

  onGuidelineChange(event: Event, value: string): void {
    const checkbox = event.target as HTMLInputElement;
    const currentValue: string[] = this.reportForm.get('guidelineBreaches').value || [];
    if (checkbox.checked) {
      this.reportForm.get('guidelineBreaches').setValue([...currentValue, value]);
    } else {
      this.reportForm.get('guidelineBreaches').setValue(
        currentValue.filter((v) => v !== value),
      );
    }
  }

  isGuidelineSelected(value: string): boolean {
    const currentValue: string[] = this.reportForm.get('guidelineBreaches').value || [];
    return currentValue.includes(value);
  }

  submitReport(): void {
    if (!this.isFormValid || this.submitting) {
      return;
    }

    this.submitting = true;
    const formValues = this.reportForm.value;

    this.reportService
      .submitReport({
        reportType: formValues.reportAbout,
        postId: this.postId,
        guidelineBreaches: formValues.guidelineBreaches,
        replySpecification: formValues.reportAbout === 'reply' ? formValues.replySpecification : undefined,
        additionalInfo: formValues.additionalInfo || undefined,
        contactEmail: formValues.contactEmail || undefined,
      })
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          this.toastr.success(this.translateService.instant('report.successMessage'));
          this.onModalClose();
        },
        error: () => {
          this.toastr.error(
            this.translateService.instant('error.generic.title'),
            this.translateService.instant('error.generic.subtitle'),
          );
          this.submitting = false;
          this.cd.markForCheck();
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
