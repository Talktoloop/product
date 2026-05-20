import { MessageEntity } from '../../sms/entity/message.entity';
import { MessageRO } from '../response/message.ro';
import { plainToClass } from 'class-transformer';
import { SenderType } from '../response/sender.ro';
import { ROLE } from '../../user/constant/role.constant';

const checkSenderType = (message: MessageEntity): SenderType =>
  message.isUser
    ? message.user?.role === ROLE.MODERATOR
      ? SenderType.moderator
      : SenderType.issuer
    : SenderType.loop;

export const messagesMapper = (messages: MessageEntity[]): MessageRO[] => {
  return messages.map((message) => {
    return plainToClass(MessageRO, {
      ...message,
      sender: {
        type: checkSenderType(message),
        id: message.user?.id,
        username: message.user?.nickname,
      },
    });
  });
};
