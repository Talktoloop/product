import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { UpdateResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { faker } from '@faker-js/faker';
import { MESSAGE_PROVIDER_CONSTANT } from '@ourloop/shared';

export interface ConversationData {
  countryId: number;
  sender?: string;
  recipient?: string;
}

export const getConversationStub = (
  data: ConversationData,
): StoryConversationEntity => {
  const conversation = new StoryConversationEntity();

  conversation.id = faker.number.int(1000);
  conversation.serviceNumber = data.recipient;
  conversation.provider = MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING;

  return conversation;
};

export const addConversation = async (
  data: ConversationData,
): Promise<StoryConversationEntity> => {
  const connection = await getConnection(config);
  const conversation = getConversationStub(data);

  return connection.getRepository(StoryConversationEntity).save(conversation);
};

export const getConversationById = async (
  id: number,
  relations: string[] = [],
): Promise<StoryConversationEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryConversationEntity).findOne({
    where: { id },
    relations,
  });
};

export const setStoryId = async (
  id: number,
  storyId: string,
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryConversationEntity)
    .update({ id }, { storyId });
};
