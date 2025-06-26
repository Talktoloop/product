import { Repository } from 'typeorm';
import { CountryEntity } from '../entity/country.entity';
import { CountryWithCounters } from '../type/country-with-counters.type';
export declare class CountryRepository extends Repository<CountryEntity> {
    private readonly logger;
    getCountriesWithNumberOfStories(): Promise<CountryWithCounters[]>;
    getCountriesByPhrase(phrase: string): Promise<CountryEntity[]>;
    findCountriesToAirtable(): Promise<{
        Name: string;
    }[]>;
}
