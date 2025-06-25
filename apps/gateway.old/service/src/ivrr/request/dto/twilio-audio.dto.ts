import { ApiProperty } from '@nestjs/swagger';

export class TwilioAudioDto {
  @ApiProperty()
  twilioCallSid: string;

  @ApiProperty()
  s3FileId: string;

  @ApiProperty()
  isModeratorCall: boolean;

  @ApiProperty()
  isStory: boolean;

  @ApiProperty()
  callDate: Date;

  @ApiProperty()
  twilioFlowXml: string;

  @ApiProperty()
  percentageLevelOfListeningCall: number;

  @ApiProperty()
  recordingDuration?: number;
}
