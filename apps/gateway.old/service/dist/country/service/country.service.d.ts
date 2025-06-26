import { CountryEntity } from '../entity/country.entity';
import { CountryRepository } from '../repository/country.repository';
import { FindManyOptions } from 'typeorm';
import { CountryWithCounters } from '../type/country-with-counters.type';
import { StoryService } from '../../story/service/story.service';
export declare class CountryService {
    private readonly storyService;
    private readonly countryRepository;
    constructor(storyService: StoryService, countryRepository: CountryRepository);
    getCountries(params?: FindManyOptions<CountryEntity>): Promise<CountryEntity[]>;
    getCountriesWithNumberOfStories(onlyWithStory: boolean): Promise<CountryWithCounters[]>;
    findByCode(code: string): Promise<CountryEntity>;
    findByIdOrFail(id: number): Promise<CountryEntity>;
    findByCodeOrFail(code: string): Promise<CountryEntity>;
    findByPhrase(phrase: string): Promise<CountryEntity[]>;
}
