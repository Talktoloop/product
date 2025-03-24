import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CallRO {
  @Expose()
  @ApiProperty({ type: Number })
  id: number;

  @Expose()
  @ApiProperty({ type: String })
  storyId: string;

  @Expose()
  @ApiProperty({ type: String })
  twilioCallSid: string;

  @Expose()
  @ApiProperty({ type: String })
  shortCodeNumber: string;

  @Expose()
  @ApiProperty({ type: String })
  s3FileId: string;

  @Expose()
  @ApiProperty({ type: String })
  url: string;

  @Expose()
  @ApiProperty({ type: Boolean })
  isStory: boolean;

  @Expose()
  @ApiProperty({ type: Boolean })
  isModeratorCall: boolean;

  @Expose()
  @ApiProperty({ type: Date })
  createdAt: Date;
}
