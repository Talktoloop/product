import { faker } from '@faker-js/faker';
import { addLanguage, getLanguages } from '../entity/language.mock';
import {
  SENDER_TYPE_CONSTANT,
  MESSAGE_PROVIDER_CONSTANT,
  MESSAGE_TYPE_CONSTANT,
  SMSConversationModel,
  STORY_STATUS,
} from '@ourloop/shared';
import { formatISO } from 'date-fns';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { LANGUAGES_CONSTANTS } from '../../src/common/constant/languages.constants';
import { MessageRO } from '../../src/sms/response/message.ro';
import { MessageEntity } from '../../src/sms/entity/message.entity';
import { SenderType } from '../../src/sms/response/sender.ro';
import { ROLE } from '../../src/user/constant/role.constant';
import {
  addConversation,
  setStoryId,
  getConversationById,
} from '../entity/conversation.mock';
import { addStory } from '../entity/story.mock';
import { CHANNEL_CONSTANTS } from '../../src/common/constant/channel.constant';
import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { addUsers } from '../entity/user.mock';
import { UserEntity } from '../../src/user/entity/user.entity';
import { addMessage } from '../entity/message.mock';
import { getCountries, getRandomCountry } from '../entity/country.mock';
import { CountryEntity } from '../../src/country/entity/country.entity';
import {
  addRecipient,
  setStoryRecipientId,
} from '../entity/story-recipient.mock';

export const checkMessageValues = (
  data: MessageRO,
  values: MessageEntity,
): void => {
  expect(data.id).toBe(values.id);
  expect(data.content).toBe(values.content);

  expect(formatISO(new Date(data.createdAt))).toBe(formatISO(values.createdAt));
  expect(data.sender.type).toBe(
    values.isUser
      ? values.user?.role === ROLE.MODERATOR
        ? SenderType.moderator
        : SenderType.issuer
      : SenderType.loop,
  );
  expect(data.sender.id === values.user?.id).toBeTruthy();
  expect(data.sender.username === values.user?.nickname).toBeTruthy();
};

export const getSMSMessagesMock = async (
  country: string,
): Promise<SMSConversationModel> => {
  return {
    country,
    loopPhoneNumber: faker.number.int(1000).toString(),
    moderatorId: undefined,
    storyId: undefined,
    messages: [
      {
        type: MESSAGE_TYPE_CONSTANT.CHAT,
        content: faker.lorem.sentence(),
        timestamp: '2021-04-20T09:38:22.184Z',
        sender: SENDER_TYPE_CONSTANT.LOOP,
        queJobId: faker.number.int(1000).toString(),
        provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
      },
      {
        type: MESSAGE_TYPE_CONSTANT.CHAT,
        content: faker.lorem.sentence(),
        timestamp: '2021-04-20T09:38:29.965Z',
        sender: SENDER_TYPE_CONSTANT.USER,
        provider: MESSAGE_PROVIDER_CONSTANT.AFRICASTALKING,
      },
    ],
    userPhoneNumber: faker.number.int(1000).toString(),
  };
};

export const initializeDataset = async (): Promise<{
  languages: LanguageEntity[];
  conversation: StoryConversationEntity;
  stories: StoryEntity[];
  users: UserEntity[];
  country: CountryEntity;
}> => {
  await addLanguage({
    isDefault: false,
    code: LANGUAGES_CONSTANTS.NYANJA,
  });

  for (let i = 0; i < 3; i++) {
    await addLanguage();
  }

  const content = faker.lorem.sentence();
  const languages = await getLanguages();
  const users = await addUsers();
  const countries = await getCountries();
  const country = await getRandomCountry(countries);
  const userPhoneNumber = faker.number.int(1000).toString();
  const loopPhoneNumber = faker.number.int(1000).toString();
  const conversation = await addConversation({
    countryId: country.id,
    recipient: loopPhoneNumber,
  });
  const recipient = await addRecipient({
    phone: userPhoneNumber,
  });
  const stories = [];

  stories.push(
    await addStory(
      {
        status: STORY_STATUS.NOT_STARTED,
        conversationId: conversation.id,
        channel: CHANNEL_CONSTANTS.SMS,
        phone: userPhoneNumber,
        countryId: country.id,
        content,
        recipientId: recipient.id,
      },
      { storyRecipient: recipient },
    ),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.PUBLISHED,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      channel: CHANNEL_CONSTANTS.SMS,
      phone: userPhoneNumber,
      countryId: country.id,
      content,
      recipientId: recipient.id,
    }),
  );

  await setStoryId(conversation.id, stories[0].id);
  await setStoryRecipientId(stories[0].id, recipient.id);

  await Promise.all([
    addMessage({
      conversationId: conversation.id,
      sender: userPhoneNumber,
      recipient: loopPhoneNumber,
      isStory: true,
      isUser: true,
    }),
    addMessage({
      conversationId: conversation.id,
      sender: loopPhoneNumber,
      recipient: userPhoneNumber,
      isStory: true,
      isUser: false,
    }),
  ]);

  await getConversationById(conversation.id, ['story', 'story.recipient']);
  return {
    languages,
    users,
    conversation,
    country,
    stories,
  };
};
