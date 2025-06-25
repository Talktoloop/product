import { ApiProperty } from '@nestjs/swagger';

export class AddCommentDto {
  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: false, maxLength: 60 })
  email?: string;

  @ApiProperty({ required: false, maxLength: 20 })
  phone?: string;

  @ApiProperty({ required: false, maxLength: 36 })
  parentCommentId: string;

  @ApiProperty({ required: false, maxLength: 60 })
  nickname?: string;

  s3FileId?: string;
}
