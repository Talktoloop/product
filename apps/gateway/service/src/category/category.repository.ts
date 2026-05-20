import { Repository, In } from 'typeorm';
import config from '../config/typeorm';
import { EntityRepository } from '../database/database.decorator';
import { CategoryEntity } from './entity/category.entity';
import { CustomError, CATEGORY_NOT_FOUND, STORY_STATUS } from '@ourloop/shared';
import { FilterDto } from '../common/dto/filter.dto';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  getConnection,
} from '../common/helpers';
import { CountId } from '../statistic/interfaces/count-id.interface';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {
  async findAll(): Promise<CategoryEntity[]> {
    return this.createQueryBuilder('category').select('category').getMany();
  }

  findByIds(
    ids: string[],
    order: Record<string, string> = { order: 'ASC' },
  ): Promise<CategoryEntity[]> {
    return this.find({
      where: { id: In(ids) },
      order,
    });
  }

  async findCounts(filters?: FilterDto): Promise<CountId[]> {
    const connection = await getConnection(config);

    let query = connection
      .createQueryBuilder()
      .from('category', 'type')
      .addSelect('type.id', 'id')
      .addSelect('COUNT(DISTINCT story.id)', 'count')
      .leftJoin('story_category', 'sc', 'sc.category_id = type.id')
      .leftJoin('story', 'story', 'story.id = sc.story_id')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .groupBy('type.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(
        filters,
        addFilterJoins(query, ['story.categories']),
      );
    }

    return query.execute();
  }

  async findByIdOrFail(id: number): Promise<CategoryEntity> {
    if (!id) {
      throw new CustomError(CATEGORY_NOT_FOUND, {
        error: 'Category ID does not exist',
      });
    }

    return this.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new CustomError(CATEGORY_NOT_FOUND, {
          error: 'Category ID does not exist',
        });
      }

      return data;
    });
  }
}
