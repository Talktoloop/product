type StringOrNumber = string | number;
import { CHANNEL_CONSTANTS } from '../constant/channel.constant';
export declare class FilterDto {
    country?: string;
    type?: StringOrNumber;
    age?: StringOrNumber;
    gender?: StringOrNumber;
    difficulty?: StringOrNumber;
    minority?: StringOrNumber;
    organisation?: StringOrNumber;
    thematic?: StringOrNumber;
    channel?: CHANNEL_CONSTANTS;
    from: string;
    to: string;
    regionId?: string;
    thematicAreaToFiltration?: Record<string, unknown>;
    searchTerm?: string;
    repliedTo?: StringOrNumber;
}
export {};
