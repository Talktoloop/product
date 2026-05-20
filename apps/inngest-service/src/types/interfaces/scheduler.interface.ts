import { SourceType } from "../enum/source-type.enum";
import { SchedulerStatus } from "../enum/status.enum";

export interface SchedulerInterface {
    id?: number;
    sourceId: string;
    type: SourceType;
    status: SchedulerStatus;
    lang: string;
    providerNumber: string;
    callId: string;
    time?: Date;
    timezone: number;
    sequenceNumber: number;
}