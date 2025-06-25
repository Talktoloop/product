import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CommentListModeratorRO {
  @Expose()
  @ApiProperty({ type: 'string' })
  id: string;

  @Expose()
  @ApiProperty()
  createdAt: string;

  @Expose()
  @ApiProperty()
  storyPublishedBy: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  channel: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  country: string;

  @Expose()
  @ApiProperty({ type: 'string', isArray: true })
  categories: string[];

  @Expose()
  @ApiProperty({ type: 'string' })
  status: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  language: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  content: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  authorNickname: string;

  @Expose()
  @ApiProperty({ type: String })
  storyLanguage: string;
}
