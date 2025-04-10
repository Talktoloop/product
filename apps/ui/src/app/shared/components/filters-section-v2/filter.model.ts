import { AbstractControl } from '@angular/forms';
import {
  CheckboxFilterData,
  CheckboxListFilterData,
  CheckboxTabsFilterData,
} from '@shared/components/filters-section-v2/filters-controls-data.model';
import { AutocompleteType } from '@shared/components/filters-section-v2/filters.config';

type FilterDataType = CheckboxFilterData | CheckboxTabsFilterData | CheckboxListFilterData | any;

export interface IFilterV2<T extends PropertyKey> {
  // Type T should be union type of filters names
  translationKey: string;
  falseValueTranslationKey?: string;
  internalName?: T;
  filterFormConfig: { [key in T as string]: AbstractControl };
  type: FilterType; // Specifies what will be rendered under this filter
  data?: FilterDataType; // Data for controls
  mapValue?: (formData: any) => any; // Map value for request needs
  count?: number;
  autocompleteType?: AutocompleteType; // Temporary solution to use expected autocomplete filter component
  noSingleValueTitle?: boolean; // Don't show name of single chosen value of filter in filter pill
  countValueAsOne?: boolean;
  singleValueTitlePrefix?: string | { [key: string]: string }; // Prefix of translation key when single value of some filter is chosen
  findSingleValueInData?: (data: any, value: any) => string;
  sessionStorageKey?: string | string[];
  mapValueFromStorage?: (key: string, value: any, mapToFormData: boolean) => any; // Map value from storage to FilterSectionV2Component or to request
  mapValueToStorage?: (value: any, data: FilterDataType) => string;
  maxLength?: number; // For LENGTH filter - max value
}

export enum FilterType {
  PRESET = 'PRESET',
  CHECKBOX = 'CHECKBOX',
  CHECKBOX_SINGLE = 'CHECKBOX_SINGLE',
  CHECKBOX_TABS = 'CHECKBOX_TABS',
  CHECKBOX_LIST = 'CHECKBOX_LIST',
  AUTOCOMPLETE = 'AUTOCOMPLETE',
  DOUBLE_AUTOCOMPLETE = 'DOUBLE_AUTOCOMPLETE',
  CALENDAR = 'CALENDAR',
  REGION = 'REGION',
  ORGANISATION = 'ORGANISATION',
  LENGTH = 'LENGTH',
  BOOLEAN = 'BOOLEAN',
  SEARCH_TEXT = 'SEARCH_TEXT'
}

export enum FiltersNames {
  STORY_TYPE = 0,
  LOCATION = 1,
  DEMOGRAPHIC = 2,
  THEMATIC_AREA = 3,
  ORGANISATION = 4,
  DATE = 5,
  SEARCH_TEXT = 7
}

export const StatisticsCasesFiltersNamesMapping = {
  0: 'caseType',
  1: 'location',
  2: 'demographic',
  3: 'organisationType',
  4: 'date',
  5: 'investigationOutcome',
  6: 'referredForAssistance',
  7: 'thematicArea',
};
