import { faker } from '@faker-js/faker';
import { StoryEntity } from '../../src/story/entity/story.entity';
import { ThematicEntity } from '../../src/lexicon/entity/thematic.entity';
import { OrganisationEntity } from '../../src/organisation/entity/organisation.entity';
import { In, UpdateResult, DeleteResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { STORY_STATUS } from '@ourloop/shared';
import { UserEntity } from '../../src/user/entity/user.entity';
import { getCommentStub, addComment } from './comment.mock';
import { StoryVoteEntity } from '../../src/story/entity/story-vote.entity';
import { StoryViewEntity } from '../../src/story/entity/story-view.entity';
import { generateHash } from '../../src/common/helpers';
import { CategoryEntity } from '../../src/category/entity/category.entity';
import { DifficultyEntity } from '../../src/lexicon/entity/difficulty.entity';
import { MaternityStatusEntity } from '../../src/lexicon/entity/maternity-status.entity';
import getRandomValueWithExcluded from '../../src/migrations/utils/get-random-value-with-excluded';
import { StoryTranslationEntity } from '../../src/story/entity/story-translation.entity';
import { getLanguages } from './language.mock';
import { TRANSLATION_TYPE_CONSTANTS } from '../../src/common/constant/translation-type.constant';
import { CHANNEL_CONSTANTS } from '../../src/common/constant/channel.constant';
import { MARKED_AS_SENSITIVE_BY } from '../../src/common/constant/marked-as-sensitive.constant';
import { StoryConversationEntity } from '../../src/story/entity/story-conversation.entity';
import { StoryRecipientEntity } from '../../src/story/entity/story-recipient.entity';

interface StoryDataInterface {
  place?: string;
  difficulty?: number;
  status?: STORY_STATUS;
  languageId?: number;
  conversationId?: number;
  messengerConversationId?: number;
  age?: number;
  gender?: number;
  channel?: CHANNEL_CONSTANTS;
  phone?: string;
  countryId?: number;
  isSensitive?: boolean;
  markedAsSensitiveByRole?: MARKED_AS_SENSITIVE_BY;
  markedAsSensitiveByUserId?: string;
  publishedAt?: Date;
  createdAt?: Date;
  publishedBy?: string;
  recipientId?: number;
  regionId?: number;
}

export const getRandomStatus = (
  statuses: Record<string, string>,
  excluded: string[] = [],
): STORY_STATUS => {
  return getRandomValueWithExcluded(
    Object.values(statuses).filter(
      (value) => value && !excluded.includes(value),
    ),
  );
};

export const getRandomStatusForComment = (
  statuses: Record<string, string>,
  excluded: string[] = [],
): string => {
  return getRandomValueWithExcluded(
    Object.values(statuses).filter(
      (value) => value && !excluded.includes(value),
    ),
  );
};

export const getStoryStub = (data?: StoryDataInterface): StoryEntity => {
  const story = new StoryEntity();

  story.id = faker.string.uuid();
  story.place = data?.place ?? faker.location.city();
  story.isSensitive = data?.isSensitive ?? undefined;
  story.markedAsSensitiveByRole = data?.markedAsSensitiveByRole ?? undefined;
  story.markedAsSensitiveByUserId =
    data?.markedAsSensitiveByUserId ?? undefined;
  story.conversationId = data?.conversationId ?? undefined;
  story.recipientId = data?.recipientId ?? undefined;
  story.status =
    data?.status !== undefined ? data.status : getRandomStatus(STORY_STATUS);
  story.countryId = data?.countryId;
  story.channel = data?.channel ?? undefined;
  story.createdAt = data?.createdAt ?? undefined;
  story.statusChangedByUserId = data?.publishedBy ?? undefined;
  story.languageId = data?.languageId ?? 1;
  if (story.status === STORY_STATUS.PUBLISHED) {
    story.publishedAt = data?.publishedAt ?? new Date();
  }

  return story;
};

export const getTranslationStub = (data: {
  storyId: string;
  languageId: number;
  type: TRANSLATION_TYPE_CONSTANTS;
  content?: string;
}): StoryTranslationEntity => {
  const translation = new StoryTranslationEntity();

  translation.type = data.type;
  translation.languageId = data.languageId;
  translation.storyId = data.storyId;
  translation.content = data?.content || faker.lorem.sentence();

  return translation;
};

export const addStory = async (
  data: StoryDataInterface & { content?: string; publishedAt?: Date },
  relations?: {
    thematics?: ThematicEntity[];
    categories?: CategoryEntity[];
    difficulties?: DifficultyEntity[];
    organizations?: OrganisationEntity[];
    maternityStatuses?: MaternityStatusEntity[];
    comments?: {
      status: string;
      author: UserEntity;
      publishedAt?: Date;
      createdAt?: Date;
    }[];
    voutes?: UserEntity[];
    views?: number;
    author?: UserEntity;
    storyConversation?: StoryConversationEntity;
    storyRecipient?: StoryRecipientEntity;
  },
): Promise<StoryEntity> => {
  const operations = [];
  const connection = await getConnection(config);
  const languages = await getLanguages();
  const story = getStoryStub(data);

  if (relations?.thematics) {
    story.thematics = relations.thematics;
  }
  if (relations?.organizations) {
    story.organisations = relations.organizations;
  }
  if (relations?.categories) {
    story.categories = relations.categories;
  }
  if (relations?.difficulties) {
    story.difficulties = relations.difficulties;
  }
  if (relations?.maternityStatuses) {
    story.maternityStatus = relations.maternityStatuses;
  }
  if (relations?.author) {
    story.user = relations.author;
  }

  if (relations?.storyConversation) {
    story.conversation = relations.storyConversation;
  }

  if (relations?.storyRecipient) {
    story.recipient = relations.storyRecipient;
  }

  story.translations = [];

  for (const language of languages) {
    story.translations.push(
      getTranslationStub({
        storyId: story.id,
        type:
          story.languageId === language.id
            ? TRANSLATION_TYPE_CONSTANTS.MANUAL
            : TRANSLATION_TYPE_CONSTANTS.MACHINE,
        languageId: language.id,
        content: language.isDefault && data?.content ? data.content : undefined,
      }),
    );
  }

  await connection.getRepository(StoryEntity).save(story);

  if (relations?.comments) {
    for (const comment of relations.comments) {
      operations.push(
        addComment(
          getCommentStub({
            storyId: story.id,
            status: comment.status,
            userId: comment.author?.id,
            publishedAt: comment.publishedAt,
            createdAt: comment.createdAt,
          }),
        ),
      );
    }
  }

  if (relations?.voutes) {
    for (const user of relations.voutes) {
      operations.push(
        connection.getRepository(StoryVoteEntity).save({
          storyId: story.id,
          hash: generateHash(faker.internet.ip(), faker.internet.userAgent()),
          userId: user.id,
        }),
      );
    }
  }

  if (relations?.views) {
    while (relations.views > 0) {
      operations.push(
        connection.getRepository(StoryViewEntity).save({
          storyId: story.id,
          hash: generateHash(faker.internet.ip(), faker.internet.userAgent()),
        }),
      );

      relations.views--;
    }
  }

  if (operations.length > 0) {
    await Promise.all(operations);
  }

  return story;
};

export const getStories = async (
  params: { languageId?: number; ids?: string[]; countryId?: number } = {},
): Promise<StoryEntity[]> => {
  const where: { languageId?: number; id?: any; countryId?: number } = {};

  if (params.languageId) {
    where.languageId = params.languageId;
  }

  if (params.ids) {
    where.id = In(params.ids);
  }

  if (params.countryId) {
    where.countryId = params.countryId;
  }

  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).find({
    where,
    order: {
      createdAt: 'DESC',
    },
    relations: [
      'language',
      'country',
      'organisations',
      'commentsRel',
      'commentsRel.user',
      'votes',
      'views',
      'user',
      'user.organisation',
      'categories',
      'difficulties',
      'maternityStatus',
      'translations',
      'translations.language',
      'conversation',
      'conversation.smsMessages',
      'conversation.smsMessages.user',
      'conversation.messengerMessages',
      'thematics',
      'recipient',
    ],
  });
};

export const getStoryById = async (
  id: string,
  relations: string[] = [],
): Promise<StoryEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryEntity)
    .findOne({ where: { id }, relations });
};

export const getStoryByContent = async (
  content: string,
  relations: string[] = [],
): Promise<StoryEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).findOne({
    relations,
    join: {
      alias: 'story',
      leftJoin: {
        translations: 'story.translations',
        recipient: 'story.recipient',
      },
    },
    where: {
      translations: {
        content,
      },
    },
  });
};

export const getStoryByStatus = async (
  status: STORY_STATUS,
  relations: string[] = [],
): Promise<StoryEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).findOne({
    where: {
      status,
    },
    relations,
  });
};

export const getStoryByIds = async (ids: string[]): Promise<StoryEntity[]> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).findByIds(ids);
};

export const updateStory = async (
  id: string,
  data: {
    languageId?: number;
    userId?: string;
    email?: string;
    difficulty?: number;
    channel?: CHANNEL_CONSTANTS;
    conversationId?: number;
  },
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryEntity).update(id, data);
};

export const removeTranslationByStoryIdAndLanguageId = async (
  storyId: string,
  languageId: number,
): Promise<DeleteResult> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(StoryTranslationEntity)
    .delete({ storyId, languageId });
};

export const addStoryTranslation = async (
  storyId: string,
  originLanguageId: number,
  languageId: number,
): Promise<StoryTranslationEntity> => {
  const connection = await getConnection(config);
  const translation = getTranslationStub({
    storyId,
    languageId,
    type:
      languageId === originLanguageId
        ? TRANSLATION_TYPE_CONSTANTS.MANUAL
        : TRANSLATION_TYPE_CONSTANTS.MACHINE,
  });

  return connection.getRepository(StoryTranslationEntity).save(translation);
};

export const updateStoryTranslationS = async (
  storyId: string,
  originLanguageId: number,
  languageId: number,
): Promise<StoryTranslationEntity> => {
  const connection = await getConnection(config);
  const translation = getTranslationStub({
    storyId,
    languageId,
    type:
      languageId === originLanguageId
        ? TRANSLATION_TYPE_CONSTANTS.MANUAL
        : TRANSLATION_TYPE_CONSTANTS.MACHINE,
  });

  return connection.getRepository(StoryTranslationEntity).save(translation);
};

export const updateStoryTranslationStatus = async (
  id: number,
  status: number,
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryTranslationEntity).update(id, {
    status,
  });
};

export const updateStoryTranslationContent = async (
  id: number,
  content: string,
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(StoryTranslationEntity).update(id, {
    content,
  });
};
