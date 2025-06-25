import { ApiProperty } from '@nestjs/swagger';
import { LANGUAGES_CONSTANTS } from '../constant/languages.constants';
import { PaginationWithOrderAndFilterDto } from './pagination-with-order-and-filter.dto';

export class PaginationWithExtendedFilterDto extends PaginationWithOrderAndFilterDto {
  @ApiProperty({ enum: LANGUAGES_CONSTANTS, required: false })
  language?: string;
}
