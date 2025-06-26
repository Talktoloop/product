import { IncomingStoriesAndCommentsRO } from './response/incoming-stories-and-comments.ro';
import { OutgoingCommentsRO } from './response/outgoing-comments.ro';
import { DashboardService } from './dashboard.service';
import { DashboardFilterDTO } from './request/dto/dashboard-filter.dto';
import { IncomingDataDashboardFilterDTO } from './request/dto/incoming-data-dashboard-filter.dto';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getNumberOfIncomingStoriesAndComments(params: IncomingDataDashboardFilterDTO): Promise<IncomingStoriesAndCommentsRO>;
    getNumberOfOutgoingComments(params: DashboardFilterDTO): Promise<OutgoingCommentsRO>;
}
