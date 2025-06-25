import { ApiProperty } from '@nestjs/swagger';

export class SetCommentAsPublishedDto {
  @ApiProperty()
  commentId: string;
}
