import { MessageEntity } from '../../src/sms/entity/message.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { faker } from '@faker-js/faker';

export interface MessageData {
  conversationId: number;
  languageId?: number;
  isUser?: boolean;
  sender: string;
  recipient: string;
  userId?: string;
  isStory?: boolean;
}

export const getMessageStub = async (
  data: MessageData,
): Promise<MessageEntity> => {
  const message = new MessageEntity();

  message.conversationId = data.conversationId;
  message.isUser = data?.isUser ?? false;
  message.userId = data?.userId ?? undefined;
  message.content = faker.lorem.sentence();
  message.isStory = data?.isStory ?? false;

  return message;
};

export const addMessage = async (data: MessageData): Promise<MessageEntity> => {
  const connection = await getConnection(config);
  const message = await getMessageStub(data);

  return connection.getRepository(MessageEntity).save(message);
};
