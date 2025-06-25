import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { TranslationRO } from '../../common/response/translation';
import { CommentListRO } from './comment-list.ro';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { LexiconRO } from '../../lexicon/response/lexicon.ro';

@Exclude()
export class CommentModeratorRO extends CommentListRO {
  @Expose()
  @ApiProperty({ type: Boolean })
  emailProvided: boolean;

  @Expose()
  @ApiProperty({ type: TranslationRO, isArray: true })
  translations: TranslationRO[];

  @Expose()
  @ApiProperty({ type: String })
  language: string;

  @Expose()
  @ApiProperty({ type: String })
  s3FileId: string;

  @Expose()
  @ApiProperty({ type: String })
  storyLanguage: string;

  @Expose()
  @ApiProperty({ type: String })
  parentCommentId: string;

  @Expose()
  @ApiProperty({ type: Number })
  status: number;

  @Expose()
  @ApiProperty({ type: 'boolean' })
  solution_proposed: boolean;

  @Expose()
  @ApiProperty({ type: String })
  userId: string;

  @Expose()
  @ApiProperty({ type: String })
  publishedAt: string;

  @Expose()
  @ApiProperty({ type: String })
  channel: CHANNEL_CONSTANTS;

  @Expose()
  @ApiProperty({ type: String })
  storyChannel: CHANNEL_CONSTANTS;

  @Expose()
  @ApiProperty({ type: String })
  rejectRationale: string;

  @Expose()
  @ApiProperty({ type: LexiconRO, isArray: true })
  rejectReasons: LexiconRO[];

  @Expose()
  @ApiProperty({ type: Number, isArray: true })
  thematics: number[];
}
