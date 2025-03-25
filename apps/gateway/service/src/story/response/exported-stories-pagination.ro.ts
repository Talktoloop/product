import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PaginationRO } from '../../common/response/pagination.ro';
import { ExportedStoryRO } from './exported-story.ro';

@Exclude()
export class ExportedStoriesWithPaginationRO {
  @Expose()
  @ApiProperty({ type: PaginationRO })
  meta: PaginationRO;

  @Expose()
  @ApiProperty({ type: ExportedStoryRO, isArray: true })
  items: ExportedStoryRO[];
}
