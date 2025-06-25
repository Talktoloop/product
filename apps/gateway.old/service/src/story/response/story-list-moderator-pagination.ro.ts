import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PaginationRO } from '../../common/response/pagination.ro';
import { StoryListModeratorRO } from './story-list-moderator.ro';

@Exclude()
export class StoryListModeratorPaginationRO {
  @Expose()
  @ApiProperty({ type: PaginationRO })
  meta: PaginationRO;

  @Expose()
  @ApiProperty({ type: StoryListModeratorRO, isArray: true })
  items: StoryListModeratorRO[];
}
