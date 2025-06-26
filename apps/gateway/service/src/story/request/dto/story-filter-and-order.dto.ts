import { ApiProperty } from '@nestjs/swagger';
import { FilterWithPaginationDto } from '../../../common/dto/filter-with-pagination.dto';
import { StoryOrderEnum } from '../../../common/types';
import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';

export class StoryFilterAndOrderDto extends FilterWithPaginationDto {
  @ApiProperty({ type: 'string', required: false })
  q?: string;

  @ApiProperty({ type: 'string', required: false })
  regionId?: string;

  @ApiProperty({ enum: StoryOrderEnum, required: false })
  order?: StoryOrderEnum;

  @ApiProperty({ enum: CHANNEL_CONSTANTS, required: false })
  channelFilter?: (CHANNEL_CONSTANTS | string);

  organisationResponsiveness?: string;
  communityResponsiveness?: string;
  countryIds?: number[];
  storyIds?: string[];
  withSensitiveStories?: boolean;
  searchTerm?: string;
  storySearchText?: string;
}
