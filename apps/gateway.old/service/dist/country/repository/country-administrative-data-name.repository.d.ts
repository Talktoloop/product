import { Repository } from 'typeorm';
import { CountryAdministrativeDataNameEntity } from '../entity/country-administrative-data-name.entity';
export declare class CountryAdministrativeDataNameRepository extends Repository<CountryAdministrativeDataNameEntity> {
    private readonly logger;
    findLanguagesByCountryId(countryId: number): Promise<Array<{
        languageId: number;
    }>>;
    findByCountryIdAndPhrase(countryId: number, phrase: string, languageId?: number, exactlySame?: boolean): Promise<Array<{
        administrativeAreaId: number;
    }>>;
}
