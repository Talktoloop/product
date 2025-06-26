import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { AdministrativeDataPathRO } from '../response/administrative-data-path.ro';
export declare const administrativeDataPathMapper: (parents: CountryAdministrativeDataEntity[], userLanguageId: number, defaultLanguageId: number, defaultLanguageIdForAdministrativeData: number) => AdministrativeDataPathRO;
