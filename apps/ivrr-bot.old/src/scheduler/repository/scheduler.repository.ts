import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { SchedulerEntity } from '../entity/scheduler.entity';

@EntityRepository(SchedulerEntity)
export class SchedulerRepository extends Repository<SchedulerEntity> {}
