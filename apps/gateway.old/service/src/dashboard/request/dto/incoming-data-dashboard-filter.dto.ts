import { ApiProperty } from '@nestjs/swagger';
import { getPendingStoryStatuses } from '../../../common/helpers';
import { DashboardFilterDTO } from './dashboard-filter.dto';
import { StoryModeratorOrderEnum } from '../../../common/types';

export class IncomingDataDashboardFilterDTO extends DashboardFilterDTO {
  @ApiProperty({
    enum: [...getPendingStoryStatuses()],
    required: false,
  })
  status?: string;

  @ApiProperty({ required: false, type: Date })
  from: string;

  @ApiProperty({ required: false, type: Date })
  to: string;

  @ApiProperty({ type: Number, required: false })
  durationMin?: number;

  @ApiProperty({ type: Number, required: false })
  durationMax?: number;

  @ApiProperty({ type: Boolean, required: false })
  isSensitive?: boolean;

  order?: StoryModeratorOrderEnum;
}
