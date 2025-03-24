import { ApiProperty } from '@nestjs/swagger';
import { FlowResponseRequestDto } from './flow-response.dto';
import { MessengerUserRequestDto } from './messenger-user.dto';

export class MessengerFlowRequestDto {
  @ApiProperty()
  storyUuid: string;

  @ApiProperty({ required: false })
  lastFlowId?: string;

  @ApiProperty()
  flowStartedAt: Date;

  @ApiProperty()
  senderId: string;

  @ApiProperty()
  pageId: string;

  @ApiProperty()
  lang: string;

  @ApiProperty()
  additionalInfo: string;

  @ApiProperty()
  storyType: string;

  @ApiProperty()
  shareUserInfo: boolean;

  @ApiProperty()
  user: MessengerUserRequestDto;

  @ApiProperty()
  flowResponses: Array<FlowResponseRequestDto>;
}
