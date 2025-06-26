import { DashboardFilterDTO } from './dashboard-filter.dto';
import { StoryModeratorOrderEnum } from '../../../common/types';
export declare class IncomingDataDashboardFilterDTO extends DashboardFilterDTO {
    status?: string;
    from: string;
    to: string;
    durationMin?: number;
    durationMax?: number;
    isSensitive?: boolean;
    order?: StoryModeratorOrderEnum;
}
