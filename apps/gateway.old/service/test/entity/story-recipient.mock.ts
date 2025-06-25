import { StoryRecipientEntity } from '../../src/story/entity/story-recipient.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { UpdateResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { faker } from '@faker-js/faker';
import getRandomGender from '../../src/migrations/utils/get-random-gender';
import getRandomAge from '../../src/migrations/utils/get-random-age';

export interface RecipientData {
  gender?: number;
  age?: number;
  email?: string;
  nickname?: string;
  phone?: string;
  difficulty?: number;
  userWantContact?: boolean;
  firstName?: string;
  lastName?: string;
}

export const updateRecipient = async (
  id: number,
  data: {
    userWantContact?: boolean;
    difficultyByModerator?: number;
    email?: string;
    nickname?: string;
    ageByModerator?: number;
    genderByModerator?: number;
  },
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryRecipientEntity).update(id, data);
};

export const getRecipientStub = async (
  data: RecipientData,
): Promise<StoryRecipientEntity> => {
  const recipient = new StoryRecipientEntity();

  recipient.id = faker.number.int(1000);
  recipient.genderByModerator = data?.gender ?? getRandomGender();
  recipient.ageByModerator = data?.age ?? getRandomAge();
  recipient.email = data?.email ?? faker.internet.email();
  recipient.nickname = data?.nickname ?? faker.internet.userName();
  recipient.phone = data?.phone ?? undefined;
  recipient.difficultyByModerator =
    data?.difficulty !== undefined ? data.difficulty : null;
  recipient.userWantContact = data?.userWantContact ?? null;
  recipient.firstName = data?.firstName ?? null;
  recipient.lastName = data?.lastName ?? null;

  return recipient;
};

export const addRecipient = async (
  data: RecipientData,
): Promise<StoryRecipientEntity> => {
  const connection = await getConnection(config);
  const recipient = await getRecipientStub(data);

  return connection.getRepository(StoryRecipientEntity).save(recipient);
};

export const setStoryRecipientId = async (
  id: string,
  recipientId: number,
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).update({ id }, { recipientId });
};
