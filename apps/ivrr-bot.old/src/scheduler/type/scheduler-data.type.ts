import { SchedulerEntity } from '../../scheduler/entity/scheduler.entity';

export type SchedulerData = Partial<SchedulerEntity> & {
  destinationNumber?: string;
};
