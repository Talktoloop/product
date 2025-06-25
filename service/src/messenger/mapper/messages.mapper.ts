import { MessengerMessageEntity } from '../entity/messenger-message.entity';
import { MessageRO } from '../../sms/response/message.ro';
import { plainToClass } from 'class-transformer';
import { SenderType } from '../../sms/response/sender.ro';
import { StoryEntity } from '../../story/entity/story.entity';
import { FlowMessageType } from '../enum/message-type.enum';
import { prepareUsername } from '../../common/helpers';

const checkSenderType = (message: MessengerMessageEntity): SenderType =>
  message.type === FlowMessageType.MODERATOR_RESPONSE
    ? SenderType.moderator
    : message.type
    ? SenderType.issuer
    : SenderType.loop;

export const messageMapper = (
  messages: MessengerMessageEntity[],
  story: StoryEntity,
): MessageRO[] => {
  return messages?.map((message) => {
    return plainToClass(MessageRO, {
      ...message,
      storyId: message.isStory ? story.id : undefined,
      sender: {
        type: checkSenderType(message),
        id: message.userId,
        username: message.type
          ? story.recipient?.userWantContact
            ? prepareUsername(story.recipient)
            : null
          : undefined,
      },
    });
  });
};
