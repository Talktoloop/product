import { IBaseEntityCheck, IBaseEntityCheckNested, IBaseEntityDN, IBaseEntityN } from '@core/services/api/model/response/base-entity.model';
import { ICategory } from '@core/services/api/model/response/get-categories.model';

export interface IFiltersData {
  presetFilters: IBaseEntityCheck[];
  countries: IBaseEntityDN[];
  categories: ICategory[];
  difficulties: IBaseEntityDN[];
  thematic: IBaseEntityCheckNested[];
  organisations: IBaseEntityN[];
  ages: IBaseEntityCheck[];
  genders: IBaseEntityCheck[];
  minority: IBaseEntityCheck[];
  channelFilter: IBaseEntityCheck[];
  languages: IBaseEntityDN[];
  organisationResponsiveness: IBaseEntityCheck[];
  communityResponsiveness: IBaseEntityCheck[];
  vulnerabilityFactors: IBaseEntityCheck[];
}

export interface ICasesFiltersData {
  countries: IBaseEntityDN[];
  disability: IBaseEntityDN[];
  organisationType: IBaseEntityCheck[];
  ages: IBaseEntityCheck[];
  genders: IBaseEntityCheck[];
  investigationOutcome: IBaseEntityCheck[];
  caseType: IBaseEntityCheck[];
  referredForAssistance: IBaseEntityCheck[];
  thematic: IBaseEntityCheckNested[];
}
