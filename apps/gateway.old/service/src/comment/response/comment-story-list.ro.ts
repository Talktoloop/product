import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { CommentListRO } from './comment-list.ro';
import { TranslationRO } from '../../common/response/translation';

@Exclude()
export class CommentStoryListRO extends CommentListRO {
  @Expose()
  @ApiProperty()
  children?: CommentListRO[];

  @Expose()
  @ApiProperty({ type: TranslationRO, isArray: true })
  translations: TranslationRO[];
}
