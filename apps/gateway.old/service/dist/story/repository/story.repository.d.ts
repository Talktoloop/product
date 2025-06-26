import { Repository, SelectQueryBuilder } from 'typeorm';
import { StoryEntity } from '../entity/story.entity';
import { StoryModeratorOrderEnum, StoryOrderEnum } from '../../common/types';
import { STORY_STATUS } from '@ourloop/shared';
import { StoryPaginationWithOrderAndFilterDto } from '../../common/dto/story-pagination-with-order-and-filter.dto';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { StoryFilterAndOrderDto } from '../request/dto/story-filter-and-order.dto';
import { IncomingDataDashboardFilterDTO } from '../../dashboard/request/dto/incoming-data-dashboard-filter.dto';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
export declare class StoryRepository extends Repository<StoryEntity> {
    private readonly logger;
    getStoryCount(languageId: number, filter?: StoryFilterAndOrderDto, thematicGroupObject?: Record<string, unknown>): Promise<number>;
    private subQueryComments;
    private subQueryIsReplied;
    findStoryIdsByOrganisationIds(ids: string[]): Promise<Record<string, string>[]>;
    findStoryIdsByDifficultyIds(ids: number[]): Promise<Record<string, string>[]>;
    findStoryIdsByThematicAreaIds(ids: (number | string)[]): Promise<Record<string, string>[]>;
    findSensitiveStories(): Promise<StoryEntity[]>;
    findStoryIdsByParams(params: StoryFilterAndOrderDto, statuses: STORY_STATUS[]): Promise<Record<string, string>[]>;
    findTranslationsToExport(): Promise<Array<StoryTranslationEntity & {
        storyLanguageId: number;
    }>>;
    findStoriesToExport(): Promise<StoryEntity[]>;
    findStoriesByIds(ids: string[], order: StoryOrderEnum): Promise<Record<string, string>[]>;
    findStoriesForUNExport(ids: string[], order: StoryOrderEnum): Promise<Record<string, any>[]>;
    findStoryByIdAndParams(storyId: string, params: {
        withDetails: boolean;
        channel?: CHANNEL_CONSTANTS;
        status?: string;
    }): Promise<StoryEntity>;
    getAdministrativeDataIdsByCountryId(countryId: number): Promise<any>;
    getPendingStoriesByIds(ids: string[], order: StoryModeratorOrderEnum, languageId: number, defaultLanguageId: number): Promise<any>;
    private getQueryForFilteredStories;
    applyStoryModeratorOrder(query: SelectQueryBuilder<StoryEntity>, order: StoryModeratorOrderEnum): Promise<void>;
    getNumberOfPendingStories(params: IncomingDataDashboardFilterDTO): Promise<number>;
    findPendingStoriesIds(params: StoryPaginationWithOrderAndFilterDto): Promise<string[]>;
    findStoriesWithoutDefinedAdministrativeArea(countryId: number): Promise<StoryEntity[]>;
}
