import { Repository } from 'typeorm';
import config from '../../config/typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { DifficultyEntity } from '../entity/difficulty.entity';
import {
  CustomError,
  DIFFICULTY_NOT_FOUND,
  STORY_STATUS,
} from '@ourloop/shared';
import { LexiconRepositoryFactory } from '../factory/repository.factory';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import { FilterDto } from '../../common/dto/filter.dto';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  getConnection,
} from '../../common/helpers';

@EntityRepository(DifficultyEntity)
export class DifficultyRepository
  extends Repository<DifficultyEntity>
  implements LexiconRepositoryFactory
{
  findAll(): Promise<DifficultyEntity[]> {
    return this.find();
  }

  async findByIdOrFail(id: number): Promise<DifficultyEntity> {
    if (!id) {
      throw new CustomError(DIFFICULTY_NOT_FOUND, {
        error: 'Difficulty ID does not exist',
      });
    }

    return this.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new CustomError(DIFFICULTY_NOT_FOUND, {
          error: 'Difficulty ID does not exist',
        });
      }

      return data;
    });
  }

  async findCounts(filters: FilterDto): Promise<CountCodeId[]> {
    const connection = await getConnection(config);

    let query = connection
      .createQueryBuilder()
      .from('difficulty', 'difficulty')
      .addSelect('difficulty.id', 'id')
      .addSelect('COUNT(DISTINCT story.id)', 'count')
      .leftJoin('story_difficulty', 'sd', 'sd.difficulty_id = difficulty.id')
      .leftJoin('story', 'story', 'story.id = sd.story_id')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .groupBy('difficulty.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.difficulties']),
      );
    }

    return query.execute();
  }
}
