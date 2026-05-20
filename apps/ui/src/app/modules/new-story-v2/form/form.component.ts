import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAIN_ROUTES } from '@app/app-routing.props';
import { ShareContentComponent } from '@app/modules/new-story-v2/components/share-content/share-content.component';
import { AdvancedEmailValidator } from '@app/shared/custom-validators/advanced-email.directive';
import { IAddStoryDTO } from '@core/services/api/model/request/add-story.model';
import { IBaseApiResponse } from '@core/services/api/model/response/base-response.model';
import { IUserProfileAPI } from '@core/services/api/model/response/user-profile.model';
import { StoryService } from '@core/services/api/story/story.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@shared/components/base.component';
import { FocusInvalidService } from '@shared/directives/invalid-focusable/focus-invalid.service';
import { FormHelperService } from '@shared/services/form-helper.service';
import { identity, pickBy } from 'lodash';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ToastrService } from 'ngx-toastr';
import { catchError, distinctUntilChanged, finalize, startWith, take, takeUntil, tap } from 'rxjs/operators';
import { AGE_VALUE_EXTENDED } from "@shared/types/age.type";
import { PosthogService } from '@app/shared/services/posthog.service';
import { POSTHOG_EVENTS } from '@app/shared/enums/posthog-event.enum';

@Component({
  selector: 'app-form-newstory2',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseComponent implements OnInit {
  @ViewChild(ShareContentComponent) contentComponent: ShareContentComponent;
  @Input() userProfile: IUserProfileAPI = null;
  @Output() safeModeChanged = new EventEmitter<boolean>();
  storyForm: UntypedFormGroup;
  activeStepperStep = 0;
  submitting = false;
  countryCode: string;

  get step1Form(): UntypedFormGroup {
    return this.storyForm.get('step1') as UntypedFormGroup;
  }

  get step2Form(): UntypedFormGroup {
    return this.storyForm.get('step2') as UntypedFormGroup;
  }

  get step3Form(): UntypedFormGroup {
    return this.storyForm.get('step3') as UntypedFormGroup;
  }

  get isSensitive(): boolean {
    return this.storyForm.get('step1.isSensitive')?.value;
  }

  constructor(
    private cd: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private focusInvalid: FocusInvalidService,
    private formHelperService: FormHelperService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private router: Router,
    private storyService: StoryService,
    private toastr: ToastrService,
    private posthogService: PosthogService,
    private translateService: TranslateService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.setupSensitiveModeListener();
    this.setupAgeListener();  
    // this.setupContactInfoListener();
  }

  onCountryCodeChange(countryCode: string) {
    this.countryCode = countryCode;
  }

  initForm(): void {
    this.storyForm = this.fb.group({
      step1: this.fb.group({
        content: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30000),
            Validators.pattern(/^(\p{L}|\p{N}|\p{P}|\p{S}|\p{Z}|\p{M})+$/mu),
          ],
        ],
        categories: [null],
        isSensitive: [false],
      }),
      step2: this.fb.group({
        countryId: [null, [Validators.required]],
        regionId: [null],
        organisations: [null],
      }),
      step3: this.fb.group({
        authorNickname: [this.userProfile?.nickname || null, [Validators.maxLength(100)]],
        phone: [null],
        email: [this.userProfile?.email, [Validators.email, Validators.maxLength(100), AdvancedEmailValidator.validateEmail]],
        gender: [0],
        age: [0],
        difficulties: [null],
        difficulty: [0],
        disabilitiesOtherExplanation: [
          '',
          [
            Validators.maxLength(500),
            Validators.pattern(/^(\p{L}|\p{N}|\p{P}|\p{S}|\p{Z}|\p{M})+$/mu),
          ],
        ],
        additionalContactDetails: [
          '',
          [
            Validators.maxLength(30000),
            Validators.pattern(/^(\p{L}|\p{N}|\p{P}|\p{S}|\p{Z}|\p{M})+$/mu),
          ],
        ],
        sensitiveStoryContactConsent: [false]
      }),
    });
  }

  private setupSensitiveModeListener(): void {
    this.storyForm
      .get('step1.isSensitive')
      .valueChanges.pipe(takeUntil(this.destroyed$), startWith(false))
      .subscribe((isSensitive) => {
        this.safeModeChanged.emit(!!isSensitive);
      });
  }

  private setupAgeListener(): void {
    const ageControl = this.storyForm.get('step3.age');
    const sensitiveControl = this.storyForm.get('step1.isSensitive');

    ageControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        startWith(ageControl.value),
        distinctUntilChanged()
      )
      .subscribe((age) => {
        if (sensitiveControl.value) {
          return;
        }
        else if (age === AGE_VALUE_EXTENDED.BETWEEN_0_AND_13 && !sensitiveControl.value) {
          sensitiveControl.setValue(true);
          this.safeModeChanged.emit(true);
        }
      });
  }

  submitForm(): void {
    if (this.storyForm.invalid) {
      return;
    }

    const formValue = this.getMappedFormValues();
    console.log("formValue", formValue)
    this.submitting = true;
    this.storyService
      .addStory(formValue)
      .pipe(
        take(1),
        tap((res: IBaseApiResponse) => {
          if (res.success) {
            this.posthogService.trackEvent(POSTHOG_EVENTS.SUBMIT_FEEDBACK, { feedback: formValue })
            this.showSuccessMessage();
          } else {
            this.showGenericErrorMessage();
          }
        }),
        catchError((error) => {
          this.showErrorMessage(error);
          throw error;
        }),
        finalize(() => {
          this.submitting = false;
          this.cd.detectChanges();
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        this.googleAnalyticsService.event('newStoryCreation', 'submit', this.userProfile?.email || 'anonymous');
        this.router.navigate(['/', MAIN_ROUTES.STORIES]);
      });
  }

  private showSuccessMessage(): void {
    // If story is sensitive
    if (!!this.storyForm.get('step1').get('isSensitive').value) {
      const step3Control = this.storyForm.get('step3');
      // If user entered email and phone (WEB) and we can contact him
      if (step3Control.get('email').value || step3Control.get('phone').value) {
        this.toastr.success(
          this.translateService.instant('newStory.form.toast.success.sensitive.withContact.subtitle'),
          this.translateService.instant(`newStory.form.toast.success.sensitive.title`),
        );
        // If user didn't enter email and phone (WEB) and we can't contact him
      } else {
        this.toastr.success(
          this.translateService.instant('newStory.form.toast.success.sensitive.withoutContact.subtitle'),
          this.translateService.instant(`newStory.form.toast.success.sensitive.title`),
        );
      }
    } else {
      this.toastr.success(
        this.translateService.instant('newStory.form.toast.success.subtitle'),
        this.translateService.instant(`newStory.form.toast.success.title`),
      );
    }
  }

  private showGenericErrorMessage(): void {
    this.toastr.error(
      this.translateService.instant(`newStory.form.toast.error.title`),
      this.translateService.instant('newStory.form.toast.error.subtitle'),
    );
  }

  private showErrorMessage(error: ErrorEvent): void {
    this.toastr.error(
      this.translateService.instant(`newStory.form.toast.error.title`),
      this.translateService.instant(error?.error?.message?.details[0]?.message || 'global.errorMessage'),
    );
  }

  private getMappedFormValues(): Partial<IAddStoryDTO> {
    const formValue = this.storyForm.value;
    const values = { ...formValue.step1, ...formValue.step2, ...formValue.step3 };
    values.organisations = values.organisations ? values.organisations : undefined;
    // TODO check 'channel' with backend 'channel: CHANNEL_CONSTANTS.WEB'
    // filter out only prefix selected
    values.phone = values.phone?.length > 3 ? values.phone : null;

    // Store original email value (including empty string) before pickBy removes it
    const hasEmail = 'email' in values;
    const emailValue = values.email;

    console.log("Form Values", values)
    const result = pickBy<IAddStoryDTO>(values, identity);

    // If email field existed but was empty, explicitly set to null to indicate anonymous
    if (hasEmail && !emailValue) {
      result.email = null;
    }

    return result;
  }

  handleStepChange(step: number): void {
    this.activeStepperStep = step;
  }

  nextStep(): void {
    if (this.activeStepperStep == 2 && this.isSensitive && this.step3Form.get('sensitiveStoryContactConsent').value && (!this.step3Form.value.phone && !this.step3Form.value.email)) {
      this.toastr.error(
        this.translateService.instant(`newStory.form.toast.consent.title`),
        this.translateService.instant('newStory.form.toast.consent.subtitle'),
      );
      return;
    }
    if (!this.isCurrentStepValid()) {
      this.highlightFormGroupErrors();
      this.focusInvalid.focusFirstInvalidFocusableElement();
      this.cd.detectChanges();
      return;
    }

    this.activeStepperStep++;
    this.unfocusNavigationButton(false);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 1);
  }

  prevStep(): void {
    this.activeStepperStep--;
    this.unfocusNavigationButton(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 1);
  }

  private unfocusNavigationButton(prevClicked: boolean): void {
    const element: HTMLElement = document.getElementsByClassName(prevClicked ? 'stepper-navigation' : 'new-story__form')[0] as HTMLElement;
    element?.focus();
  }

  private getCurrentStepForm(): UntypedFormGroup | null {
    return this.storyForm.get(`step${this.activeStepperStep + 1}`) as UntypedFormGroup;
  }

  private isCurrentStepValid(): boolean {
    // in case if the step is nullish we negate undefined making it true. Because step without form is always valid
    return !this.getCurrentStepForm()?.invalid;
  }

  private highlightFormGroupErrors(): void {
    const currentStepForm = this.getCurrentStepForm();
    if (!currentStepForm) {
      return;
    }
    console.log("Current Step Form", currentStepForm)
    currentStepForm.markAllAsTouched();

    this.formHelperService.markAllAsDirty(currentStepForm);
    currentStepForm.updateValueAndValidity();
    console.log("Current Step Form", currentStepForm)
  }

  // private setupContactInfoListener(): void {
  //   if (this.isSensitive) {
  //     this.storyForm.get('step3.sensitiveStoryContactConsent').valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
  //       console.log(value)
  //       if (value) {
  //         this.storyForm.get('step3.phone').addValidators(Validators.required)
  //         this.storyForm.get('step3.email').addValidators(Validators.required)
  //       } else {
  //         this.storyForm.get('step3.phone').removeValidators(Validators.required)
  //         this.storyForm.get('step3.email').removeValidators(Validators.required)
  //       }
  //       this.storyForm.get('step3.phone').updateValueAndValidity();
  //       this.storyForm.get('step3.email').updateValueAndValidity();
  //     })
  //   }
  // }
}
