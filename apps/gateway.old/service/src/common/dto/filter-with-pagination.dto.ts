import { ApiProperty } from '@nestjs/swagger';
import { FilterDto } from './filter.dto';

export class FilterWithPaginationDto extends FilterDto {
  @ApiProperty({ type: 'number', required: true })
  page: number;

  @ApiProperty({ type: 'number', required: true })
  limit: number;
}
