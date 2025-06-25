import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { faker } from '@faker-js/faker';

export interface IvrrConversationData {
  storyId?: string;
  storyUuid?: string;
  senderId?: string;
  shortCodeNumber?: string;
  startedAt?: Date;
}

export const getIvrrConversationStub = (
  data?: IvrrConversationData,
): StoryConversationEntity => {
  const conversation = new StoryConversationEntity();

  conversation.storyId = data?.storyId ?? undefined;
  conversation.uuid = data?.storyUuid ?? faker.string.uuid();
  conversation.serviceNumber = data?.shortCodeNumber ?? faker.phone.number();
  conversation.startedAt = data?.startedAt ?? new Date();

  return conversation;
};

export const addIvrrConversation = async (
  data: IvrrConversationData,
): Promise<StoryConversationEntity> => {
  const connection = await getConnection(config);
  const conversation = getIvrrConversationStub(data);

  return connection.getRepository(StoryConversationEntity).save(conversation);
};
