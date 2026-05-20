import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../../category/entity/category.entity';
import { CategoryService } from '../../category/category.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { StoriesDividedByDisabilityRO } from '../response/stories-divided-by-disability.ro';
import { StoriesTypeAndRepliesRO } from '../response/stories-type-and-replies.ro';
import { OpenStoryForCommentRepository } from '../repository/open-story-for-comment.repository';
import { OpenStoryForCategoryRepository } from '../repository/open-story-for-category.repository';
import { OpenStoryForStoryRepository } from '../repository/open-story-for-story.repository';
import { StoriesAndRepliesGroupedByCategoryRO } from '../response/stories-and-replies-grouped-by-category.ro';
import { TimeToResponse } from '../interfaces/time-to-response.interface';
import { AGE_VALUE, GENDER_VALUE } from '../../common/types';
import { STORY_STATUS } from '@ourloop/shared';
import { FilterDto } from '../../common/dto/filter.dto';
import { updateThematicFilters, getAverageValue, extractModuleSpecificFilterParameters } from '../../common/helpers';
import { StoriesCodeValuesRO } from '../response/stories-author-per-age-and-gender.ro';
import { CodeAverage } from '../interfaces/code-average.interface';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import { QuantityPerMonth } from '../interfaces/quantity-per-month.interface';
import { CaseRepository } from '../repository/case.repository';
import { CountRO } from '../response/count.ro';
import { ThematicIdCount } from '../interfaces/thematic-id-count.interface';
import { CategoryRepository } from '../../category/category.repository';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenStoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly openStoryForStoryRepository: OpenStoryForStoryRepository,
    private readonly openStoryForCommentRepository: OpenStoryForCommentRepository,
    private readonly openStoryForCategoryRepository: OpenStoryForCategoryRepository,
    private readonly difficultyService: DifficultyService,
    private readonly categoryService: CategoryService,
    private readonly thematicService: ThematicService,
    private readonly caseRepository: CaseRepository,
    private readonly config: ConfigService,
  ) {}

  async getSignedMetabaseURL(filters: any) {
    const METABASE_SITE_URL = this.config.get<string>('metabase_site_url');
    const METABASE_SECRET_KEY = this.config.get('metabase_secret_key');

    const filteredParams = extractModuleSpecificFilterParameters(filters, [
      'age_group',
      'channel',
      'country',
      'disability',
      'organization',
      'feedback_type',
      'gender_group',
      'minority_group',
      'thematic_area',
      'gender_group',
      'location',
      'replied_to',
      'submission_date',
      'original_feedback_language',
      'replies_by_specific_organisation',
      'vulnerability_factors'
    ]);

    const payload = {
      resource: { dashboard: 2 },
      params: filteredParams,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
    };
    const token = jwt.sign(payload, METABASE_SECRET_KEY);

    const iframeUrl =
      METABASE_SITE_URL +
      '/embed/dashboard/' +
      token +
      '#bordered=false&titled=false';

    return iframeUrl;
  }

  async getCountOfStories(filters: FilterDto): Promise<CountRO> {
    filters = await updateThematicFilters(filters, this.thematicService);
    const [count] =
      await this.openStoryForStoryRepository.findCountOfStoriesByFilter(
        filters,
      );
    return count;
  }

  async getStoriesPerThematicArea(
    filters?: FilterDto,
  ): Promise<StoriesCodeValuesRO[]> {
    const storyTypes = await this.categoryService.findAll({ order: 'ASC' });
    filters = await updateThematicFilters(filters, this.thematicService);

    const thematicElements = (await this.thematicService.findAll()).map(
      ({ code, id }: ThematicEntity) => {
        return {
          code,
          id,
        };
      },
    );

    let storyTypeCount: ThematicIdCount[];

    const data = await Promise.all(
      storyTypes.map(async ({ code, id }: CategoryEntity) => {
        storyTypeCount =
          await this.openStoryForStoryRepository.getStoriesPerThematicArea(
            filters,
            STORY_STATUS.PUBLISHED,
            id,
          );
        let response = {} as StoriesCodeValuesRO;
        const values = [] as number[];

        thematicElements.forEach((element) => {
          values.push(
            storyTypeCount.find(({ thematicId }) => thematicId === element.id)
              ?.count ?? 0,
          );
        });

        response = { ...response, ...{ code, values } };
        return response;
      }),
    );

    storyTypeCount =
      await this.openStoryForStoryRepository.getStoriesPerThematicArea(
        filters,
        STORY_STATUS.SENT_TO_CASE_MANAGER,
      );

    const values = [] as number[];

    thematicElements.forEach((element) => {
      values.push(
        storyTypeCount.find(({ thematicId }) => thematicId === element.id)
          ?.count ?? 0,
      );
    });

    data.push({
      code: 'sensitive',
      values,
    });

    return data;
  }

  async getStoriesAuthorPerAge(
    filters?: FilterDto,
  ): Promise<StoriesCodeValuesRO[]> {
    const storyTypes = await this.categoryService.findAll({ order: 'ASC' });

    filters = await updateThematicFilters(filters, this.thematicService);

    const countOfStoriesForStoryTypeDividedByAge =
      await this.openStoryForStoryRepository.getCountOfSensitiveStoriesDividedByAge(
        filters,
      );

    const response = await Promise.all(
      storyTypes.map(async ({ code, id }: CategoryEntity) => {
        const storyTypeCountsAndAges =
          await this.openStoryForStoryRepository.getCountOfStoriesForStoryTypeDividedByAge(
            id,
            filters,
          );
        let response = {} as StoriesCodeValuesRO;
        const values = [] as number[];
        for (const ageEnum in AGE_VALUE) {
          values.push(
            storyTypeCountsAndAges.find(({ age }) => age === AGE_VALUE[ageEnum])
              ?.count ?? 0,
          );
        }
        response = { ...response, ...{ code, values } };
        return response;
      }),
    );

    response.push({
      code: 'sensitive',
      values: Object.values(AGE_VALUE).map(
        (value) =>
          countOfStoriesForStoryTypeDividedByAge.find(
            ({ age }) => age === value,
          )?.count ?? 0,
      ),
    });

    return response;
  }

  async getStoriesAuthorPerGender(
    filters?: FilterDto,
  ): Promise<StoriesCodeValuesRO[]> {
    const storyTypes = await this.categoryService.findAll({ order: 'ASC' });

    filters = await updateThematicFilters(filters, this.thematicService);

    const countOfSensitiveStoriesDividedByGender =
      await this.openStoryForStoryRepository.getCountOfSensitiveStoriesDividedByGender(
        filters,
      );

    const response = await Promise.all(
      storyTypes.map(async ({ code, id }: CategoryEntity) => {
        const storyTypeCountsAndGender =
          await this.openStoryForStoryRepository.getCountOfStoriesForStoryTypeDividedByGender(
            id,
            filters,
          );

        let response = {} as StoriesCodeValuesRO;
        const values = [] as number[];
        for (const genderEnum in GENDER_VALUE) {
          values.push(
            storyTypeCountsAndGender.find(
              ({ gender }) => gender === GENDER_VALUE[genderEnum],
            )?.count ?? 0,
          );
        }

        response = { ...response, ...{ code, values } };

        return response;
      }),
    );

    response.push({
      code: 'sensitive',
      values: Object.values(GENDER_VALUE).map(
        (value) =>
          countOfSensitiveStoriesDividedByGender.find(
            ({ gender }) => gender === value,
          )?.count ?? 0,
      ),
    });

    return response;
  }

  calculateAvg(data: TimeToResponse[]): number {
    return Math.round(
      data
        .filter((item) => item.time >= 0)
        .reduce((acc: number, item) => {
          acc = acc + item.time;
          return acc;
        }, 0) /
        data.length /
        60,
    );
  }

  async getAvgResponseTimePerStoryType(
    filters?: FilterDto,
  ): Promise<CodeAverage[]> {
    const [storyTypes, averageProcessingTime] = await Promise.all([
      filters.type
        ? this.categoryRepository.findByIds(filters.type.toString().split(','))
        : this.categoryService.findAll({ order: 'ASC' }),
      this.caseRepository.getAvgTakenTime(),
    ]);

    filters = await updateThematicFilters(filters, this.thematicService);

    const data = await Promise.all(
      storyTypes.map(async ({ code, id }: CategoryEntity) => {
        const storyTypeTimes =
          await this.openStoryForStoryRepository.getAvgStoryResponseTimePerStoryType(
            id,
            filters,
          );

        return {
          code,
          average: this.calculateAvg(storyTypeTimes),
        };
      }),
    );

    const { average } = getAverageValue(
      averageProcessingTime.map((item) => ({
        average: item.averageHours,
        count: item.count,
      })),
    );

    if (!filters.type) {
      data.push({
        code: 'sensitive',
        average,
      });
    }

    return data;
  }
  async getDataForStoriesTypeAndReplies(
    filters?: FilterDto,
  ): Promise<StoriesTypeAndRepliesRO> {
    filters = await updateThematicFilters(filters, this.thematicService);

    const total =
      await this.openStoryForStoryRepository.getStoriesTotal(filters);

    let percentOfStoriesWithResponded = 0;
    let percentOfStoriesWithOrganisationResponded = 0;

    if (total > 0) {
      percentOfStoriesWithResponded = Math.round(
        ((await this.openStoryForStoryRepository.getCountOfStoriesWithResponds(
          filters,
        )) /
          total) *
          100,
      );

      percentOfStoriesWithOrganisationResponded = Math.round(
        ((await this.openStoryForStoryRepository.getCountOfStoriesWithOrganisationResponds(
          filters,
        )) /
          total) *
          100,
      );
    }

    const organisationIds =
      await this.openStoryForStoryRepository.getUniqueTaggedOrganisationIds(
        filters,
      );

    const uniqueNotAnonymousAuthors =
      await this.openStoryForStoryRepository.getUniqueNotAnonymousStoryAuthors(
        filters,
      );

    const numberOfAnonymousStoryAuthors =
      await this.openStoryForStoryRepository.getNumberOfAnonymousStoryAuthors(
        filters,
      );

    const countOfResponses =
      await this.openStoryForCommentRepository.getTotalResponsesCount(filters);

    const timesForResponse =
      await this.openStoryForStoryRepository.getAvgResponseTime(filters);

    const avgResponseTime =
      timesForResponse.length > 0 ? this.calculateAvg(timesForResponse) : 0;

    const countOfFeedbacks =
      await this.openStoryForStoryRepository.getStoriesTotal(filters);

    return {
      percentOfStoriesWithResponded,
      percentOfStoriesWithOrganisationResponded,
      countOfTaggedOrganisation: organisationIds.length,
      uniqueAuthors:
        uniqueNotAnonymousAuthors.length + numberOfAnonymousStoryAuthors,
      countOfFeedbacks,
      avgResponseTime,
      countOfResponses,
    };
  }

  async getStoriesDividedByDisabilities(
    filters?: FilterDto,
  ): Promise<StoriesDividedByDisabilityRO[]> {
    filters = await updateThematicFilters(filters, this.thematicService);
    const storiesDisabilities =
      await this.openStoryForStoryRepository.getStoriesDividedByDisabilities(
        filters,
      );
    const total =
      await this.openStoryForStoryRepository.getStoriesTotal(filters);
    const disabilities = await this.difficultyService.findAll();
    const result = [] as StoriesDividedByDisabilityRO[];
    disabilities.forEach((disability) => {
      let percent = 0;

      const count =
        storiesDisabilities.find(({ code }) => code === disability.code)
          ?.count ?? 0;

      if (total > 0) {
        percent = Math.round((count / total) * 100);
      }
      result.push({
        code: disability.code,
        percent,
        count,
      });
    });

    return result;
  }

  async getStoriesAndRepliesGroupedByCategoryAndType(
    filters?: FilterDto,
  ): Promise<StoriesAndRepliesGroupedByCategoryRO[]> {
    filters = await updateThematicFilters(filters, this.thematicService);

    const categories = await this.categoryService.findAll({ order: 'ASC' });
    const storiesAndRepliesGroupedByCategory =
      await this.openStoryForCategoryRepository.getStoriesAndRepliesGroupedByCategory(
        filters,
      );
    const numberOfSensitiveStories =
      await this.openStoryForStoryRepository.getNumberOfSensitiveStories(
        filters,
      );
    const numberOfCommunityRepliesForSenstiveStories =
      await this.openStoryForCommentRepository.getNumberOfCommunityRepliesForSenstiveStories(
        filters,
      );
    const numberOfOrganizationRepliesForSenstiveStories =
      await this.openStoryForCommentRepository.getNumberOfOrganizationRepliesForSenstiveStories(
        filters,
      );

    const response = categories.map((category) => {
      const item = storiesAndRepliesGroupedByCategory.find(
        (row) => row.code === category.code,
      );

      if (item) {
        return {
          code: item.code,
          stories: [item.numberOfStories],
          replies: [
            item.numberOfCommentsFromCommunity,
            item.numberOfCommentsFromOrganizations,
          ],
        };
      }

      return {
        code: category.code,
        stories: [0],
        replies: [0, 0],
      };
    });

    response.push({
      code: 'sensitive',
      stories: [numberOfSensitiveStories],
      replies: [
        numberOfCommunityRepliesForSenstiveStories,
        numberOfOrganizationRepliesForSenstiveStories,
      ],
    });

    return response;
  }

  async getFilteredCategories(
    params: FilterDto,
    order: Record<string, string> = {},
  ): Promise<CategoryEntity[]> {
    const categories = await this.categoryService.findAll(order);
    const categoryIds = params.type
      ? params.type.toString().split(',')
      : undefined;

    return categories.filter(
      (category) =>
        !categoryIds || categoryIds.includes(category.id.toString()),
    );
  }

  async getNoSensitiveStoriesWithCategoryByPeriod(
    filters: FilterDto,
  ): Promise<(QuantityPerMonth & { code: string })[]> {
    return this.openStoryForCategoryRepository.getNoSensitiveStoriesWithCategoryByPeriod(
      filters,
    );
  }

  async getSensitiveStoriesByPeriod(
    filters: FilterDto,
  ): Promise<QuantityPerMonth[]> {
    return this.openStoryForStoryRepository.getSensitiveStoriesByPeriod(
      filters,
    );
  }

  async getCommentsByPeriod(filters: FilterDto): Promise<QuantityPerMonth[]> {
    return this.openStoryForCommentRepository.getCommentsByPeriod(filters);
  }
}
