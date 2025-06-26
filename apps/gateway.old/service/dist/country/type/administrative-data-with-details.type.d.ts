import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
export type AdministrativeDataWithDetails = CountryAdministrativeDataEntity & {
    numberOfStories?: number;
    languageId?: number;
    name?: string;
    defaultLanguageIdForAdministrativeData?: number;
};
