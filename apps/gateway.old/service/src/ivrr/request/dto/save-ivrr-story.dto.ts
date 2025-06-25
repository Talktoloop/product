import { ApiProperty } from '@nestjs/swagger';
import { TwilioAudioDto } from './twilio-audio.dto';

export class SaveIvrrStoryDto {
  @ApiProperty()
  country: string;

  @ApiProperty()
  storyUuid: string;

  @ApiProperty()
  flowStartedAt: Date;

  @ApiProperty({ required: false })
  phoneNumber: string;

  @ApiProperty()
  language: string;

  @ApiProperty()
  shortCodeNumber: string;

  @ApiProperty()
  hideUserPhoneNumber: boolean;

  @ApiProperty()
  isSensitiveStory: boolean;

  @ApiProperty()
  calls: Array<TwilioAudioDto>;
}
