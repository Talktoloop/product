import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MetaDataService } from '@app/core/services/api/meta-data/meta-data.service';
import { ISupportedLanguage } from '@app/core/services/api/meta-data/model/supported-language.model';
import { IBaseEntityCheckNested, IBaseEntityD, IBaseEntityN } from '@app/core/services/api/model/response/base-entity.model';
import { ICategory } from '@app/core/services/api/model/response/get-categories.model';
import { IGetThematicAPIExtended } from '@app/core/services/api/model/response/get-thematic.model';
import { IOrganisation, LinkUserToOrganisation } from '@app/core/services/api/model/story.model';
import { OrganisationService } from '@app/core/services/api/organisation/organisation.service';
import { SupportedLanguagesService } from '@app/core/services/locales/supported-languages.service';
import { ModalServiceV2 } from '@app/core/services/modal/modal-v2.service';
import { UIService } from '@app/core/services/ui/ui.service';
import { AutocompleteOption } from '@app/shared/components/autocomplete/autocomplete-option.model';
import { BaseComponent } from '@app/shared/components/base.component';
import { CheckboxListFilterData } from '@app/shared/components/filters-section-v2/filters-controls-data.model';
import { OrganisationComponent } from '@app/shared/components/organisation/organisation.component';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { CountryPipe } from '@app/shared/pipes/country.pipe';
import { CountriesService } from '@app/shared/services/countries.service';
import { GENDER_MAPPING } from '@app/shared/types';
import { AGE_MAPPING_EXTENDED, AGE_VALUE_EXTENDED } from '@app/shared/types/age.type';
import { GENDER_VALUE } from '@app/shared/types/gender.type';
import { IBaseEntityCheck } from '@app/core/services/api/model/response/base-entity.model';
import { TranslateService } from '@ngx-translate/core';
import { RegionData } from '@shared/components/location/location.component';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';
import { Option } from '@shared/model/option.model';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { StoryDetailsService } from '../../story-details.service';
import { InvitationModalComponent } from './invitation-modal/invitation-modal.component';
import { URGENT_MAPPING, URGENT_VALUE } from "@shared/types/isurgent-type";
import {
  MINORITY_TRANSLATE_MAPPING,
  MINORITY_TRANSLATE_VALUE,
} from "@shared/types/minority.type";
import { StoryCategory } from "@shared/types/story-category.type";

@Component({
  selector: 'app-story-review-form',
  templateUrl: './story-review-form.component.html',
  styleUrls: ['./story-review-form.component.scss'],
})
export class StoryReviewFormComponent extends BaseComponent implements OnInit {
  @ViewChild(OrganisationComponent) organisationComp: OrganisationComponent;
  ageOptions: Option[];
  categories: ICategory[];
  categoriesError = null;
  difficulties: IBaseEntityD[];
  genderOptions: Option[];
  urgentOptions: Option[];
  minorityOptions: Option[];
  vulnerabilityFactors: IBaseEntityCheck[];
  hasDisabilities: boolean | null = null;
  LoopIcon = LoopIcon;
  organisation: string;
  SimpleTagTheme = SimpleTagTheme;
  TagSize = TagSize;
  thematicAreaData: CheckboxListFilterData;
  thematicOptions: Option[];
  submittingError = false;
  disabilityOptions: Option[] = [
    { value: true, content: 'Yes' },
    { value: false, content: 'No' },
  ];
  resetThematics$ = new BehaviorSubject<boolean>(true);
  languageOptions: AutocompleteOption[] = [];
  matchingLanguages = this.languageOptions;
  organisationsOptions: Option[];
  invites: Array<LinkUserToOrganisation> = [];
  storyForm = new UntypedFormGroup({
    languageControl: new UntypedFormControl(),
    locationControl: new UntypedFormControl(),
    organisationControl: new UntypedFormControl(),
    thematics: new UntypedFormControl(),
    vulnerabilityFactors: new UntypedFormControl(),
    isUrgent: new UntypedFormControl(),
    isMinority: new UntypedFormControl(),
  });

  protected allLanguages: ISupportedLanguage[];
  protected readonly StoryCategory = StoryCategory;
  protected readonly AGE_VALUE_EXTENDED = AGE_VALUE_EXTENDED;
  readonly OTHER_DISABILITY_ID = 7;

  get isOtherDifficultySelected(): boolean {
    return this.storyDetailsService.story?.difficulties?.some((d) => Number(d.id) === this.OTHER_DISABILITY_ID);
  }

  constructor(
    public ui: UIService,
    public storyDetailsService: StoryDetailsService,
    private countriesService: CountriesService,
    private languageService: SupportedLanguagesService,
    private metaDataService: MetaDataService,
    private translateService: TranslateService,
    private modalService: ModalServiceV2,
    private organisationService: OrganisationService,
    private countryPipe: CountryPipe,
  ) {
    super();
    this.getMetadata();
    this.initLanguages();
  }

  get selectedOrganisations(): { country: string; acronym: string; usersCount: number; id: string; content: string }[] {
    return (this.storyDetailsService.story.organisations || []).map((org) => ({
      id: org.id,
      content: org.name,
      usersCount: org.usersCount,
      acronym: org.acronym,
      country: org.countryCode,
      name: org.name,
    }));
  }

  get selectedThematics(): { id: string; content: string }[] {
    const ids = this.storyDetailsService.story.thematics || [];
    const children = this.thematicOptions.reduce((acc, area) => [...acc, ...area.children], []);
    return ids
      .map((id: number) => children.find((option) => option.value === id))
      .filter((option) => !!option)
      .map((option) => ({
        id: option.value,
        content: option.content,
      }));
  }

  get selectedVulnerabilityFactors(): { id: string; content: string }[] {
    const codes = this.storyDetailsService.story.vulnerabilityFactors || [];
    return codes
      .map((code: string) => this.vulnerabilityFactors.find((factor) => factor.id === code))
      .filter((factor) => !!factor)
      .map((factor) => ({
        id: factor.id,
        content: factor.code,
      }));
  }

  get selectedPlace(): { id: string; content: string }[] {
    return this.storyDetailsService.story.place
      ? [{ id: this.storyDetailsService.story.place, content: this.storyDetailsService.story.place }]
      : [];
  }

  get originalStoryLanguage(): { id: string; content: string }[] {
    return this.storyDetailsService.story.language
      ? [
        {
          id: this.storyDetailsService.story.language,
          content: `languages.${this.storyDetailsService.story.language}`,
        },
      ]
      : [];
  }

  ngOnInit(): void {
    this.setData();
    this.setOrganisations();
    this.setThematics();
    this.invites = this.organisationService.getInvites(this.storyDetailsService.story.id);
    console.log('[StoryReviewFormComponent] init', { storyId: this.storyDetailsService.story.id, channel: this.storyDetailsService.story.channel });

    this.storyForm.get('languageControl').setValue(this.storyDetailsService.story.language);
    this.storyForm.get('locationControl').setValue(this.storyDetailsService.story.regionId);
    this.storyForm.get('thematics').setValue(this.storyDetailsService.story.thematics);
    this.storyForm
      .get('isMinority')
      .setValue(
        this.storyDetailsService.story.isMinority === true
          ? 1
          : this.storyDetailsService.story.isMinority === false
            ? 0
            : null
      );
    this.storyForm.get('vulnerabilityFactors').setValue(this.storyDetailsService.story.vulnerabilityFactors || []);

    if (this.storyDetailsService.story.isUrgent === null) {
      this.storyForm.get('isUrgent').setValue(0);
      this.storyDetailsService.story.isUrgent = false;
    } else {
      this.storyForm.get('isUrgent').setValue(this.storyDetailsService.story.isUrgent ? 1 : 0);
    }

    this.watchFormChanges();
    this.watchFormSubmitError();
  }

  getOrganisationProperty(organisationId: string, property: string): string {
    const selectedOrganisation = this.organisationsOptions.find((org) => org.value.id === organisationId);
    if (selectedOrganisation) {
      switch (property) {
        case 'name':
          return selectedOrganisation.value.name;
        case 'country':
          return selectedOrganisation.value.countryCode;
        default:
          return '';
      }
    } else {
      return '';
    }
  }

  removeSelectedInvitation(index: number): void {
    this.invites.splice(index, 1);
  }

  onRegionDataChange(regionData: RegionData) {
    const { regionId, country, countryId } = regionData;
    this.storyForm.get('locationControl')?.setValue(regionId);
    this.storyDetailsService.story.regionId = regionId;
    this.storyDetailsService.story.countryId = countryId;
    this.storyDetailsService.story.country = country;
  }

  isAnyCategorySelected(): boolean {
    if (this.storyDetailsService.story?.categories?.length) {
      const results = this.storyDetailsService.story?.categories?.filter((o1) => this.categories?.some((o2) => o1.id === o2.id));

      return !!results.length;
    } else return this.storyDetailsService.story.isSensitive;
  }

  isSelectedCategory(id: string): boolean {
    return this.storyDetailsService.story?.categories?.map((cat) => cat.id).includes(id);
  }

  handleCategoryChange($event, category: ICategory): void {
    const { checked } = $event;
    if (checked) {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        categories: [...this.storyDetailsService.story.categories, category],
      };
    } else {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        categories: this.storyDetailsService.story.categories.filter((cat) => cat.id !== category.id),
      };
    }
    this.validateCategories();
  }

  handleIsSensitiveChange(): void {
    this.storyDetailsService.story = { ...this.storyDetailsService.story, isSensitive: !this.storyDetailsService.story.isSensitive };

    if (this.storyDetailsService.story.isSensitive) {
      this.storyDetailsService.story = { ...this.storyDetailsService.story, categories: [] };
    }

    this.validateCategories();
  }

  isSelectedDifficulty(id: string): boolean {
    return this.storyDetailsService.story.difficulties.map((diff) => diff.id).includes(id);
  }

  handleDifficultyChange($event, difficulty: IBaseEntityD): void {
    const { checked } = $event;
    if (checked) {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        difficulties: [...this.storyDetailsService.story.difficulties, difficulty],
      };
    } else {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        difficulties: this.storyDetailsService.story.difficulties.filter((diff) => diff.id !== difficulty.id),
      };
    }
  }

  isSelectedVulnerabilityFactor(id: string): boolean {
    return this.storyDetailsService.story.vulnerabilityFactors?.includes(id) || false;
  }

  handleVulnerabilityFactorChange($event, factor: IBaseEntityCheck): void {
    const { checked } = $event;
    if (!this.storyDetailsService.story.vulnerabilityFactors) {
      this.storyDetailsService.story.vulnerabilityFactors = [];
    }

    if (checked) {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        vulnerabilityFactors: [...this.storyDetailsService.story.vulnerabilityFactors, factor.id],
      };
    } else {
      this.storyDetailsService.story = {
        ...this.storyDetailsService.story,
        vulnerabilityFactors: this.storyDetailsService.story.vulnerabilityFactors.filter((factorId) => factorId !== factor.id),
      };
    }

    this.storyForm.get('vulnerabilityFactors').setValue(this.storyDetailsService.story.vulnerabilityFactors);
  }

  dismissVulnerabilityFactor(id: string): void {
    const factors = this.storyDetailsService.story.vulnerabilityFactors.filter((factorId) => factorId !== id);
    this.storyDetailsService.story = {
      ...this.storyDetailsService.story,
      vulnerabilityFactors: factors,
    };
    this.storyForm.get('vulnerabilityFactors').setValue(factors);
  }

  handleDisabilitiesChange(): void {
    // Only clear if explicitly "No" (null means unanswered)
    if (this.hasDisabilities === false) {
      this.storyDetailsService.story.difficulties = [];
    }
  }

  handleLanguageQueryChange(query: string): void {
    this.matchingLanguages = !query?.length
      ? this.languageOptions
      : this.matchingLanguages?.filter((languageOptions) => languageOptions.name.toLowerCase().includes(query.toLowerCase()));
  }

  isLanguageSelected(): boolean {
    return !!this.storyDetailsService.story.language;
  }

  removeOrganisation(organisationId: string): void {
    const orgIndex = this.storyDetailsService.story.organisations.findIndex((organisation) => organisation.id === organisationId);

    if (orgIndex !== -1) {
      this.storyDetailsService.story.organisations.splice(orgIndex, 1);
    }
  }

  handleOrganisationAdd(): void {
    const option = this.organisationComp?.lastOption;

    if (option && !this.storyDetailsService.story.organisations.some((org) => org.id === option.id)) {
      const newOption = { id: option.id, name: option.name, replied: false } as IOrganisation;
      this.storyDetailsService.story.organisations.push(newOption);
    }
  }

  organisationsOutsideClick(): void {
    this.storyDetailsService.story.organisations = [];
  }

  dismissOrganisation(id: string): void {
    const filteredOrganisations = this.storyDetailsService.story.organisations.filter((v) => v.id !== id);
    this.storyDetailsService.story = { ...this.storyDetailsService.story, organisations: filteredOrganisations };
  }

  openInvitation(): void {
    this.modalService.open(InvitationModalComponent);
  }

  handleThematicChange(): void {
    this.storyDetailsService.story.thematics = this.storyForm.value.thematics;
  }

  dismissThematicArea(id: number): void {
    const thematics = this.storyDetailsService.story.thematics.filter((thematicId) => thematicId !== id);
    this.storyDetailsService.story = {
      ...this.storyDetailsService.story,
      thematics,
    };
    this.storyForm.get('thematics').setValue(thematics);
  }

  thematicAreaOutsideClick(): void {
    this.storyForm.get('thematics').setValue(this.storyDetailsService.story.thematics);
    this.resetThematics$.next(true);
  }

  getOrganisationLabel(organisation: IOrganisation) {
    return !!organisation.acronym ? `${organisation.name} • ${organisation.acronym}` : organisation.name;
  }

  private validateCategories(): boolean {
    if (this.storyDetailsService.story.categories.length <= 0 && this.storyDetailsService.story.isSensitive === false) {
      this.categoriesError = this.translateService.instant('admin.pendingStoryReview.missingStoryType');
      return false;
    }
    this.categoriesError = null;
    return true;
  }

  private setData(): void {
    this.ageOptions = Object.values(AGE_VALUE_EXTENDED).map((value) => ({ value, content: AGE_MAPPING_EXTENDED[value] }));

    this.genderOptions = Object.values(GENDER_VALUE).map((value) => ({ value, content: GENDER_MAPPING[value] }));

    this.urgentOptions = Object.values(URGENT_VALUE).map((value) => ({ value, content: URGENT_MAPPING[value] }));

    this.minorityOptions = Object.values(MINORITY_TRANSLATE_VALUE).map((value) => ({ value, content: MINORITY_TRANSLATE_MAPPING[value] }));

    this.metaDataService.difficulties$.subscribe((difficulties) => {
      this.difficulties = difficulties;
    });

    this.metaDataService.vulnerabilityFactors$.subscribe((vulnerabilityFactors) => {
      this.vulnerabilityFactors = vulnerabilityFactors.sort((a, b) => {
        const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
        const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
        if (isOtherA && !isOtherB) return 1;
        if (!isOtherA && isOtherB) return -1;

        const nameA = String(this.translateService.instant(a.code) || a.code);
        const nameB = String(this.translateService.instant(b.code) || b.code);
        return nameA.localeCompare(nameB);
      });
    });

    this.hasDisabilities = this.storyDetailsService.story.difficulties.length ? true : null;

  }
  isAuthorNameValid(): boolean {
    const name = (this.storyDetailsService.story?.authorNickname || '').trim();
    return name.length > 0;
  }

  isAgeValid(): boolean {
    return this.storyDetailsService.story?.age !== null && this.storyDetailsService.story?.age !== undefined;
  }

  isGenderValid(): boolean {
    return this.storyDetailsService.story?.gender !== null && this.storyDetailsService.story?.gender !== undefined;
  }

  isDisabilityValid(): boolean {
    // Must explicitly choose Yes/No. `null` means unanswered.
    return this.hasDisabilities !== null;
  }

  isMinorityValid(): boolean {
    const v = this.storyForm.get('isMinority')?.value;
    return v !== null && v !== undefined;
  }

  private getMetadata(): void {
    combineLatest([this.metaDataService.categories$, this.metaDataService.thematicAreas$, this.metaDataService.vulnerabilityFactors$])
      .pipe(take(1), takeUntil(this.destroyed$))
      .subscribe(([categories, thematic, vulnerabilityFactors]) => {
        this.categories = categories.map((category) => {
          return { code: category.code.split('.').pop(), count: category.count, id: category.id } as ICategory;
        });
        this.thematicAreaData = {
          data: thematic.map((tx) => {
            tx.checked = false;
            tx.children.forEach((child) => {
              child.parentId = tx.code;
              child.checked = false;
            });
            tx.children.sort((a, b) => {
              const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
              const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
              if (isOtherA && !isOtherB) return 1;
              if (!isOtherA && isOtherB) return -1;

              const nameA = String(this.translateService.instant(a.code) || a.code);
              const nameB = String(this.translateService.instant(b.code) || b.code);
              return nameA.localeCompare(nameB);
            });
            return tx;
          }).sort((a, b) => {
            const nameA = String(this.translateService.instant(a.code) || a.code);
            const nameB = String(this.translateService.instant(b.code) || b.code);
            return nameA.localeCompare(nameB);
          }) as IBaseEntityCheckNested[],
        };
        this.vulnerabilityFactors = vulnerabilityFactors.sort((a, b) => {
          const isOtherA = a.code.toLowerCase().endsWith('other') || a.code.toLowerCase().endsWith('autre');
          const isOtherB = b.code.toLowerCase().endsWith('other') || b.code.toLowerCase().endsWith('autre');
          if (isOtherA && !isOtherB) return 1;
          if (!isOtherA && isOtherB) return -1;

          const nameA = String(this.translateService.instant(a.code) || a.code);
          const nameB = String(this.translateService.instant(b.code) || b.code);
          return nameA.localeCompare(nameB);
        });

        if (this.storyForm && this.storyDetailsService.story.vulnerabilityFactors) {
          this.storyForm.get('vulnerabilityFactors').setValue(this.storyDetailsService.story.vulnerabilityFactors);
        }
      });
  }

  private getLanguageOptions(): AutocompleteOption[] {
    return this.allLanguages?.map((language) => ({
      id: language.language,
      name: this.translateService.instant(`languages.${language.language}`),
    }));
  }

  private initLanguages(): void {
    this.languageService.allLanguages$.pipe(take(1)).subscribe((languages) => {
      this.allLanguages = languages;
      this.languageOptions = this.getLanguageOptions();
    });
  }

  private setOrganisations(): void {
    this.metaDataService.organisations$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((organisations) => {
      this.organisationsOptions = organisations.map(
        (org: IBaseEntityN): Option => ({
          content: org.name,
          value: org,
        }),
      );
    });
  }

  private setThematics(): void {
    this.thematicOptions = this.storyDetailsService.thematics.map(
      (thematic: IGetThematicAPIExtended): Option => ({
        value: thematic.id,
        content: this.translateService.instant(thematic.code),
        children: thematic.children.map((child) => ({
          content: this.translateService.instant(child.code),
          value: child.id,
        })),
      }),
    );
  }

  private watchFormSubmitError(): void {
    this.storyDetailsService.reviewSubmitError$.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.submittingError = value;
    });
  }

  private watchFormChanges(): void {
    this.storyForm
      .get('locationControl')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.storyDetailsService.story.regionId = this.storyForm.get('locationControl').value;
      });

    this.storyForm
      .get('languageControl')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.storyDetailsService.story.language = this.storyForm.get('languageControl').value;
      });

    this.storyForm
      .get('organisationControl')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        if (value) {
          this.metaDataService.organisations$.pipe(take(1), takeUntil(this.destroyed$)).subscribe((organisations) => {
            const organisation = organisations.find((org) => org.name === value || org.id === value);
            const newOption = {
              id: organisation.id,
              name: organisation.name,
              replied: false,
              acronym: organisation.acronym,
              countryCode: organisation.countryCode,
              countryName: this.countryPipe.transform(organisation.countryCode),
              usersCount: organisation.usersCount,
            } as IOrganisation;
            this.storyDetailsService.story.organisations.push(newOption);
            this.storyForm.get('organisationControl').reset();
          });
        }
      });

    this.storyForm
      .get('isUrgent')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value: number) => {
        this.storyDetailsService.story.isUrgent = value === 1;
      });

    this.storyForm
      .get('isMinority')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value: number | null) => {
        // If unanswered, keep it null; otherwise map 1/0 to boolean
        if (value === null || value === undefined) {
          (this.storyDetailsService.story as any).isMinority = null;
          return;
        }
        this.storyDetailsService.story.isMinority = value === 1;
      });
  }

  updateUrgentStatus(value: number): void {
    this.storyForm.get('isUrgent').setValue(value);
    this.storyDetailsService.story.isUrgent = value === 1;
  }

  onAgeChange(age: number): void {
    if (age === AGE_VALUE_EXTENDED.BETWEEN_0_AND_13) {
      this.storyDetailsService.story.isSensitive = true;
    }
  }

  updateMinorityStatus(value: number): void {
    this.storyForm.get('isMinority').setValue(value);
    this.storyDetailsService.story.isMinority = value === 1;
  }
}
