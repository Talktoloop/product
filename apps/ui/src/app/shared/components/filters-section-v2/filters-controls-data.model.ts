import { IBaseEntityCheckNested, IBaseEntityDN } from '@core/services/api/model/response/base-entity.model';

// Data interface for default checkboxes (f.e. story type filter)
export type CheckboxFilterData = {
  data: IBaseEntityDN[];
  titleKey: string;
};

// Data interface for checkbox tabs (f.e. demographic filter)
export type CheckboxTabsFilterData = {
  translationKey: string;
  data: IBaseEntityDN[];
  controlName: string;
}[];

// Data interface for checkbox list with parent options (f.e. thematic area filter)
export interface CheckboxListFilterData {
  data: IBaseEntityCheckNested[];
}
