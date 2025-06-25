import { Repository, In, SelectQueryBuilder } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { Logger, BadRequestException } from '@nestjs/common';
import { GET_ADMINISTRATIVE_DATA_FAILED, CustomError } from '@ourloop/shared';
import { StoryAdministrativeDataEntity } from '../../story/entity/story-administrative-data.entity';
import { AdministrativeDataWithDetails } from '../type/administrative-data-with-details.type';
import { STORY_STATUS } from '@ourloop/shared';

@EntityRepository(CountryAdministrativeDataEntity)
export class CountryAdministrativeDataRepository extends Repository<CountryAdministrativeDataEntity> {
  private readonly logger = new Logger(
    CountryAdministrativeDataRepository.name,
  );

  async findById(
    id: number,
    relations: string[] = [],
  ): Promise<CountryAdministrativeDataEntity> {
    if (!id) return;

    return this.findOne({
      where: { id },
      relations: relations ?? [],
    });
  }

  async findByIds(
    ids: number[],
    relations: string[] = [],
  ): Promise<CountryAdministrativeDataEntity[]> {
    return this.find({ where: { id: In(ids) }, relations: relations ?? [] });
  }

  async findAdministrativeDataByIdOrFail(
    id: number,
    relations: string[] = [],
  ): Promise<CountryAdministrativeDataEntity> {
    return this.findOneOrFail({
      where: { id },
      relations: relations ?? [],
    }).catch((error) => {
      throw new CustomError(GET_ADMINISTRATIVE_DATA_FAILED, {
        error: error?.message,
      });
    });
  }

  getNumberOfStoriesByAdministrationDataParentId(
    parentId: number,
  ): Promise<number> {
    return this.createQueryBuilder('administrativeData')
      .select('story.id')
      .where('administrativeData.parentId = :parentId', { parentId })
      .innerJoin(
        'administrativeData.storyAdministrativeData',
        'storyAdministrativeData',
      )
      .innerJoin(
        'storyAdministrativeData.story',
        'story',
        'story.status = :status',
        {
          status: STORY_STATUS.PUBLISHED,
        },
      )
      .execute()
      .then((result) => result.length)
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
      });
  }

  getNumberOfStories(
    subQuery: SelectQueryBuilder<StoryAdministrativeDataEntity>,
  ): SelectQueryBuilder<StoryAdministrativeDataEntity> {
    return subQuery
      .select('COUNT(*)')
      .from(StoryAdministrativeDataEntity, 'saa')
      .where('saa.administrative_area_id = administrativeData.id')
      .innerJoin('saa.story', 'story', 'story.status = :status', {
        status: STORY_STATUS.PUBLISHED,
      });
  }

  async findByCountryIdAndIds(
    ids: number[],
    countryId: number,
    onlyWithStory: boolean = false,
  ): Promise<Array<AdministrativeDataWithDetails>> {
    const query = this.createQueryBuilder('administrativeData')
      .select('administrativeData.id', 'id')
      .addSelect('administrativeData.parent_id', 'parentId')
      .addSelect('administrativeData.has_child', 'hasChild')
      .addSelect('names.name', 'name')
      .addSelect('names.language_id', 'languageId')
      .addSelect(
        'country.default_language_id_for_administrative_data',
        'defaultLanguageIdForAdministrativeData',
      )
      .addSelect(
        (subQuery) => this.getNumberOfStories(subQuery),
        'numberOfStories',
      )
      .leftJoinAndSelect('administrativeData.names', 'names')
      .leftJoinAndSelect('administrativeData.country', 'country')
      .where('administrativeData.countryId = :countryId', {
        countryId,
      })
      .andWhere('administrativeData.id IN (:ids)', {
        ids,
      });

    if (onlyWithStory) {
      query
        .innerJoin(
          'administrativeData.storyAdministrativeData',
          'storyAdministrativeData',
        )
        .innerJoin(
          'storyAdministrativeData.story',
          'story',
          'story.status = :status',
          {
            status: STORY_STATUS.PUBLISHED,
          },
        );
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
    });
  }

  async findByIdsWithRelations(
    ids: number[],
    relations: string[],
  ): Promise<CountryAdministrativeDataEntity[]> {
    return this.find({
      where: {
        id: In(ids),
      },
      relations,
    });
  }

  async getAdministrativeDataWithNumberOfStories(
    countryId: number,
    parentId: number,
  ): Promise<Array<AdministrativeDataWithDetails>> {
    const query = this.createQueryBuilder('administrativeData')
      .select('administrativeData.id', 'id')
      .addSelect('names.name', 'name')
      .addSelect(
        'country.default_language_id_for_administrative_data',
        'defaultLanguageIdForAdministrativeData',
      )
      .addSelect('names.language_id', 'languageId')
      .addSelect('administrativeData.has_child', 'hasChild')
      .addSelect(
        (subQuery) => this.getNumberOfStories(subQuery),
        'numberOfStories',
      )
      .leftJoinAndSelect('administrativeData.names', 'names')
      .leftJoinAndSelect('administrativeData.country', 'country')
      .where('administrativeData.countryId = :countryId', {
        countryId,
      });

    if (parentId) {
      query.andWhere('administrativeData.parentId = :parentId', {
        parentId,
      });
    } else {
      query.andWhere('administrativeData.parentId is null');
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
    });
  }
}
