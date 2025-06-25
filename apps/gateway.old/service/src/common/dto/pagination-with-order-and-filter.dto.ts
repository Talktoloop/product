import { ApiProperty } from '@nestjs/swagger';
import { OrderEnum } from '../types';
import { FilterWithPaginationDto } from './filter-with-pagination.dto';

export class PaginationWithOrderAndFilterDto extends FilterWithPaginationDto {
  @ApiProperty({ enum: OrderEnum, required: false })
  order?: OrderEnum;
}
