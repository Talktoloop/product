import { AdministrativeDataRO } from '../response/administrative-data.ro';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { LanguageEntity } from '../../language/entity/language.entity';
import { CountryAdministrativeDataNameEntity } from '../entity/country-administrative-data-name.entity';
export declare const findAdministrativeDataByLanguage: (variants: CountryAdministrativeDataNameEntity[], userLanguageId: number, defaultLanguageId: number, defaultLanguageIdForAdministrativeData: number) => CountryAdministrativeDataNameEntity;
export declare const filterAdministrativeDataByLanguage: (administrativeData: Array<AdministrativeDataWithDetails>, userLanguageId: number, defaultLanguageId: number) => AdministrativeDataWithDetails[];
export declare const administrativeDataMapper: (administrativeData: Array<AdministrativeDataWithDetails>, userLanguageId: number, defaultLanguage: LanguageEntity) => AdministrativeDataRO[];
