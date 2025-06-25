import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class StoryListModeratorRO {
  @Expose()
  @ApiProperty({ type: 'string' })
  id: string;

  @Expose()
  @ApiProperty()
  createdAt: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  country: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  channel: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  status: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  language: string;

  @Expose()
  @ApiProperty({ type: 'string', isArray: true })
  types: string[];

  @Expose()
  @ApiProperty({ type: 'string' })
  s3FileId?: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  moderatorId?: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  moderatorName?: string;

  @Expose()
  @ApiProperty({ type: 'string' })
  moderatorEmail?: string;

  @Expose()
  @ApiProperty({ type: 'number' })
  recordingDuration?: number;

  @Expose()
  @ApiProperty({ type: 'string' })
  content?: string;

  @Expose()
  @ApiProperty({ type: 'boolean' })
  isSensitive?: boolean;

  @Expose()
  @ApiProperty({ type: 'number' })
  numberOfWords?: number;
}
