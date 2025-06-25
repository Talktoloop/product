import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';

@Exclude()
export class CommentListRO {
  @Expose()
  @ApiProperty({ type: 'string' })
  content: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  id: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  createdAt: string;

  @Expose()
  @ApiProperty()
  user?: UserCommentDetailsRO;

  @Expose()
  @ApiProperty()
  votes: number;

  @Expose()
  @ApiProperty({ type: 'string' })
  authorNickname?: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  storyId: string;

  @Expose()
  @ApiProperty({ type: Number })
  status: number;

  @Expose()
  @ApiProperty({ enum: TRANSLATION_TYPE_CONSTANTS })
  contentType: TRANSLATION_TYPE_CONSTANTS;

  @Expose()
  @ApiProperty({ type: 'string' })
  language: string;

  @Expose()
  @ApiProperty({ type: 'boolean' })
  solution_proposed: boolean;

  @Expose()
  @ApiProperty({ type: Number, isArray: true })
  thematics: number[];
}
