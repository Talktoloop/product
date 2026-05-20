import { ApiProperty } from '@nestjs/swagger';

export class EditUserNotificationDto {
  @ApiProperty({ required: true })
  notifications: boolean;

  @ApiProperty({ required: true })
  reminders: boolean;
}
