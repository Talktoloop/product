import {
  PlayBlockInterface,
  RecordBlockInterface,
} from '@ourloop/shared/dist/interface';
import { SchedulerData } from '../../scheduler/type/scheduler-data.type';

export interface CreateModeratorCallInterface {
  storyId: string;
  commentId?: string;
  toPhoneNumber: string;
  loopPhoneNumber: string;
  outroAudioFile?: string;
  options?: Record<number, string>;
  callBlocks: (PlayBlockInterface | RecordBlockInterface)[];
  language: string;
  resourceStatus: string;
  schedulerData?: SchedulerData;
}
