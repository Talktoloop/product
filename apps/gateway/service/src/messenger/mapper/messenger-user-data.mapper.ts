import { MessengerUserDataRO } from '../response/messenger-user-data.ro';
import { plainToClass } from 'class-transformer';
import { StoryRecipientEntity } from '../../story/entity/story-recipient.entity';

export const messengerUserDataMapper = (
  recipient: StoryRecipientEntity,
): MessengerUserDataRO => {
  return plainToClass(MessengerUserDataRO, recipient);
};
