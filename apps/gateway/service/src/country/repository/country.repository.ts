import { Repository, Like } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CountryEntity } from '../entity/country.entity';
import { CountryAdministrativeDataEntity } from '../entity/country-administrative-data.entity';
import { StoryEntity } from '../../story/entity/story.entity';
import { Logger, BadRequestException } from '@nestjs/common';
import { GET_COUNTRIES_FAILED, STORY_STATUS } from '@ourloop/shared';
import { CountryWithCounters } from '../type/country-with-counters.type';

@EntityRepository(CountryEntity)
export class CountryRepository extends Repository<CountryEntity> {
  private readonly logger = new Logger(CountryRepository.name);

  async getCountriesWithNumberOfStories(): Promise<CountryWithCounters[]> {
    return this.createQueryBuilder('country')
      .select('country.id', 'id')
      .addSelect('country.prefix', 'prefix')
      .addSelect('country.code', 'code')
      .addSelect((subQuery) => {
        return subQuery
          .select('COUNT(*)')
          .from(StoryEntity, 'story')
          .where('story.country_id = country.id')
          .andWhere('story.status = :status', {
            status: STORY_STATUS.PUBLISHED,
          });
      }, 'numberOfStories')
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(CountryAdministrativeDataEntity, 'administrativeData')
            .where('administrativeData.country_id = country.id'),
        'numberOfAdministrativeDataConnections',
      )
      .orderBy('country.prefix', 'ASC')
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_COUNTRIES_FAILED);
      });
  }

  getCountriesByPhrase(phrase: string): Promise<CountryEntity[]> {
    return this.find({
      where: [{ name: Like(`%${phrase}%`) }, { code: Like(`%${phrase}%`) }],
    });
  }

  async findCountriesToAirtable(): Promise<{ Name: string }[]> {
    const queryBuilder = this.createQueryBuilder('country').select(
      'name',
      'Name',
    );

    return queryBuilder.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_COUNTRIES_FAILED);
    });
  }
}
