import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PaginationRO } from '../../common/response/pagination.ro';
import { StoryListRO } from './story-list.ro';

@Exclude()
export class StoryListPaginationRO {
  @Expose()
  @ApiProperty({ type: PaginationRO })
  meta: PaginationRO;

  @Expose()
  @ApiProperty({ type: StoryListRO, isArray: true })
  items: any[];
}
