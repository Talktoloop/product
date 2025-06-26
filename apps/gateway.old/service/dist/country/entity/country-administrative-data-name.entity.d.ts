import { CountryAdministrativeDataEntity } from './country-administrative-data.entity';
export declare class CountryAdministrativeDataNameEntity {
    id: number;
    administrativeAreaId: number;
    languageId: number;
    name: string;
    administrativeData?: CountryAdministrativeDataEntity;
}
