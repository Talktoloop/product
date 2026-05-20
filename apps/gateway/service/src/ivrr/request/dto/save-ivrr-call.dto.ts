import { ApiProperty } from '@nestjs/swagger';
import { TwilioAudioDto } from './twilio-audio.dto';

export class SaveIvrrCallDto {
  @ApiProperty()
  storyId: string;

  @ApiProperty()
  commentId: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  isCommentReply: boolean;

  @ApiProperty()
  call: TwilioAudioDto;
}
