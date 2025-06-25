import { StoryRecipientEntity } from './../../src/story/entity/story-recipient.entity';
import { faker } from '@faker-js/faker';
import { formatISO } from 'date-fns';
import { DIFFICULTY_VALUE } from '../../src/common/types';
import { STORY_STATUS, COMMENT_STATUS, _sortBy } from '@ourloop/shared';
import {
  addUsers,
  getUserByOrganizationId,
  getRandomUser,
} from '../entity/user.mock';
import {
  getOrganizations,
  getRandomOrganization,
} from '../entity/organization.mock';
import { addStory } from '../entity/story.mock';
import { getThematics } from '../entity/thematic.mock';
import { getCategories } from '../entity/category.mock';
import { getDifficulties } from '../entity/difficulty.mock';
import getRandomDifficulty from '../../src/migrations/utils/get-random-difficulty';
import {
  getMaternityStatuses,
  getRandomMaternityStatus,
} from '../entity/maternity-status.mock';
import { getRejectReasons } from '../entity/reject-reason.mock';
import {
  addLanguage,
  getLanguages,
  getDefaultLanguage,
} from '../entity/language.mock';
import { DifficultyEntity } from '../../src/lexicon/entity/difficulty.entity';
import { CategoryEntity } from '../../src/category/entity/category.entity';
import { ThematicEntity } from '../../src/lexicon/entity/thematic.entity';
import { OrganisationEntity } from '../../src/organisation/entity/organisation.entity';
import { RejectReasonEntity } from '../../src/lexicon/entity/reject-reason.entity';
import { MaternityStatusEntity } from '../../src/lexicon/entity/maternity-status.entity';
import { UserEntity } from '../../src/user/entity/user.entity';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { StoryWebModeratorRO } from '../../src/story/response/story-web-moderator.ro';
import { TRANSLATION_TYPE_CONSTANTS } from '../../src/common/constant/translation-type.constant';
import { AGE_VALUE, GENDER_VALUE } from '../../src/common/types';
import { LANGUAGES_CONSTANTS } from '../../src/common/constant/languages.constants';
import { addConversation as addSmsConversation } from '../entity/conversation.mock';
import { addMessage } from '../entity/message.mock';
import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { MessageEntity } from '../../src/sms/entity/message.entity';
import { CHANNEL_CONSTANTS } from '../../src/common/constant/channel.constant';
import { TranslationRO } from '../../src/common/response/translation';
import { PROVIDER_TYPE } from '../../src/language/interface/provider.enum';
import { MARKED_AS_SENSITIVE_BY } from '../../src/common/constant/marked-as-sensitive.constant';
import { getRandomCountry } from '../entity/country.mock';
import { initializeDataset as initializeCountryDataset } from './country';
import { CountryEntity } from '../../src/country/entity/country.entity';
import {
  addMessengerConversation,
  updateConversation,
} from '../entity/messanger.mock';
import { addMessengerMessage } from '../entity/messanger.mock';
import { addIvrrConversation } from '../entity/ivrr-conversation.mock';
import {
  addRecipient,
  setStoryRecipientId,
} from '../entity/story-recipient.mock';
import { setStoryId } from '../entity/conversation.mock';
import { updateRecipient } from '../entity/story-recipient.mock';
import {
  addAdministrativeData,
  assignAdministrativeDataToStory,
} from '../entity/administrative-data.mock';
import { addAdministrativeDataName } from '../entity/administrative-data-name.mock';
import { CountryAdministrativeDataEntity } from 'src/country/entity/country-administrative-data.entity';

export interface DBLexicon {
  id: number;
  code: string;
}

export interface DBData {
  id: string;
  country: { code: string };
  translations: {
    language: LanguageEntity;
    content: string;
    type: TRANSLATION_TYPE_CONSTANTS;
  }[];
  commentsRel: {
    status: string;
    user: {
      organisation_id: string;
    };
  }[];
  votes: { id: number }[];
  views: { id: string }[];
  user: UserEntity;
  organisations: OrganisationEntity[];
  categories: DBLexicon[];
  difficulties: DBLexicon[];
  maternityStatus: DBLexicon[];
  publishedAt: Date;
  createdAt?: Date;
  recipient: StoryRecipientEntity;
}

export const checkStoryProperties = (
  responseData: StoryWebModeratorRO & {
    difficulties: { id: number }[];
    maternityStatus: { id: number }[];
    emailProvided: boolean;
  },
  dbData: DBData,
  additionalFields: string[] = [],
  languageId?: number,
): void => {
  const translation = dbData?.translations.filter(
    (entity) =>
      (languageId && entity.language.id === languageId) ||
      (!languageId && entity.language.isDefault),
  )[0];

  expect(
    responseData.country !== undefined &&
      dbData.country.code === responseData.country,
  ).toBeTruthy();
  expect(
    responseData.id !== undefined && dbData.id === responseData.id,
  ).toBeTruthy();

  if (translation && responseData.content) {
    expect(
      responseData.content !== undefined &&
        responseData.content === translation.content,
    ).toBeTruthy();
  }

  if (responseData.comments) {
    expect(responseData.comments === dbData.commentsRel.length).toBeTruthy();
  }
  if (responseData.votes) {
    expect(responseData.votes === dbData.votes.length).toBeTruthy();
    expect(responseData.views === dbData.views.length).toBeTruthy();
  }
  if (responseData.organisations) {
    expect(
      responseData.organisations && Array.isArray(responseData.organisations),
    ).toBeTruthy();
  }

  if (responseData.gender !== undefined) {
    expect(
      responseData.gender === undefined ||
        responseData.gender === dbData.recipient.genderByModerator,
    ).toBeTruthy();
  }
  if (responseData.age !== undefined) {
    expect(
      responseData.age === undefined ||
        responseData.age === dbData.recipient.ageByModerator,
    ).toBeTruthy();
  }

  if (responseData.organisations) {
    let dbOrganization: { id: string; name: string };

    for (const organization of responseData.organisations) {
      dbOrganization = dbData.organisations.filter(
        (item) => item.id === organization.id,
      )[0];

      for (const key of ['id', 'name']) {
        expect(
          organization[key] && organization[key] === dbOrganization[key],
        ).toBeTruthy();
      }

      expect(
        organization.replied ===
          dbData.commentsRel.filter(
            (comment) =>
              comment.user.organisation_id === organization.id &&
              comment.status === COMMENT_STATUS.PUBLISHED,
          ).length >
            0,
      ).toBeTruthy();
    }
  }

  for (const field of additionalFields) {
    expect(responseData).toHaveProperty(field);
  }

  if (responseData.translations) {
    expect(Array.isArray(responseData.translations)).toBeTruthy();

    const translation = responseData.translations[0];

    if (translation) {
      for (const field of ['content', 'code', 'type']) {
        expect(translation).toHaveProperty(field);
      }

      expect(
        Object.values(TRANSLATION_TYPE_CONSTANTS).includes(translation.type),
      ).toBeTruthy();
    }
  }

  if (responseData.categories) {
    expect(Array.isArray(responseData.categories)).toBeTruthy();

    let dbCategory: DBLexicon;

    for (const category of responseData.categories) {
      dbCategory = dbData.categories.filter(
        (item) => item.id === category.id,
      )[0];

      for (const key of ['id', 'code']) {
        expect(category[key] && category[key] === dbCategory[key]).toBeTruthy();
      }
    }
  }

  if (responseData.difficulties) {
    expect(Array.isArray(responseData.difficulties)).toBeTruthy();

    let dbDifficulty: DBLexicon;

    for (const difficulty of responseData.difficulties) {
      dbDifficulty = dbData.difficulties.filter(
        (item) => item.id === difficulty.id,
      )[0];

      for (const key of ['id', 'code']) {
        expect(
          difficulty[key] && difficulty[key] === dbDifficulty[key],
        ).toBeTruthy();
      }
    }
  }

  if (responseData.maternityStatus) {
    expect(Array.isArray(responseData.maternityStatus)).toBeTruthy();

    let dbMaternityStatus: DBLexicon;

    for (const maternityStatus of responseData.maternityStatus) {
      dbMaternityStatus = dbData.maternityStatus.filter(
        (item) => item.id === maternityStatus.id,
      )[0];

      for (const key of ['id', 'code']) {
        expect(
          maternityStatus[key] &&
            maternityStatus[key] === dbMaternityStatus[key],
        ).toBeTruthy();
      }
    }
  }

  if (!!responseData.user) {
    expect(
      responseData.user.organisation &&
        responseData.user.organisation === dbData.user.organisation.name,
    ).toBeTruthy();
  }

  if (responseData.publishedAt) {
    expect(
      responseData.publishedAt !== undefined &&
        formatISO(new Date(responseData.publishedAt)) ===
          (dbData.publishedAt ? formatISO(dbData.publishedAt) : null),
    ).toBeTruthy();
  }

  if (responseData.createdAt) {
    expect(
      responseData.createdAt !== undefined &&
        formatISO(new Date(responseData.createdAt)) ===
          (dbData.createdAt ? formatISO(dbData.createdAt) : null),
    ).toBeTruthy();
  }
};

export const checkStorySentValues = (
  data: StoryWebModeratorRO & {
    translations: TranslationRO[];
    channel: string;
  },
  values: {
    numberOfVotes: number;
    numberOfViews: number;
    numberOfComments: number;
    numberOfCategories?: number;
    numberOfDifficulties?: number;
    numberOfMaternityStatuses?: number;
    originalLanguageCode?: string;
    translationCodes?: TranslationRO[];
    channel?: string;
    difficulty?: string;
    thematics?: number[];
  },
): void => {
  expect(data.votes).toBe(values.numberOfVotes);
  expect(data.views).toBe(values.numberOfViews);
  expect(data.comments).toBe(values.numberOfComments);
  expect(
    data.organisations.filter((organization) => organization.replied).length,
  ).toBe(values.numberOfComments);

  if (values.numberOfCategories) {
    expect(data.categories.length).toBe(values.numberOfCategories);
  }

  if (values.thematics) {
    expect(data.thematics.sort()).toEqual(values.thematics.sort());
  }

  if (values.numberOfDifficulties) {
    expect(data.difficulties.length).toBe(values.numberOfDifficulties);
  }

  if (values.numberOfDifficulties) {
    expect(data.maternityStatus.length).toBe(values.numberOfMaternityStatuses);
  }

  if (values.originalLanguageCode) {
    expect(data.language).toBe(values.originalLanguageCode);
  }

  if (values.translationCodes) {
    expect(_sortBy(data.translations, 'code', true)).toEqual(
      _sortBy(values.translationCodes, 'code', true),
    );
  }

  if (values.channel) {
    expect(data.channel).toBe(values.channel);
  }

  if (values.difficulty) {
    expect(data.difficulty).toBe(values.difficulty);
  }
};

export const initializeDataset = async (): Promise<{
  views: number;
  phrase: string;
  difficulties: DifficultyEntity[];
  categories: CategoryEntity[];
  thematics: ThematicEntity[];
  organizations: OrganisationEntity[];
  rejectReasons: RejectReasonEntity[];
  maternityStatuses: MaternityStatusEntity[];
  users: UserEntity[];
  origanization: OrganisationEntity;
  voutes: UserEntity[];
  comments: {
    status: string;
    author: UserEntity;
  }[];
  languages: LanguageEntity[];
  stories: StoryEntity[];
  smsConversation: StoryConversationEntity;
  smsMessages: MessageEntity[];
  countries: CountryEntity[];
  administrativeData: CountryAdministrativeDataEntity[];
}> => {
  const views = 2;
  const phrase = faker.lorem.sentence();
  const difficulties = await getDifficulties();
  const categories = await getCategories();
  const thematics = await getThematics();
  const organizations = await getOrganizations();
  const maternityStatuses = await getMaternityStatuses();
  const rejectReasons = await getRejectReasons();
  const users = await addUsers();
  const countries = (await initializeCountryDataset()).countries;
  const origanization = getRandomOrganization(organizations);
  const voutes = [getRandomUser(users)];
  const comments = [
    {
      status: COMMENT_STATUS.PUBLISHED,
      author: await getUserByOrganizationId(origanization.id),
    },
  ];

  const stories = [];

  await addLanguage({
    isDefault: false,
    code: LANGUAGES_CONSTANTS.NYANJA,
  });
  await addLanguage({
    isDefault: false,
    provider: PROVIDER_TYPE.AWS,
  });
  await addLanguage({
    isDefault: false,
    provider: PROVIDER_TYPE.GOOGLE,
  });
  await addLanguage();

  const country = getRandomCountry(countries);
  const languages = await getLanguages();
  const parentRegion = await addAdministrativeData({ countryId: country.id });
  const defaultLanguage = await getDefaultLanguage();
  const parentRegionName = await addAdministrativeDataName({
    administrativeAreaId: parentRegion.id,
    languageId: defaultLanguage.id,
  });
  parentRegion.names = [parentRegionName];
  const childRegion = await addAdministrativeData({
    parentId: parentRegion.id,
    countryId: country.id,
    level: 2,
  });
  const childRegionName = await addAdministrativeDataName({
    administrativeAreaId: childRegion.id,
    languageId: defaultLanguage.id,
  });
  childRegion.names = [childRegionName];

  const administrativeData = [parentRegion, childRegion];
  const smsConversation = await addSmsConversation({
    countryId: getRandomCountry(countries).id,
  });
  const whatsAppConversation = await addMessengerConversation({
    countryId: getRandomCountry(countries).id,
  });
  const userPhoneNumber = faker.number.int(1000).toString();
  const loopPhoneNumber = faker.number.int(1000).toString();
  const recipient = await addRecipient({
    phone: userPhoneNumber,
  });
  const recipientWithContactNotAccepted = await addRecipient({
    phone: userPhoneNumber,
    userWantContact: false,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  });
  const smsMessages = [];

  stories.push(
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        age: AGE_VALUE['No answer'],
        gender: GENDER_VALUE.NO_ANSWER,
        place: `${faker.location.city()}, ${faker.location.country()}`,
        recipientId: recipient.id,
        conversationId: smsConversation.id,
      },
      {
        thematics: [thematics[0]],
        categories,
        difficulties: [getRandomDifficulty(difficulties)],
        maternityStatuses: [getRandomMaternityStatus(maternityStatuses)],
        organizations: [origanization, getRandomOrganization(organizations)],
        comments,
        voutes,
        views,
        author: getRandomUser(users),
        storyRecipient: recipient,
      },
    ),
  );

  await Promise.all([
    assignAdministrativeDataToStory(parentRegion.id, stories[0].id),
    assignAdministrativeDataToStory(childRegion.id, stories[0].id),
  ]);

  await setStoryRecipientId(stories[0].id, recipient.id);

  stories.push(
    await addStory({
      status: STORY_STATUS.REJECTED,
      countryId: getRandomCountry(countries).id,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.REJECTED,
      countryId: getRandomCountry(countries).id,
    }),
  );

  stories.push(
    await addStory(
      {
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        recipientId: recipient.id,
      },
      {
        thematics: [thematics[0], thematics[1], thematics[6]],
        categories,
        difficulties: [getRandomDifficulty(difficulties)],
        maternityStatuses: [getRandomMaternityStatus(maternityStatuses)],
        organizations: [origanization, getRandomOrganization(organizations)],
        comments,
        voutes,
        author: getRandomUser(users),
        storyRecipient: recipient,
      },
    ),
  );
  await updateRecipient(stories[3].recipientId, {
    difficultyByModerator: DIFFICULTY_VALUE.NO_ANSWER,
  });
  await setStoryRecipientId(stories[3].id, recipient.id);
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      conversationId: smsConversation.id,
      channel: CHANNEL_CONSTANTS.SMS,
      phone: userPhoneNumber,
      countryId: getRandomCountry(countries).id,
      recipientId: recipient.id,
    }),
  );
  await updateConversation(smsConversation.id, { storyId: stories[4].id });
  await setStoryRecipientId(stories[4].id, recipient.id);
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      languageId: languages[2].id,
      countryId: getRandomCountry(countries).id,
      recipientId: recipient.id,
      conversationId: smsConversation.id,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      languageId: languages[2].id,
      isSensitive: true,
      markedAsSensitiveByRole: MARKED_AS_SENSITIVE_BY.MODERATOR,
      countryId: getRandomCountry(countries).id,
      markedAsSensitiveByUserId: getRandomUser(users).id,
      recipientId: recipient.id,
      conversationId: smsConversation.id,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.NOT_STARTED,
      isSensitive: true,
      markedAsSensitiveByRole: MARKED_AS_SENSITIVE_BY.AUTHOR,
      countryId: getRandomCountry(countries).id,
      markedAsSensitiveByUserId: getRandomUser(users).id,
      recipientId: recipient.id,
      conversationId: smsConversation.id,
    }),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.AWAITING_REPLAY,
      conversationId: whatsAppConversation.id,
      channel: CHANNEL_CONSTANTS.WHATSAPP,
      countryId: getRandomCountry(countries).id,
      recipientId: recipientWithContactNotAccepted.id,
    }),
  );

  await Promise.all([
    assignAdministrativeDataToStory(parentRegion.id, stories[8].id),
    assignAdministrativeDataToStory(childRegion.id, stories[8].id),
  ]);

  await setStoryRecipientId(stories[8].id, recipientWithContactNotAccepted.id);
  stories.push(
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        recipientId: recipient.id,
        conversationId: smsConversation.id,
      },
      {
        thematics: [thematics[7], thematics[8]],
        categories,
        difficulties: [getRandomDifficulty(difficulties)],
        maternityStatuses: [getRandomMaternityStatus(maternityStatuses)],
        organizations: [origanization, getRandomOrganization(organizations)],
        comments,
        voutes,
        views,
        author: getRandomUser(users),
        storyRecipient: recipient,
      },
    ),
  );
  await setStoryRecipientId(stories[9].id, recipient.id);

  const ivrrConversation = await addIvrrConversation({});
  await setStoryId(ivrrConversation.id, stories[3].id);

  await addMessengerMessage({
    conversationId: whatsAppConversation.id,
    userId: users[0].id,
    isUser: true,
  });

  await updateConversation(whatsAppConversation.id, { storyId: stories[8].id });

  smsMessages.push(
    await addMessage({
      conversationId: smsConversation.id,
      sender: loopPhoneNumber,
      recipient: userPhoneNumber,
    }),
    await addMessage({
      conversationId: smsConversation.id,
      sender: userPhoneNumber,
      recipient: loopPhoneNumber,
      isUser: true,
      userId: users[0].id,
      isStory: true,
    }),
    await addMessage({
      conversationId: smsConversation.id,
      sender: loopPhoneNumber,
      recipient: userPhoneNumber,
    }),
    await addMessage({
      conversationId: smsConversation.id,
      sender: userPhoneNumber,
      recipient: loopPhoneNumber,
      isUser: true,
    }),
    await addMessage({
      conversationId: smsConversation.id,
      sender: loopPhoneNumber,
      recipient: userPhoneNumber,
      isUser: false,
    }),
  );

  return {
    views,
    phrase,
    difficulties,
    categories,
    thematics,
    organizations,
    rejectReasons,
    maternityStatuses,
    users,
    origanization,
    voutes,
    comments,
    languages,
    stories,
    smsConversation,
    smsMessages,
    countries,
    administrativeData,
  };
};
