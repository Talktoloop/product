import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { StoryAdministrativeDataEntity } from '../entity/story-administrative-data.entity';
import { Logger, BadRequestException } from '@nestjs/common';
import { GET_ADMINISTRATIVE_DATA_FAILED } from '@ourloop/shared';
import { AdministrativeDataToExport } from '../type/administrative-data-to-export.type';

@EntityRepository(StoryAdministrativeDataEntity)
export class StoryAdministrativeDataRepository extends Repository<StoryAdministrativeDataEntity> {
  private readonly logger = new Logger(StoryAdministrativeDataRepository.name);

  async findByStoryId(
    storyId: string,
    relations: string[] = [],
  ): Promise<StoryAdministrativeDataEntity[]> {
    return this.find({
      where: { storyId },
      relations: relations ?? [],
    });
  }

  async findAdministrativeDataToExport(): Promise<
    AdministrativeDataToExport[]
  > {
    return this.createQueryBuilder('storyAdministrativeData')
      .select('storyAdministrativeData.story_id', 'storyId')
      .addSelect('administrativeData.id', 'id')
      .addSelect('administrativeData.level', 'level')
      .addSelect('names.name', 'name')
      .addSelect('names.languageId', 'languageId')
      .innerJoin(
        'storyAdministrativeData.administrativeData',
        'administrativeData',
        'administrativeData.id = storyAdministrativeData.administrative_area_id',
      )
      .innerJoin(
        'administrativeData.names',
        'names',
        'names.administrativeAreaId = administrativeData.id',
      )

      .execute()
      .catch((error) => {
        this.logger.error(error);
        throw new BadRequestException(GET_ADMINISTRATIVE_DATA_FAILED);
      });
  }
}
