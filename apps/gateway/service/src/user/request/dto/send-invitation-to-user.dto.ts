import { ApiProperty } from '@nestjs/swagger';

export class sendInvitationToUserDTO {
  @ApiProperty({ required: true, type: String })
  userId: string;
}
