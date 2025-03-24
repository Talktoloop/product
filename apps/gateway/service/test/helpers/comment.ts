import { formatISO } from 'date-fns';
import { faker } from '@faker-js/faker';
import { STORY_STATUS, COMMENT_STATUS } from '@ourloop/shared';
import { addUsers, getRandomUser } from '../entity/user.mock';
import { getOrganizations } from '../entity/organization.mock';
import { addStory } from '../entity/story.mock';
import { addComment } from '../entity/comment.mock';
import { getRejectReasons } from '../entity/reject-reason.mock';
import {
  addLanguage,
  getLanguages,
  getLanguageFromList,
} from '../entity/language.mock';
import { OrganisationEntity } from '../../src/organisation/entity/organisation.entity';
import { RejectReasonEntity } from '../../src/lexicon/entity/reject-reason.entity';
import { CommentRejectReasonEntity } from '../../src/comment/entity/comment-reject-reason.entity';
import { UserEntity } from '../../src/user/entity/user.entity';
import { LanguageEntity } from '../../src/language/entity/language.entity';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { CommentEntity } from '../../src/comment/entity/comment.entity';
import { CommentStoryListRO } from '../../src/comment/response/comment-story-list.ro';
import { CommentListModeratorRO } from '../../src/comment/response/comment-list-moderator.ro';
import { LANGUAGES_CONSTANTS } from '../../src/common/constant/languages.constants';
import { PROVIDER_TYPE } from '../../src/language/interface/provider.enum';
import { getRandomCountry, getCountries } from '../entity/country.mock';
import { getCategories } from '../entity/category.mock';
import { CommentRecipientEntity } from '../../src/comment/entity/comment-recipient.entity';

export interface DBData {
  id: string;
  translations: {
    language: LanguageEntity;
    content: string;
  }[];
  story: StoryEntity;
  status: number;
  channel: string;
  language: LanguageEntity;
  email: string;
  user: UserEntity;
  createdAt: Date;
  votes: { id: number }[];
  children: DBData[];
  rejectReasons?: CommentRejectReasonEntity[];
  recipient: CommentRecipientEntity;
}

export const checkCommentProperties = (
  responseData: CommentListModeratorRO & { storyLanguage: string },
  dbData: DBData,
  properties: string[] = ['id', 'channel', 'status'],
): void => {
  for (const key of properties) {
    expect(
      responseData[key] !== undefined && dbData[key] === responseData[key],
    ).toBeTruthy();
  }

  expect(
    responseData.createdAt !== undefined &&
      formatISO(new Date(responseData.createdAt)) ===
        formatISO(dbData.createdAt),
  ).toBeTruthy();

  expect(
    responseData.language !== undefined &&
      responseData.language === dbData.language.code,
  ).toBeTruthy();

  if (responseData.storyLanguage) {
    expect(responseData.storyLanguage).toBe(dbData.story.language.code);
  }
};

export const checkCommentDetails = (
  responseData: CommentStoryListRO & {
    emailProvided: boolean;
    email?: string;
    rejectReasons?: RejectReasonEntity[];
  },
  dbData: DBData,
  additionalFields: string[] = ['user', 'children', 'votes'],
  languageId?: number,
): void => {
  const translation = dbData?.translations.filter(
    (entity) =>
      (languageId && entity.language.id === languageId) ||
      (!languageId && entity.language.isDefault),
  )[0];

  if (dbData.recipient) {
    expect(
      responseData.authorNickname !== undefined &&
        dbData.recipient.nickname === responseData.authorNickname,
    ).toBeTruthy();
  }

  for (const key of ['id', 'storyId']) {
    expect(
      responseData[key] !== undefined && dbData[key] === responseData[key],
    ).toBeTruthy();
  }

  if (translation) {
    expect(
      responseData.content !== undefined &&
        responseData.content === translation.content,
    ).toBeTruthy();
  }

  expect(
    responseData.emailProvided === undefined ||
      responseData.emailProvided ===
        (typeof dbData.email === 'string' ||
          typeof dbData.user?.email === 'string'),
  ).toBeTruthy();

  if (responseData.emailProvided) {
    expect(responseData.email).not.toBeNull();
  }

  for (const key of ['createdAt', 'publishedAt']) {
    if (responseData[key])
      expect(
        formatISO(new Date(responseData[key])) === formatISO(dbData[key]),
      ).toBeTruthy();
  }

  for (const field of additionalFields) {
    expect(responseData).toHaveProperty(field);

    if (field == 'votes') {
      expect(responseData.votes === dbData.votes.length).toBeTruthy();
    }
  }

  if (responseData.translations) {
    for (const item of responseData.translations) {
      expect(item.code).toBeDefined();
      expect(item.content).toBeDefined();
      expect(item.content).toBe(
        dbData?.translations.find(
          (translation) => translation?.language?.code === item.code,
        )?.content,
      );
    }
  }

  if (responseData.children) {
    for (const child of responseData.children) {
      checkCommentDetails(
        child as CommentStoryListRO & { emailProvided: boolean },
        dbData.children.filter((element) => element.id == child.id)[0],
        ['user', 'votes'],
        languageId,
      );
    }
  }

  if (responseData.user) {
    expect(
      responseData.user.organisation &&
        responseData.user.organisation === dbData.user.organisation.name,
    ).toBeTruthy();
  } else {
    expect(responseData.user === null).toBeTruthy();
  }

  for (const key of ['rejectRationale', 'email', 'parentCommentId']) {
    if (responseData[key]) {
      expect(responseData[key]).toBe(dbData[key]);
    }
  }

  if (responseData.rejectReasons) {
    expect(responseData.rejectReasons).toEqual(
      dbData.rejectReasons.map((item) => item.rejectReason),
    );
  }
};

export const initializeDataset = async (): Promise<{
  views: number;
  phrase: string;
  organizations: OrganisationEntity[];
  rejectReasons: RejectReasonEntity[];
  users: UserEntity[];
  voutes: UserEntity[];
  languages: LanguageEntity[];
  stories: StoryEntity[];
  comments: CommentEntity[];
}> => {
  const views = 2;
  const phrase = faker.lorem.sentence();
  const organizations = await getOrganizations();
  const rejectReasons = await getRejectReasons();
  const users = await addUsers();
  const voutes = [getRandomUser(users)];
  const countries = await getCountries();
  const country = getRandomCountry(countries);

  await addLanguage({
    isDefault: false,
    code: LANGUAGES_CONSTANTS.NYANJA,
  });
  await addLanguage({
    isDefault: false,
    provider: PROVIDER_TYPE.AWS,
  });

  const languages = await getLanguages();
  const categories = await getCategories();
  const notDefaultLanguage = getLanguageFromList(languages, false);

  const stories = [];
  stories.push(
    await addStory(
      {
        status: STORY_STATUS.PUBLISHED,
        countryId: country.id,
        publishedBy: getRandomUser(users).id,
      },
      { categories },
    ),
  );
  stories.push(
    await addStory({
      status: STORY_STATUS.PUBLISHED,
    }),
  );

  const comments = [];

  for (const status of [
    COMMENT_STATUS.PENDING_REVIEW,
    COMMENT_STATUS.PENDING_REVIEW,
    COMMENT_STATUS.PUBLISHED,
    COMMENT_STATUS.REJECTED,
  ]) {
    comments.push(
      await addComment(
        {
          storyId: stories[0].id,
          status,
          userId: getRandomUser(users).id,
          languageId: [
            COMMENT_STATUS.PENDING_REVIEW,
            COMMENT_STATUS.REJECTED,
          ].includes(status)
            ? notDefaultLanguage.id
            : null,
        },
        {
          userVotes: [getRandomUser(users)],
        },
      ),
    );
  }

  for (const story of stories) {
    comments.push(
      await addComment(
        {
          storyId: story.id,
          parentId: story.id === stories[0].id ? comments[2].id : undefined,
          status:
            story.id === stories[0].id
              ? COMMENT_STATUS.PUBLISHED
              : COMMENT_STATUS.REJECTED,
          userId: getRandomUser(users).id,
        },
        {
          userVotes: [getRandomUser(users)],
        },
      ),
    );
  }

  return {
    views,
    phrase,
    organizations,
    rejectReasons,
    users,
    voutes,
    languages,
    stories,
    comments,
  };
};
