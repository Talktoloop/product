import { In, Repository } from 'typeorm';
import config from '../../config/typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { ThematicEntity } from '../entity/thematic.entity';
import { CustomError, THEMATIC_NOT_FOUND, STORY_STATUS } from '@ourloop/shared';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  getConnection,
} from '../../common/helpers';
import { FilterDto } from '../../common/dto/filter.dto';

@EntityRepository(ThematicEntity)
export class ThematicRepository extends Repository<ThematicEntity> {
  async findCounts(filters?: FilterDto): Promise<CountCodeId[]> {
    const connection = await getConnection(config);

    let query = connection
      .createQueryBuilder()
      .from('thematic', 'thematic')
      .addSelect('thematic.id', 'id')
      .addSelect('COUNT(DISTINCT story.id)', 'count')
      .leftJoin('story_thematic', 'st', 'st.thematic_id = thematic.id')
      .leftJoin('story', 'story', 'story.id = st.story_id')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .groupBy('thematic.id');

    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
      if (filters?.thematic) {
        const key = 'thematic';
        query = query.andWhere(`thematic.id IN (:...${key})`, {
          [key]: filters.thematic.toString().split(','),
        });
      }
    }
    return query.execute();
  }
  findAll(): Promise<ThematicEntity[]> {
    return this.createQueryBuilder('thematic')
      .leftJoinAndSelect('thematic.children', 'children')
      .where('thematic.parent_thematic_id IS NULL')
      .orderBy('thematic.order', 'ASC')
      .addOrderBy('children.order', 'ASC')
      .getMany();
  }

  async findByIdOrFail(id: number): Promise<ThematicEntity> {
    if (!id) {
      throw new CustomError(THEMATIC_NOT_FOUND, {
        error: 'Thematic ID does not exist',
      });
    }

    return this.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new CustomError(THEMATIC_NOT_FOUND, {
          error: 'Thematic ID does not exist',
        });
      }

      return data;
    });
  }

  findByIds(ids: number[]): Promise<ThematicEntity[]> {
    return this.find({
      where: { id: In(ids) },
    });
  }
}
