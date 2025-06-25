import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { MessengerMessageEntity } from '../../src/messenger/entity/messenger-message.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { StoryRecipientEntity } from '../../src/story/entity/story-recipient.entity';
import { UpdateResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { faker } from '@faker-js/faker';

export const getMessengerConversationById = async (
  id: number,
  relations: string[] = [],
): Promise<StoryConversationEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryConversationEntity)
    .findOne({ where: { id }, relations });
};

export interface MessengerConversationData {
  countryId: number;
  storyUUID?: string;
  senderId?: string;
  startedAt?: Date;
  storyType?: string;
  pageId?: string;
  userFirstName?: string;
}

export const getMessengerConversationStub = (
  data: MessengerConversationData,
): StoryConversationEntity => {
  const conversation = new StoryConversationEntity();
  const story = new StoryEntity();
  const recipient = new StoryRecipientEntity();
  story.conversation = conversation;
  story.recipient = recipient;

  story.conversation.id = faker.number.int(1000);
  story.countryId = data.countryId;
  story.conversation.uuid = data.storyUUID ?? faker.string.uuid();
  story.recipient.communicatorId = data.senderId ?? faker.string.uuid();
  story.conversation.serviceNumber = data.pageId ?? faker.string.uuid();
  story.conversation.startedAt = data.startedAt ?? new Date();
  story.recipient.firstName = data.userFirstName ?? faker.person.firstName();

  return conversation;
};

export const addMessengerConversation = async (
  data: MessengerConversationData,
): Promise<StoryConversationEntity> => {
  const connection = await getConnection(config);
  const conversation = getMessengerConversationStub(data);

  return connection.getRepository(StoryConversationEntity).save(conversation);
};

export interface MessengerMessageData {
  conversationId: number;
  messageCreatedAt?: Date;
  isStory?: boolean;
  isUser?: boolean;
  userId?: string;
}

export const getMessengerMessageStub = async (
  data: MessengerMessageData,
): Promise<MessengerMessageEntity> => {
  const message = new MessengerMessageEntity();

  message.conversationId = data.conversationId;
  message.messageCreatedAt = data?.messageCreatedAt ?? new Date();
  message.userId = data?.userId ?? null;
  message.isStory = data?.isStory ?? faker.datatype.boolean();
  message.content = faker.lorem.sentence();
  message.type = +data.isUser || 0;

  return message;
};

export const addMessengerMessage = async (
  data: MessengerMessageData,
): Promise<MessengerMessageEntity> => {
  const connection = await getConnection(config);
  const message = await getMessengerMessageStub(data);

  return connection.getRepository(MessengerMessageEntity).save(message);
};

export const getMessageByIdParams = async (
  params: Record<string, unknown>,
  relations: string[] = [],
): Promise<MessengerMessageEntity> => {
  const connection = await getConnection(config);
  return connection.getRepository(MessengerMessageEntity).findOne({
    where: params,
    relations,
  });
};

export const updateConversation = async (
  id: number,
  data: {
    storyId?: string;
    shareUserInfo?: boolean;
  },
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryConversationEntity).update(id, data);
};
