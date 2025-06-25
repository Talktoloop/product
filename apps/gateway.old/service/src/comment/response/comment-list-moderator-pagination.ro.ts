import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CommentListModeratorRO } from './comment-list-moderator.ro';
import { PaginationRO } from '../../common/response/pagination.ro';

@Exclude()
export class CommentListModeratorPaginationRO {
  @Expose()
  @ApiProperty({ type: PaginationRO })
  meta: PaginationRO;

  @Expose()
  @ApiProperty({ type: CommentListModeratorRO, isArray: true })
  items: CommentListModeratorRO[];
}
