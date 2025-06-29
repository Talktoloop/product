import { SchedulerData } from '../../scheduler/type/scheduler-data.type';

export interface FinishGatherBlockInterface {
  digitZero: string;
  digitOne?: string;
  digitTwo?: string;
  digitThree?: string;
  digitFour?: string;
  schedullerCallData: SchedulerData;
}
