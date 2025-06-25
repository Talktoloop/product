import { ApiProperty } from '@nestjs/swagger';
import { LANGUAGES_CONSTANTS } from '../constant/languages.constants';
import { StoryModeratorOrderEnum } from '../types';
import { FilterWithPaginationDto } from './filter-with-pagination.dto';
import { getPendingStoryStatuses } from '../helpers';

export class StoryPaginationWithOrderAndFilterDto extends FilterWithPaginationDto {
  @ApiProperty({ enum: StoryModeratorOrderEnum, required: false })
  order?: StoryModeratorOrderEnum;

  @ApiProperty({ enum: LANGUAGES_CONSTANTS, required: false })
  language?: string;

  @ApiProperty({
    enum: [...getPendingStoryStatuses()],
    required: false,
  })
  status?: string;

  @ApiProperty({ type: 'number', required: false })
  durationMin?: number;

  @ApiProperty({ type: 'number', required: false })
  durationMax?: number;

  @ApiProperty({ type: Boolean, required: false })
  isSensitive?: boolean;
}
