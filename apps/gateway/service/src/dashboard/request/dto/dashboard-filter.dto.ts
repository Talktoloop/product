import { ApiProperty } from '@nestjs/swagger';
import { CHANNEL_CONSTANTS } from '../../../common/constant/channel.constant';
import { LANGUAGES_CONSTANTS } from '../../../common/constant/languages.constants';

export class DashboardFilterDTO {
  @ApiProperty({ enum: LANGUAGES_CONSTANTS, required: false })
  language?: string;

  @ApiProperty({ type: 'string', required: false })
  country?: string;

  @ApiProperty({ type: CHANNEL_CONSTANTS, required: false })
  channel?: CHANNEL_CONSTANTS;

  @ApiProperty({ required: false, type: Date })
  from?: string;

  @ApiProperty({ required: false, type: Date })
  to?: string;

  @ApiProperty({ required: false, type: String })
  searchTerm?: string;
}
