import { faker } from '@faker-js/faker';
import { CommentEntity } from '../../src/comment/entity/comment.entity';
import { CommentVoteEntity } from '../../src/comment/entity/comment-vote.entity';
import { UserEntity } from '../../src/user/entity/user.entity';
import { In, UpdateResult, DeleteResult } from 'typeorm';
import config from '../../src/config/typeorm';
import { getConnection } from '../../src/common/helpers';
import { generateHash } from '../../src/common/helpers';
import { getRandomStatusForComment } from './story.mock';
import { CommentTranslationEntity } from '../../src/comment/entity/comment-translation.entity';
import { getLanguages } from './language.mock';
import { COMMENT_STATUS } from '@ourloop/shared';
import { TRANSLATION_TYPE_CONSTANTS } from '../../src/common/constant/translation-type.constant';
import { CHANNEL_CONSTANTS } from '../../src/common/constant/channel.constant';
import { CommentRejectReasonEntity } from '../../src/comment/entity/comment-reject-reason.entity';
import { CommentRecipientEntity } from '../../src/comment/entity/comment-recipient.entity';

interface CommentData {
  storyId: string;
  userId?: string;
  parentId?: string;
  status?: string;
  languageId?: number;
  channel?: CHANNEL_CONSTANTS;
  publishedAt?: Date;
  createdAt?: Date;
}

export const getCommentStub = (data: CommentData): CommentEntity => {
  const comment = new CommentEntity();
  const recipient = new CommentRecipientEntity();
  comment.recipient = recipient;
  comment.id = faker.string.uuid();
  comment.recipient.email = faker.internet.email();
  comment.storyId = data.storyId;
  comment.status =
    data.status !== undefined
      ? data.status
      : getRandomStatusForComment(COMMENT_STATUS);
  comment.parentCommentId = data.parentId || null;
  comment.userId = data.userId || null;
  comment.channel = data.channel || undefined;
  comment.recipient.nickname = faker.internet.userName();
  comment.languageId = data?.languageId ?? 1;
  comment.publishedAt = data?.publishedAt || undefined;
  comment.createdAt = data?.createdAt || undefined;

  return comment;
};

export const getTranslationStub = (data: {
  commentId: string;
  languageId: number;
  type: TRANSLATION_TYPE_CONSTANTS;
  content?: string;
}): CommentTranslationEntity => {
  const translation = new CommentTranslationEntity();

  translation.type = data.type;
  translation.languageId = data.languageId;
  translation.commentId = data.commentId;
  translation.content = data?.content || faker.lorem.sentence();

  return translation;
};

export const addComment = async (
  data: CommentData & { content?: string },
  relations: { userVotes?: UserEntity[] } = {},
): Promise<CommentEntity> => {
  const connection = await getConnection(config);
  const languages = await getLanguages();
  const comment = getCommentStub(data);
  const operations = [];

  comment.translations = [];

  for (const language of languages) {
    comment.translations.push(
      getTranslationStub({
        commentId: comment.id,
        languageId: language.id,
        type:
          comment.languageId === language.id
            ? TRANSLATION_TYPE_CONSTANTS.MANUAL
            : TRANSLATION_TYPE_CONSTANTS.MACHINE,

        content: language.isDefault && data?.content ? data.content : undefined,
      }),
    );
  }

  await connection
    .getRepository(CommentRecipientEntity)
    .save(comment.recipient);
  await connection.getRepository(CommentEntity).save(comment);

  if (relations.userVotes) {
    for (const user of relations.userVotes) {
      operations.push(
        connection.getRepository(CommentVoteEntity).save({
          commentId: comment.id,
          hash: generateHash(faker.internet.ip(), faker.internet.userAgent()),
          userId: user.id,
        }),
      );
    }
  }

  if (operations.length > 0) {
    await Promise.all(operations);
  }

  return comment;
};

export const getComments = async (
  params: { status?: string; ids?: string[] } = {},
): Promise<CommentEntity[]> => {
  const where: { status?: string; id?: any } = {};

  if (params.status) {
    where.status = params.status;
  }

  if (params.ids) {
    where.id = In(params.ids);
  }

  const connection = await getConnection(config);

  return connection.getRepository(CommentEntity).find({
    where,
    order: {
      createdAt: 'DESC',
    },
    relations: [
      'language',
      'user',
      'user.organisation',
      'votes',
      'children',
      'children.user',
      'children.user.organisation',
      'children.votes',
      'children.translations',
      'children.translations.language',
      'translations',
      'translations.language',
      'rejectReasons',
      'rejectReasons.rejectReason',
      'story',
      'story.language',
      'story.country',
      'story.categories',
      'recipient',
    ],
  });
};

export const getCommentById = async (
  id: string,
  relations: string[] = [],
): Promise<CommentEntity> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(CommentEntity)
    .findOne({ where: { id }, relations });
};

export const getCommentByContent = async (
  content: string,
  relations: string[] = [],
): Promise<CommentEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CommentEntity).findOne({
    relations,
    join: {
      alias: 'story',
      leftJoin: {
        translations: 'story.translations',
      },
    },
    where: {
      translations: {
        content,
      },
    },
  });
};

export const getCommentByStatus = async (
  status: string,
): Promise<CommentEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CommentEntity).findOne({
    where: {
      status,
    },
  });
};

export const updateComment = async (
  id: string,
  data: {
    languageId?: number;
    publishedAt?: Date;
    rejectRationale?: string;
  } = {},
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(CommentEntity).update(id, data);
};

export const assignRejectReasonToComment = async (
  commentId: string,
  rejectReasonId: number,
  rejectReasonText: string,
): Promise<CommentRejectReasonEntity> => {
  const connection = await getConnection(config);

  return connection.getRepository(CommentRejectReasonEntity).save({
    commentId,
    rejectReasonId,
    rejectReasonText,
  });
};

export const removeTranslationByCommentIdAndLanguageId = async (
  commentId: string,
  languageId: number,
): Promise<DeleteResult> => {
  const connection = await getConnection(config);

  return connection
    .getRepository(CommentTranslationEntity)
    .delete({ commentId, languageId });
};

export const addCommentTranslation = async (
  commentId: string,
  originLanguageId: number,
  languageId: number,
): Promise<CommentTranslationEntity> => {
  const connection = await getConnection(config);
  const translation = getTranslationStub({
    commentId,
    languageId,
    type:
      languageId === originLanguageId
        ? TRANSLATION_TYPE_CONSTANTS.MANUAL
        : TRANSLATION_TYPE_CONSTANTS.MACHINE,
  });

  return connection.getRepository(CommentTranslationEntity).save(translation);
};

export const updateCommentTranslationStatus = async (
  id: number,
  status: number,
): Promise<UpdateResult> => {
  const connection = await getConnection(config);

  return connection.getRepository(CommentTranslationEntity).update(id, {
    status,
  });
};
