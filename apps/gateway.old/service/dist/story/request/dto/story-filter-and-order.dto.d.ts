import { FilterWithPaginationDto } from '../../../common/dto/filter-with-pagination.dto';
import { StoryOrderEnum } from '../../../common/types';
import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';
export declare class StoryFilterAndOrderDto extends FilterWithPaginationDto {
    q?: string;
    regionId?: string;
    order?: StoryOrderEnum;
    repliedTo?: string;
    channelFilter?: (CHANNEL_CONSTANTS | string);
    countryIds?: number[];
    storyIds?: string[];
    withSensitiveStories?: boolean;
    searchTerm?: string;
    storySearchText?: string;
}
