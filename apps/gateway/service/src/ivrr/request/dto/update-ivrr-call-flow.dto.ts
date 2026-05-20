import { ApiProperty } from '@nestjs/swagger';

export class UpdateIvrrCallFlowDto {
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
}
