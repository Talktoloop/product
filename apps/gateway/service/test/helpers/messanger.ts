import { faker } from '@faker-js/faker';
import {
  addLanguage,
  getLanguages,
  getLanguageFromList,
} from '../entity/language.mock';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { LANGUAGES_CONSTANTS } from '../../src/common/constant/languages.constants';
import { MessengerFlowRequestDto } from '../../src/messenger/request/dto/messenger-flow.dto';
import { addMinutes } from 'date-fns';
import { getCategories } from '../entity/category.mock';
import getRandomCategory from '../../src/migrations/utils/get-random-category';
import { addUsers } from '../entity/user.mock';
import { getCountries, getRandomCountry } from '../entity/country.mock';
import {
  addMessengerConversation,
  addMessengerMessage,
  updateConversation,
} from '../entity/messanger.mock';
import { addStory } from '../entity/story.mock';
import { STORY_STATUS } from '@ourloop/shared';
import { CHANNEL_CONSTANTS } from '../../src/common/constant/channel.constant';
import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { UserEntity } from '../../src/user/entity/user.entity';
import { CountryEntity } from '../../src/country/entity/country.entity';
import { MessageRO } from '../../src/sms/response/message.ro';
import { MessengerMessageEntity } from '../../src/messenger/entity/messenger-message.entity';
import { formatISO } from 'date-fns';
import { SenderType } from '../../src/sms/response/sender.ro';
import { ROLE } from '../../src/user/constant/role.constant';
import {
  addRecipient,
  setStoryRecipientId,
} from '../entity/story-recipient.mock';

export const getWhatsAppConversationMock = async (
  mockedFirstName?: string,
  mockedLastName?: string,
): Promise<MessengerFlowRequestDto> => {
  const languages = await getLanguages();
  const categories = await getCategories();
  const language = getLanguageFromList(languages, false);
  const category = getRandomCategory(categories);

  return {
    flowStartedAt: new Date(),
    storyType: category.code,
    senderId: `whatsapp:${faker.phone.number()}`,
    pageId: faker.string.uuid(),
    storyUuid: faker.string.uuid(),
    lastFlowId: faker.lorem.word(),
    lang: language.code,
    flowResponses: [
      {
        content: faker.lorem.sentence(),
        type: 0,
        createdAt: new Date(),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 0,
        createdAt: addMinutes(new Date(), 1),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 1,
        createdAt: addMinutes(new Date(), 2),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 0,
        createdAt: addMinutes(new Date(), 3),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 0,
        createdAt: addMinutes(new Date(), 4),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 1,
        createdAt: addMinutes(new Date(), 5),
        isStory: true,
      },
      {
        content: faker.lorem.sentence(),
        type: 0,
        createdAt: addMinutes(new Date(), 6),
        isStory: false,
      },
      {
        content: faker.lorem.sentence(),
        type: 1,
        createdAt: addMinutes(new Date(), 14),
        isStory: false,
      },
    ],
    additionalInfo: faker.lorem.sentence(),
    user: {
      firstName: (mockedFirstName ||=
        mockedFirstName === null ? null : faker.person.firstName()),
      lastName: mockedLastName ?? null,
    },
    shareUserInfo: faker.datatype.boolean(),
  };
};

export const checkMessageValues = (
  data: MessageRO,
  value: MessengerMessageEntity,
  checkUserType = true,
  checkStory = false,
): void => {
  expect(data.id).toBe(value.id);
  expect(data.content).toBe(value.content);

  if (checkStory) {
    expect(data.storyId).toBe(value.conversation.storyId);
  }

  expect(formatISO(new Date(data.createdAt))).toBe(formatISO(value.createdAt));

  if (checkUserType) {
    expect(data.sender.type).toBe(
      value.userId
        ? value.user?.role === ROLE.MODERATOR
          ? SenderType.moderator
          : SenderType.issuer
        : SenderType.loop,
    );
  }

  if (data.sender.type === SenderType.loop) {
    expect(data.sender.id === value.user?.id).toBeTruthy();
  }

  if (value.conversation.story.recipient.userWantContact) {
    expect(data.sender.username === value.user?.nickname).toBeTruthy();
  } else {
    expect(data.sender.username).toBeNull();
  }
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

  const languages = await getLanguages();
  const users = await addUsers();
  const countries = await getCountries();
  const country = getRandomCountry(countries);
  const conversation = await addMessengerConversation({
    countryId: country.id,
  });
  const recipient = await addRecipient({});
  const stories = [];

  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      messengerConversationId: conversation.id,
      channel: CHANNEL_CONSTANTS.WHATSAPP,
      countryId: country.id,
      conversationId: conversation.id,
      recipientId: recipient.id,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.PUBLISHED,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      channel: CHANNEL_CONSTANTS.WHATSAPP,
      countryId: country.id,
      conversationId: conversation.id,
      recipientId: recipient.id,
    }),
  );

  await setStoryRecipientId(stories[0].id, recipient.id);
  await updateConversation(conversation.id, {
    storyId: stories[0].id,
  });

  await Promise.all([
    addMessengerMessage({
      conversationId: conversation.id,
      isStory: true,
      isUser: true,
    }),
    addMessengerMessage({
      conversationId: conversation.id,
      isStory: false,
      isUser: false,
    }),
  ]);

  return {
    languages,
    users,
    conversation,
    country,
    stories,
  };
};
