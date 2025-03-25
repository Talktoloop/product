import { ApiProperty } from '@nestjs/swagger';
import { FlowResponseRequestDto } from './flow-response.dto';

export class UserResponseDto {
  @ApiProperty()
  messengerConversationId: number;

  @ApiProperty()
  messages: Array<FlowResponseRequestDto>;
}
