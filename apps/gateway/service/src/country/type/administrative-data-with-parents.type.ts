import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';

export type AdministrativeDataWithParents = {
  items: Array<
    CountryAdministrativeDataEntity & {
      numberOfStories?: number;
      languageId?: number;
    }
  >;
  parents: Record<string, CountryAdministrativeDataEntity[]>;
};
