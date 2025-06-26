import { StoryRepository } from '../../story/repository/story.repository';
import { SelectQueryBuilder } from 'typeorm';
import { StoryEntity } from '../../story/entity/story.entity';
import { StoriesDividedByDisabilityQueryResult } from '../response/stories-divided-by-disability.ro';
import { StoryAgeCount } from '../interfaces/story-age-count.interface';
import { FilterDto } from '../../common/dto/filter.dto';
import { Author } from '../interfaces/author.interface';
import { TimeToResponse } from '../interfaces/time-to-response.interface';
import { ThematicIdCount } from '../interfaces/thematic-id-count.interface';
import { StoryGenderCount } from '../interfaces/story-gender-count.interface';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { CountRO } from '../response/count.ro';
export declare class OpenStoryForStoryRepository extends StoryRepository {
    findCountOfStoriesByFilter(filters: FilterDto): Promise<CountRO[]>;
    private subQueryThematic;
    getSensitiveStoriesByPeriod(filters: FilterDto): Promise<QuantityPerMonth[]>;
    getStoriesPerThematicArea(filters: FilterDto, status: string, id?: number): Promise<ThematicIdCount[]>;
    getCountOfSensitiveStoriesDividedByGender(filters: FilterDto): Promise<StoryGenderCount[]>;
    getCountOfStoriesForStoryTypeDividedByGender(id: number, filters?: FilterDto): Promise<StoryGenderCount[]>;
    getCountOfSensitiveStoriesDividedByAge(filters: FilterDto): Promise<StoryAgeCount[]>;
    getCountOfStoriesForStoryTypeDividedByAge(id: number, filters?: FilterDto): Promise<StoryAgeCount[]>;
    organisationBase(filters?: FilterDto): SelectQueryBuilder<StoryEntity>;
    getStoriesTotal(filters?: FilterDto): Promise<number>;
    getCountOfStoriesWithResponds(filters?: FilterDto): Promise<number>;
    getCountOfStoriesWithOrganisationResponds(filters?: FilterDto): Promise<number>;
    getUniqueTaggedOrganisationIds(filters?: FilterDto): Promise<{
        id: string;
    }[]>;
    getUniqueNotAnonymousStoryAuthors(filters?: FilterDto): Promise<Author[]>;
    getNumberOfAnonymousStoryAuthors(filters?: FilterDto): Promise<number>;
    getNumberOStoriesByStatus(filters: FilterDto, status: string): Promise<number>;
    private partialQueryForGetStoriesDividedByDisabilities;
    getStoriesDividedByDisabilities(filters?: FilterDto): Promise<StoriesDividedByDisabilityQueryResult[]>;
    getNumberOfSensitiveStories(filters?: FilterDto): Promise<number>;
    getAvgStoryResponseTimePerStoryType(storyTypeId: number, filters?: FilterDto): Promise<TimeToResponse[]>;
    getAvgResponseTime(filters?: FilterDto): Promise<TimeToResponse[]>;
}
