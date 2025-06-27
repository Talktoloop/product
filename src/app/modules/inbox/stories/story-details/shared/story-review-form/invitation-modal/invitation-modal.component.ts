import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { IUserOrganisation } from '@app/core/services/api/model/story.model';
import { OrganisationService } from '@app/core/services/api/organisation/organisation.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { AdvancedEmailValidator } from '@app/shared/custom-validators/advanced-email.directive';
import LoopIcon from '@app/shared/loop-design-system/components/loop-icon';
import { debounceTime, Subject, take, takeUntil } from 'rxjs';
import { StoryDetailsService } from '../../../story-details.service';

@Component({
  selector: 'app-invitation-modal',
  templateUrl: './invitation-modal.component.html',
  styleUrls: ['./invitation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitationModalComponent extends ModalBase implements OnInit, OnDestroy {
  inviteForm: UntypedFormGroup;
  languages: ISupportedLanguage[] = [];
  dropdownOpen = false;
  searchOrganisation = new FormControl();
  inputId = crypto.randomUUID();
  organizations: Array<IBaseEntityN> = [];
  fullOrganizations: Array<IBaseEntityN> = [];
  checked = false;
  selectedId: number | null = null;
  LoopIcon = LoopIcon;
  userOrganization: IUserOrganisation;
  userHaveOrganisation: boolean;
  selectLanguages: any[];
  submittingError = false;
  submitted = false;
  emailInvited: boolean;
  private destroyed$ = new Subject<void>();

  constructor(
    @Inject('close$') close$: Subject<any>,
    public storyDetailsService: StoryDetailsService,
    private languageService: SupportedLanguagesService,
    private metadataService: MetaDataService,
    private cdr: ChangeDetectorRef,
    private organisationService: OrganisationService,
  ) {
    super(close$);

    this.inviteForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(128),
        AdvancedEmailValidator.validateEmail,
      ]),
      organisationId: new UntypedFormControl(null, Validators.required),
      languageCode: new UntypedFormControl('en', Validators.required),
    });
  }

  ngOnInit(): void {
    this.fetchLanguageDirectory();
    this.getOrganisations();
    this.inviteForm.get('languageCode').setValue('en');
    this.searchOrganisation.valueChanges.pipe(debounceTime(350)).subscribe((value) => {
      if (!value) {
        this.getOrganisations();
      }
      if (value) {
        this.findOrganisation(value);
      }
      this.cdr.detectChanges();
    });
    this.onEmailChange();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  onEmailChange(): void {
    this.inviteForm
      .get('email')
      .valueChanges.pipe(debounceTime(350), takeUntil(this.destroyed$))
      .subscribe((value) => {
        if (value) {
          this.organisationService.getUserOrganisation(value).subscribe((item) => {
            if (item.organisationId !== null) {
              this.userHaveOrganisation = true;
              this.userOrganization = item;
            } else {
              this.userHaveOrganisation = false;
            }
          });

          const isEmailAlreadyInvited = this.organisationService.invites.find((invite) => invite.email === value);
          if (isEmailAlreadyInvited) {
            this.emailInvited = true;
          } else {
            this.emailInvited = false;
          }
        }
      });
  }

  clearSearch($event: MouseEvent): void {
    $event.stopImmediatePropagation();
    this.searchOrganisation.reset();
    this.getOrganisations();
  }

  handleClick(event: Event): void {
    event.preventDefault();
  }

  invite(event?: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.submitted = true;
    if (this.inviteForm.valid) {
      const inviteData = {
        email: this.inviteForm.get('email')?.value,
        organisationId: this.inviteForm.get('organisationId')?.value,
        languageCode: this.inviteForm.get('languageCode')?.value,
      };
      this.organisationService.addInvite(inviteData);
      this.inviteForm.reset();
      this.onModalClose();
    } else {
      this.checkAndMarkValidationErrors();
    }
  }

  checkAndMarkValidationErrors(): string {
    const email = this.inviteForm.controls.email.value;

    if (this.inviteForm.invalid) {
      this.inviteForm.controls.email.markAsDirty();
      this.inviteForm.controls.email.markAsTouched();
      this.inviteForm.patchValue({ email });
      return;
    }
  }

  findOrganisation(value: string): void {
    this.organizations = this.fullOrganizations.filter((organisation) => {
      return organisation.name.toLowerCase().includes(value.toLowerCase());
    });
    this.cdr.detectChanges();
  }

  handleOptionSelect(languageCode: string): void {
    this.inviteForm.get('languageCode').setValue(languageCode);
    this.dropdownOpen = false;
    this.cdr.detectChanges();
  }

  handleSelectorOpenClick(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleRadioClick(value: number): void {
    this.selectedId = value;
    this.checked = true;
  }

  private fetchLanguageDirectory(): void {
    this.languageService
      .getSupportedLanguages()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ISupportedLanguage[]) => {
        this.languages = data;
        this.selectLanguages = this.languages.map((language) => {
          return {
            id: language.language,
            content: `languages.${language.language}`,
          };
        });
      });
  }

  private getOrganisations(): void {
    this.metadataService.organisations$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((organizations) => {
      this.organizations = organizations;
      this.fullOrganizations = [...organizations];
    });
  }
}
