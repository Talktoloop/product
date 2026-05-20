import { SchedulerInterface } from "../interfaces/scheduler.interface";

export type SchedulerData = Partial<SchedulerInterface> & {
  destinationNumber?: string;
};
