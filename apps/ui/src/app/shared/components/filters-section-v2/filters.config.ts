import { FormControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FilterType, IFilterV2 } from '@shared/components/filters-section-v2/filter.model';
import { CASES_AGE_REVERSE_MAPPING } from '@shared/types/age.type';
import { ASSISTANCE_REFERRED_MAPPING } from '@shared/types/assistance-referred.type';
import { CASE_TYPE_MAPPING } from '@shared/types/case-type.type';
import { CASES_GENDER_REVERSE_MAPPING } from '@shared/types/gender.type';
import { ORGANISATION_TYPE_MAPPING } from '@shared/types/organisation-type.type';
import { MultiRegionData } from '@shared/components/location/location.component';
import * as moment from 'moment';
import { CheckboxFilterData } from './filters-controls-data.model';

export enum AutocompleteType {
  ORGANISATION = 'ORGANISATION',
  COUNTRY = 'COUNTRY',
}

export enum StoriesFilters {
  SEARCH_TEXT = 'storySearchText',
  PRESET = 'presetFilters',
  TYPE = 'type',
  LOCATION = 'location',
  DEMOGRAPHIC = 'demographic',
  THEMATIC = 'thematic',
  ORGANISATION = 'organisation',
  DATE = 'date',
  REGION = 'region',
  ORGANISATION_RESPONSIVENESS = 'organisationResponsiveness',
  CHANNEL_FILTER = 'channelFilter',
  LANGUAGE = 'language',
  COMMUNITY_RESPONSIVENESS = 'communityResponsiveness',
  VULNERABILITY_FACTORS = 'vulnerabilityFactors',
}

export const DEMOGRAPHIC_FILTER_SESSION_STORAGE_KEYS = ['age', 'gender', 'difficulty', 'minority'];
export const LOCATION_FILTER_SESSION_STORAGE_KEYS = ['semiClicked', 'regionIds', 'countries', 'selectedRegionsOrCountries'];

export const openStoriesFiltersConfig: IFilterV2<StoriesFilters>[] = [
  {
    // --------------------- SEARCH TEXT ---------------------
    translationKey: 'filtersV2.searchText.label',
    internalName: StoriesFilters.SEARCH_TEXT,
    filterFormConfig: { storySearchText: new UntypedFormControl(null) },
    type: FilterType.SEARCH_TEXT,
    sessionStorageKey: 'storySearchText',
  },
  {
    // --------------------- PRESETS ---------------------
    translationKey: 'filtersV2.preset.label',
    internalName: StoriesFilters.PRESET,
    filterFormConfig: { presetFilters: new UntypedFormControl(null) },
    type: FilterType.PRESET,
    sessionStorageKey: 'presetFilters',
  },
  {
    // --------------------- STORY TYPE ---------------------
    translationKey: 'filtersV2.storyType.label',
    internalName: StoriesFilters.TYPE,
    filterFormConfig: { type: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'type',
  },
  // {
  //   // --------------------- STORY LOCATION ---------------------
  //   translationKey: 'filtersV2.loaction.label',
  //   internalName: StoriesFilters.LOCATION,
  //   filterFormConfig: {
  //     location: new UntypedFormGroup({
  //       country: new UntypedFormControl(null),
  //       location: new UntypedFormControl(null),
  //     }),
  //   },
  //   type: FilterType.DOUBLE_AUTOCOMPLETE,
  //   mapValue: ({ location, country }: { country: string; location: string }) => ({
  //     place: location,
  //     country,
  //     location: undefined,
  //   }),
  //   singleValueTitlePrefix: {
  //     country: 'country_name.',
  //     location: '',
  //   },
  //   sessionStorageKey: ['country', 'location'],
  //   mapValueFromStorage: (key: string, value: any) => ({ location: { [key]: value } }),
  // },
  {
    // --------------------- DEMOGRAPHIC ---------------------
    translationKey: 'filtersV2.demographic.label',
    internalName: StoriesFilters.DEMOGRAPHIC,
    filterFormConfig: {
      demographic: new UntypedFormGroup({
        age: new UntypedFormControl(null),
        gender: new UntypedFormControl(null),
        difficulty: new UntypedFormControl(null),
        minority: new UntypedFormControl(null),
      }),
    },
    type: FilterType.CHECKBOX_TABS,
    mapValue: ({ age = null, gender = null, difficulty = null, minority = null }:
                 { age: string; gender: string; difficulty: string; minority: string; }) => ({
      age,
      gender,
      difficulty,
      minority,
      demographic: undefined,
    }),
    sessionStorageKey: DEMOGRAPHIC_FILTER_SESSION_STORAGE_KEYS,
    mapValueFromStorage: (key: string, value: any) => ({ demographic: { [key]: value } }),
  },
  {
    // --------------------- REGION ---------------------
    translationKey: 'filtersV2.loaction.label',
    internalName: StoriesFilters.REGION,
    filterFormConfig: {
      region: new FormControl<MultiRegionData>(<MultiRegionData>{
        regionIds: [],
        countries: [],
        semiClicked: [],
        selectedRegionsOrCountries: [],
      }),
    },
    type: FilterType.REGION,
    sessionStorageKey: LOCATION_FILTER_SESSION_STORAGE_KEYS,
    mapValue: (data: MultiRegionData) => {
      const { regionIds, countries, selectedRegionsOrCountries, semiClicked } = data;
      const preparedData = <{ regionId: Array<number>; country: Array<string> }>{};
      if (regionIds?.length) {
        preparedData.regionId = regionIds;
      }
      if (countries?.length) {
        preparedData.country = countries;
      }
      return preparedData;
    },
    mapValueFromStorage: (key: string, value: any) => {
      return { region: { [key]: value } };
    },
  },
  {
      // --------------------- LANGUAGE ---------------------
      translationKey: 'inbox.filters.labels.language', //change
      internalName: StoriesFilters.LANGUAGE,
      filterFormConfig: { language: new UntypedFormControl(null) },
      type: FilterType.CHECKBOX,
      sessionStorageKey: 'storiesLanguage',
      mapValueToStorage: (languagesIds: number[], data: CheckboxFilterData) =>
        JSON.stringify(
          (languagesIds || []).map((languageId) => ({
            id: languageId,
            name: data.data.find((languageData) => languageData.id === languageId.toString())?.name,
          })),
        ),
      mapValueFromStorage: (key, value: { id: number; name: string }[], mapToFormData) => ({
        language: value?.map((singleValue) => (mapToFormData ? singleValue.id : singleValue.name)),
      }),
      mapValue: (data: { id: number; name: string }[]) => data.map((singleData) =>singleData.id),
    },
  {
    // --------------------- THEMATIC AREA ---------------------
    translationKey: 'filtersV2.thematicArea.label',
    internalName: StoriesFilters.THEMATIC,
    filterFormConfig: { thematic: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX_LIST,
    sessionStorageKey: 'thematic',
  },
  {
    // --------------------- ORGANISATION ---------------------
    translationKey: 'filtersV2.organisation.label',
    internalName: StoriesFilters.ORGANISATION,
    filterFormConfig: { organisation: new UntypedFormControl([]) },
    type: FilterType.ORGANISATION,
    sessionStorageKey: 'organisation',
    findSingleValueInData: (data: any, value: any) => data?.find((o) => o.id === value)?.name,
    countValueAsOne: false,
  },
  {
    // --------------------- DATE ---------------------
    translationKey: 'filtersV2.date.label',
    internalName: StoriesFilters.DATE,
    filterFormConfig: {
      date: new UntypedFormGroup({
        from: new UntypedFormControl(null),
        to: new UntypedFormControl(null),
      }),
    },
    type: FilterType.CALENDAR,
    data: null,
    mapValue: ({ from, to }: { from: string; to: string }) => ({
      from: from ? moment(from).startOf('day').utc(true).format() : undefined,
      to: to ? moment(to).endOf('day').utc(true).format() : undefined,
      date: undefined,
    }),
    noSingleValueTitle: true,
    sessionStorageKey: 'date',
    countValueAsOne: true,
  },
  {
    // --------------------- CHANNELS ---------------------
    translationKey: 'filtersV2.channel.label',
    internalName: StoriesFilters.CHANNEL_FILTER,
    filterFormConfig: { channelFilter: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'channelFilter',
  },
  {
    // --------------------- ORGANISATION RESPONSIVENESS ---------------------
    translationKey: 'filtersV2.organisationResponsiveness.label',
    internalName: StoriesFilters.ORGANISATION_RESPONSIVENESS,
    filterFormConfig: { organisationResponsiveness: new UntypedFormControl(null) },
    type: FilterType.ORGANISATION_RESPONSIVENESS,
    sessionStorageKey: 'organisationResponsiveness',
  },
  {
    // --------------------- COMMUNITY RESPONSIVENESS ---------------------
    translationKey: 'filtersV2.communityResponsiveness.label',
    internalName: StoriesFilters.COMMUNITY_RESPONSIVENESS,
    filterFormConfig: { communityResponsiveness: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX_SINGLE,
    sessionStorageKey: 'communityResponsiveness',
  },
  {
    // --------------------- VULNERABILITY FACTORS ---------------------
    translationKey: 'filtersV2.vulnerabilityFactors.label',
    internalName: StoriesFilters.VULNERABILITY_FACTORS,
    filterFormConfig: { vulnerabilityFactors: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'vulnerabilityFactors',
    countValueAsOne: false,
  }
];

export enum CasesFilters {
  SEARCH_TEXT = 'casesStoriesSearchText',
  CASE_TYPE = 'caseType',
  LOCATION = 'country',
  DEMOGRAPHIC = 'casesDemographic',
  THEMATIC_AREA = 'thematic',
  ORGANISATION_TYPE = 'organisationType',
  DATE = 'date',
  OUTCOMES_OF_INVESTIGATION = 'investigationOutcome',
  ASSISTANCE_REFERRED = 'referredForAssistance',
}

export const casesFiltersConfig: IFilterV2<CasesFilters>[] = [
  {
    // --------------------- CASE TYPE ---------------------
    translationKey: 'caseTypes.label',
    internalName: CasesFilters.CASE_TYPE,
    filterFormConfig: { caseType: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'caseType',
    mapValue: (data: number[]) => ({
      caseType: data.map((singleData) => CASE_TYPE_MAPPING[singleData]),
    }),
  },
  {
    // --------------------- SEARCH TEXT ---------------------
    translationKey: 'filtersV2.searchText',
    internalName: CasesFilters.SEARCH_TEXT,
    filterFormConfig: { casesStoriesSearchText: new UntypedFormControl(null) },
    type: FilterType.SEARCH_TEXT,
    sessionStorageKey: 'casesStoriesSearchText',
  },
  {
    // --------------------- LOCATION ---------------------
    translationKey: 'filtersV2.loaction.label',
    internalName: CasesFilters.LOCATION,
    filterFormConfig: { country: new UntypedFormControl(null) },
    type: FilterType.AUTOCOMPLETE,
    autocompleteType: AutocompleteType.COUNTRY,
    singleValueTitlePrefix: 'country_name.',
    sessionStorageKey: 'country',
  },
  {
    // --------------------- DEMOGRAPHIC ---------------------
    translationKey: 'filtersV2.demographic.label',
    internalName: CasesFilters.DEMOGRAPHIC,
    filterFormConfig: {
      casesDemographic: new UntypedFormGroup({
        casesAge: new UntypedFormControl(null),
        casesGender: new UntypedFormControl(null),
        // casesDifficulty: new UntypedFormControl(null),
      }),
    },
    type: FilterType.CHECKBOX_TABS,
    mapValue: ({
      casesAge = null,
      casesGender = null,
      // casesDifficulty = null,
    }: {
      casesAge: number[];
      casesGender: number[];
      casesDifficulty: number[];
    }) => ({
      casesAge: casesAge?.map((age) => CASES_AGE_REVERSE_MAPPING[age]),
      casesGender: casesGender?.map((gender) => CASES_GENDER_REVERSE_MAPPING[gender]),
      // casesDifficulty: casesDifficulty?.map((difficulty) => CASES_DIFFICULTY_REVERSE_MAPPING[difficulty]),
      casesDemographic: undefined,
    }),
    sessionStorageKey: ['casesAge', 'casesGender'], //'casesDifficulty'
    mapValueFromStorage: (key: string, value: any) => ({ casesDemographic: { [key]: value } }),
  },
  {
    // --------------------- TYPE OF ORGANISATION ---------------------
    translationKey: 'organisationType.label',
    internalName: CasesFilters.ORGANISATION_TYPE,
    filterFormConfig: { organisationType: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'organisationType',
    mapValue: (data: number[]) => ({
      organisationType: data.map((singleData) => ORGANISATION_TYPE_MAPPING[singleData]),
    }),
  },
  // {
  //   // --------------------- THEMATIC AREA ---------------------
  //   translationKey: 'filtersV2.thematicArea.label',
  //   internalName: CasesFilters.THEMATIC_AREA,
  //   filterFormConfig: { thematic: new UntypedFormControl(null) },
  //   type: FilterType.CHECKBOX_LIST,
  //   sessionStorageKey: 'thematicArea',
  // },
  {
    // --------------------- DATE ---------------------
    translationKey: 'filtersV2.date.label',
    internalName: CasesFilters.DATE,
    filterFormConfig: {
      date: new UntypedFormGroup({
        from: new UntypedFormControl(null),
        to: new UntypedFormControl(null),
      }),
    },
    type: FilterType.CALENDAR,
    mapValue: ({ from, to }: { from: string; to: string }) => ({
      from: from ? moment(from).startOf('day').utc(true).format() : undefined,
      to: to ? moment(to).endOf('day').utc(true).format() : undefined,
      date: undefined,
    }),
    noSingleValueTitle: true,
    sessionStorageKey: 'date',
    countValueAsOne: true,
  },
  // {
  //   // --------------------- OUTCOMES OF INVESTIGATION ---------------------
  //   translationKey: 'outcomesOfInvestigation.label',
  //   internalName: CasesFilters.OUTCOMES_OF_INVESTIGATION,
  //   filterFormConfig: { investigationOutcome: new UntypedFormControl(null) },
  //   type: FilterType.CHECKBOX,
  //   sessionStorageKey: 'investigationOutcome',
  //   mapValue: (data: number[]) => ({
  //     investigationOutcome: data.map((singleData) => INVESTIGATION_OUTCOME_MAPPING[singleData]),
  //   }),
  // },
  {
    // --------------------- ASSISTANCE REFERRED ---------------------
    translationKey: 'assistanceReferred.label',
    internalName: CasesFilters.ASSISTANCE_REFERRED,
    filterFormConfig: { referredForAssistance: new UntypedFormControl(null) },
    type: FilterType.CHECKBOX,
    sessionStorageKey: 'referredForAssistance',
    mapValue: (data: number[]) => ({
      referredForAssistance: data.map((singleData) => ASSISTANCE_REFERRED_MAPPING[singleData]),
    }),
  },
];
