import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationMeta } from '../../common/type/pagination-meta.type';

@Expose()
export class PaginationRO implements PaginationMeta {
  @ApiProperty({ type: Number })
  itemCount?: number;

  @ApiProperty({ type: Number })
  totalItems: number;

  @ApiProperty({ type: Number })
  itemsPerPage: number;

  @ApiProperty({ type: Number })
  totalPages: number;

  @ApiProperty({ type: Number })
  currentPage: number;
}
