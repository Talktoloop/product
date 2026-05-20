import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { CountryAdministrativeDataNameEntity } from '../entity/country-administrative-data-name.entity';
import { Logger, BadRequestException } from '@nestjs/common';
import { GET_ADMINISTRATIVE_DATA_FAILED } from '@ourloop/shared';

@EntityRepository(CountryAdministrativeDataNameEntity)
export class CountryAdministrativeDataNameRepository extends Repository<CountryAdministrativeDataNameEntity> {
  private readonly logger = new Logger(
    CountryAdministrativeDataNameRepository.name,
  );

  async findLanguagesByCountryId(
    countryId: number,
  ): Promise<Array<{ languageId: number }>> {
    return this.createQueryBuilder('administrativeDataName')
      .select('administrativeDataName.language_id', 'languageId')
      .innerJoin(
        'country_administrative_area',
        'administrativeData',
        'administrativeData.id = administrativeDataName.administrative_area_id and administrativeData.country_id = :countryId',
        {
          countryId,
        },
      )
      .groupBy('languageId')
      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
      });
  }

  async findByCountryIdAndPhrase(
    countryId: number,
    phrase: string,
    languageId?: number,
    exactlySame = false,
  ): Promise<Array<{ administrativeAreaId: number }>> {
    const query = this.createQueryBuilder('administrativeDataName')
      .select(
        'administrativeDataName.administrative_area_id',
        'administrativeAreaId',
      )
      .leftJoin(
        'country_administrative_area',
        'administrativeData',
        'administrativeData.id = administrativeDataName.administrative_area_id',
      )
      .where('administrativeData.countryId = :countryId', {
        countryId,
      });

    if (exactlySame) {
      query.andWhere(`administrativeDataName.name LIKE :phrase`, {
        phrase,
      });
    } else {
      query.andWhere(
        'MATCH(administrativeDataName.name) AGAINST(:phrase IN BOOLEAN MODE)',
        {
          phrase: `*${phrase}*`,
        },
      );
    }

    if (languageId) {
      query.andWhere('administrativeDataName.languageId = :languageId', {
        languageId,
      });
    }

    return query.execute().catch((error) => {
      this.logger.error(error);
      throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
    });
  }
}
