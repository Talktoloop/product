import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { StoryWebModeratorRO } from './story-web-moderator.ro';
import { MessageRO } from '../../sms/response/message.ro';

@Exclude()
export class StoryMessengerModeratorRO extends StoryWebModeratorRO {
  @Expose()
  @ApiProperty({ type: MessageRO, isArray: true })
  messages: MessageRO[];
}
