import {
  Controller,
  Get,
  UseInterceptors,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenStoryService } from '../service/open-story.service';
import { StoriesAndRepliesGroupedByCategoryRO } from '../response/stories-and-replies-grouped-by-category.ro';
import { AvgResponseTimePerStoryTypeRO } from '../response/average-response-time-per-story-type.ro';
import { StoriesDividedByDisabilityRO } from '../response/stories-divided-by-disability.ro';
import { StoriesTypeAndRepliesRO } from '../response/stories-type-and-replies.ro';
import {
  StoriesAuthorPerAgeAndGenderRO,
  StoriesCodeValuesRO,
} from '../response/stories-author-per-age-and-gender.ro';
import { FilterDto } from '../../common/dto/filter.dto';
import { filterSchema } from '../../common/request/schema/filter.schema';
import { ValidationPipe, COMMENT_STATUS } from '@ourloop/shared';
import { StoriesCodeDatesRO } from '../response/stories-code-dates.ro';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { updateThematicFilters } from '../../common/helpers';
import { timelineForStoriesAndRetriesSchema } from '../request/schema/timeline-for-stories-and-retries-schema';
import { timelineForStoriesAndRetriesMapper } from '../mapper/timeline-for-stories-and-retries.mapper';
import { CountRO } from '../response/count.ro';
import { OrganisationService } from '../../organisation/organisation.service';
import { summaryMapper } from '../mapper/summary.mapper';
import { SummaryRO } from '../response/summary.ro';
import { MetabaseOpenFeedbackLinkRO } from '../response/metabase-link';
import { LanguageService } from '../../language/language.service';
import { CountryService } from '../../country/service/country.service';
import { StoryService } from '../../story/service/story.service';
import { StoryFilterAndOrderDto } from '../../story/request/dto/story-filter-and-order.dto';
import { CommentService } from '../../comment/service/comment.service';
import { AuthGuard } from '@nestjs/passport';
import { FilterCasesDto } from '../request/dto/filter.dto';
import { mergedFilterSchema } from '../request/schema/filter.schema';
import { MetabaseFilterService } from '../service/metabase-filter.service';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Statistic - Open')
@Controller('open-story')
@UseInterceptors(CacheInterceptor)
export class OpenStoryController {
  constructor(
    private readonly openStoryService: OpenStoryService,
    private readonly thematicService: ThematicService,
    private readonly organisationService: OrganisationService,
    private readonly languageService: LanguageService,
    private readonly countryService: CountryService,
    private readonly storyService: StoryService,
    private readonly commentService: CommentService,
    private readonly metabaseFilterService: MetabaseFilterService,
  ) {}

  @Get('/signed-embedd-url')
  @ApiOperation({
    summary: 'Get the Metabase open feedback dashboard embedd url',
  })
  @ApiResponse({ status: 200, type: MetabaseOpenFeedbackLinkRO })
  async getSignedMetabaseURL(
    @Query(new ValidationPipe(mergedFilterSchema))
    filters: FilterCasesDto & FilterDto,
  ): Promise<MetabaseOpenFeedbackLinkRO> {
    const newFilters =
      await this.metabaseFilterService.mapFiltersToMetabase(filters);
    
    const result = {
      url: await this.openStoryService.getSignedMetabaseURL(newFilters),
    };
    
    return result;
  }

  @Get('/summary')
  @ApiOperation({
    summary: 'Get number of stories, comments, organisations and languages',
  })
  @ApiResponse({ status: 200, type: StoriesTypeAndRepliesRO })
  async getSummary(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<SummaryRO> {
    const country = await this.countryService.findByCode(filters.country);
    const [organisations, languages, storyIds, commentIds] = await Promise.all([
      this.organisationService.findAll(),
      this.languageService.getVisibleLanguages(),
      this.storyService.findStoryIdsByParams(
        {
          countryIds: country ? [country.id] : undefined,
        } as StoryFilterAndOrderDto,
        false,
      ),
      this.commentService.findCommentIdsByCountryAndStatus(
        country?.id,
        COMMENT_STATUS.PUBLISHED,
      ),
    ]);

    return summaryMapper({ organisations, languages, storyIds, commentIds });
  }

  @Get('/stories-type-and-replies')
  @ApiOperation({ summary: 'Get statistics for story type and replies' })
  @ApiResponse({ status: 200, type: StoriesTypeAndRepliesRO })
  async getStoriesTypeAndReplies(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<StoriesTypeAndRepliesRO> {
    return this.openStoryService.getDataForStoriesTypeAndReplies(filters);
  }

  @Get('/stories-by-disabilities')
  @ApiOperation({
    summary: 'Get statistics for stories divided by disabilities',
  })
  @ApiResponse({
    status: 200,
    type: StoriesDividedByDisabilityRO,
    isArray: true,
  })
  async getStoriesDividedByDisabilities(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<StoriesDividedByDisabilityRO[]> {
    return this.openStoryService.getStoriesDividedByDisabilities(filters);
  }

  @Get('/average-response-time-per-story-type')
  @ApiOperation({
    summary: 'Get statistics average response time per story type',
  })
  @ApiResponse({
    status: 200,
    type: AvgResponseTimePerStoryTypeRO,
    isArray: true,
  })
  async getAvgResponseTimePerStoryType(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<AvgResponseTimePerStoryTypeRO[]> {
    return this.openStoryService.getAvgResponseTimePerStoryType(filters);
  }

  @Get('/stories-authors-age-gender')
  @ApiOperation({
    summary:
      'Get statistics stories authors per age and gender divided by story type',
  })
  @ApiResponse({
    status: 200,
    type: StoriesAuthorPerAgeAndGenderRO,
    isArray: true,
  })
  async getStoriesAuthorPerAgeAndGender(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<StoriesAuthorPerAgeAndGenderRO> {
    const age = await this.openStoryService.getStoriesAuthorPerAge(filters);

    const gender =
      await this.openStoryService.getStoriesAuthorPerGender(filters);

    return { age, gender };
  }

  @Get('/stories-and-replies-grouped-by-category')
  @ApiOperation({
    summary: 'Get statistics for stories and replies by category',
  })
  @ApiResponse({
    status: 200,
    type: StoriesAndRepliesGroupedByCategoryRO,
    isArray: true,
  })
  async getStoriesAndRepliesGroupedByCategory(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<StoriesAndRepliesGroupedByCategoryRO[]> {
    return this.openStoryService.getStoriesAndRepliesGroupedByCategoryAndType(
      filters,
    );
  }

  @Get('/stories-per-thematic-area')
  @ApiOperation({
    summary: 'Get statistics stories per thematic area divided by story type',
  })
  @ApiResponse({
    status: 200,
    type: StoriesCodeValuesRO,
    isArray: true,
  })
  async getStoriesPerThematicArea(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<StoriesCodeValuesRO[]> {
    return this.openStoryService.getStoriesPerThematicArea(filters);
  }

  @Get('/timeline-for-stories-and-retries')
  @ApiOperation({
    summary: 'Get timeline for stories and retries',
  })
  @ApiResponse({
    status: 200,
    type: StoriesCodeDatesRO,
    isArray: true,
  })
  async getTimelineForStoriesAndRetries(
    @Query(new ValidationPipe(timelineForStoriesAndRetriesSchema))
    filters: FilterDto,
  ): Promise<StoriesCodeDatesRO[]> {
    filters = (await updateThematicFilters(
      filters,
      this.thematicService,
    )) as FilterDto;

    const categories = await this.openStoryService.getFilteredCategories(
      filters,
      { order: 'ASC' },
    );
    const noSensitiveStoriesWithCategoryByPeriod =
      await this.openStoryService.getNoSensitiveStoriesWithCategoryByPeriod(
        filters,
      );
    const sensitiveStoriesByPeriod =
      await this.openStoryService.getSensitiveStoriesByPeriod(filters);
    const commentsByPeriod =
      await this.openStoryService.getCommentsByPeriod(filters);
    return timelineForStoriesAndRetriesMapper(
      filters,
      categories,
      noSensitiveStoriesWithCategoryByPeriod,
      sensitiveStoriesByPeriod,
      commentsByPeriod,
    );
  }

  @Get('/open-stories-count')
  @ApiOperation({
    summary: 'Get Count of open stories',
  })
  @ApiResponse({
    status: 200,
    type: CountRO,
  })
  async getOpenStoriesCount(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<CountRO> {
    return this.openStoryService.getCountOfStories(filters);
  }
}
