import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiProperty()
  storyId: string;

  @ApiProperty()
  introduction: string;

  @ApiProperty()
  content: string;
}
