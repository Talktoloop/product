import { ApiProperty } from '@nestjs/swagger';
import { FilterCasesDto } from './filter.dto';

export class FilterCasesWithRequiredPeriodDto extends FilterCasesDto {
  @ApiProperty({ required: true, type: Date })
  from: string;

  @ApiProperty({ required: true, type: Date })
  to: string;
}
