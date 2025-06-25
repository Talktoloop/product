import { Injectable } from '@nestjs/common';
import { AGE_VALUE } from '../../common/types';
import { plainToClass } from 'class-transformer';
import { IdWithCounterRO } from '../response/id-with-counter.ro';
import { FilterDto } from '../../common/dto/filter.dto';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import config from '../../config/typeorm';
import {
  addFilterCondition,
  addFilterJoins,
  isEmpty,
  getConnection,
} from '../../common/helpers';
import { STORY_STATUS } from '@ourloop/shared';

@Injectable()
export class AgeService {
  findAll(): IdWithCounterRO[] {
    return Object.values(AGE_VALUE)
      .sort()
      .map((value) => plainToClass(IdWithCounterRO, { id: value }));
  }

  async findAllCounts(filters?: FilterDto): Promise<IdWithCounterRO[]> {
    const ages = await this.findAll();
    const counts = await this.findCounts(filters);
    const data = [] as unknown as IdWithCounterRO[];
    ages.forEach((age) => {
      data.push({
        id: age.id,
        count: counts.find((count) => count.id === age.id)?.count ?? 0,
      });
    });

    return data;
  }

  async findCounts(filters: FilterDto): Promise<CountCodeId[]> {
    const connection = await getConnection(config);

    let query = connection
      .createQueryBuilder()
      .select('recipient.ageByModerator', 'id')
      .addSelect('COUNT(DISTINCT story.id)', 'count')
      .from('story', 'story')
      .leftJoin('story.recipient', 'recipient')
      .where('story.status = :status', { status: STORY_STATUS.PUBLISHED })
      .groupBy('recipient.ageByModerator');
    if (!isEmpty(filters)) {
      query = addFilterCondition(filters, addFilterJoins(query));
    }

    return query.execute();
  }
}
