import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';
export declare class DashboardFilterDTO {
    language?: string;
    country?: string;
    channel?: CHANNEL_CONSTANTS;
    from?: string;
    to?: string;
    searchTerm?: string;
}
