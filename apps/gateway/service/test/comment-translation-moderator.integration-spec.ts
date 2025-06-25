import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { clearDatabase } from './helpers';
import { getAppInstance } from './mocks/app.mock';
import { ROLE } from '../src/user/constant/role.constant';
import {
  getCommentById,
  updateCommentTranslationStatus,
  removeTranslationByCommentIdAndLanguageId,
} from './entity/comment.mock';
import { initializeDataset } from './helpers/comment';
import {
  COMMENT_NOT_FOUND,
  COMMENT_TRANSLATION_UPDATE_ERROR,
  LANGUAGE_NOT_FOUND,
} from '@ourloop/shared';
import { TRANSLATION_TYPE_CONSTANTS } from '../src/common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../src/common/constant/translation-status.constants';
import { awsTranslationMock } from './mocks/aws-translation.mock';
import { getRandomLanguageCode } from './entity/language.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('CommentTranslationModeratorController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  let dataset: any;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    dataset = await initializeDataset();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe('/comment/moderator/:id/translation (DELETE)', () => {
    it('Should return status 400 and error COMMENT_NOT_FOUND', async () =>
      api
        .delete(`/comment/moderator/${faker.string.uuid()}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(COMMENT_NOT_FOUND);
          expect(res.status).toBe(400);
        }));

    it('Should return status 200 and key success with false value', async () => {
      const comment = await getCommentById(dataset.comments[3].id, [
        'language',
        'translations',
        'translations.language',
      ]);

      await api
        .delete(`/comment/moderator/${comment.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: comment.language.code,
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });

      return api
        .delete(`/comment/moderator/${comment.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });
    });

    it('Should delete comment translation and return status 200 and valid body', async () => {
      const comment = dataset.comments[3];
      const commentBeforeChanges = await getCommentById(comment.id, [
        'translations',
        'translations.language',
      ]);
      const code = commentBeforeChanges.translations[0].language.code;

      await api
        .delete(`/comment/moderator/${comment.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: code,
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const commentAfterChanges = await getCommentById(comment.id, [
        'translations',
        'translations.language',
      ]);

      expect(
        commentAfterChanges.translations.find(
          (translation) => translation.language.code === code,
        ),
      ).toBeUndefined();
    });
  });

  describe('/comment/moderator/:id/translation/verify (PUT)', () => {
    it('Should return status 400 and error COMMENT_NOT_FOUND', async () =>
      api
        .put(`/comment/moderator/${faker.string.uuid()}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(COMMENT_NOT_FOUND);
          expect(res.status).toBe(400);
        }));

    it('Should update comment translation ,return status 200 and key success with FALSE value', async () => {
      const comment = await getCommentById(dataset.comments[1].id, [
        'language',
      ]);

      await api
        .put(`/comment/moderator/${comment.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: comment.language.code,
          content: faker.lorem.sentence(),
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });

      return api
        .put(`/comment/moderator/${comment.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });
    });

    it('Should update story translation ,return status 200 and key success with TRUE value', async () => {
      const comment = dataset.comments[1];
      const commentBeforeChanges = await getCommentById(comment.id, [
        'translations',
        'translations.language',
      ]);
      const translation = commentBeforeChanges.translations[0];

      expect(translation.type).toBe(TRANSLATION_TYPE_CONSTANTS.MACHINE);

      await api
        .put(`/comment/moderator/${comment.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
          content: faker.lorem.sentence(),
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const commentAfterChanges = await getCommentById(comment.id, [
        'translations',
      ]);

      expect(
        commentAfterChanges.translations.find(
          (item) => item.id === translation.id,
        )?.type,
      ).toBe(TRANSLATION_TYPE_CONSTANTS.MANUAL);
    });
  });

  describe('/story/moderator/:id/translation/retry (PUT)', () => {
    it('Should return status 400 and error STORY_TRANSLATION_UPDATE_ERROR', async () => {
      return api
        .put(`/comment/moderator/${dataset.comments[1].id}/translation/retry`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(COMMENT_TRANSLATION_UPDATE_ERROR);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 200 and valid body', async () => {
      const comment = await getCommentById(dataset.comments[1].id, [
        'translations',
        'translations.language',
      ]);
      const translation = comment.translations.find(
        (translation) => translation.languageId !== comment.languageId,
      );

      await updateCommentTranslationStatus(
        translation.id,
        TRANSLATION_STATUS_CONSTANTS.ERROR,
      );

      return api
        .put(`/comment/moderator/${comment.id}/translation/retry`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });
    });
  });

  describe('/comment/moderator/:id/translation (POST)', () => {
    it('Should return status 400 and error LANGUAGE_NOT_FOUND', async () => {
      return api
        .post(`/comment/moderator/${dataset.comments[1].id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(LANGUAGE_NOT_FOUND);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 200 and valid body', async () => {
      const commentBefore = await getCommentById(dataset.comments[1].id, [
        'translations',
        'translations.language',
      ]);
      const translation = commentBefore.translations.find(
        (translation) => translation.languageId !== commentBefore.languageId,
      );

      await removeTranslationByCommentIdAndLanguageId(
        commentBefore.id,
        translation.languageId,
      );

      const content = faker.lorem.sentence();

      jest.spyOn(awsTranslationMock, 'send').mockImplementationOnce(
        jest.fn((params, cb) =>
          cb(undefined, {
            ResultList: [
              {
                Index: 0,
                Languages: [
                  { LanguageCode: translation.language.code, Score: 0.9 },
                ],
              },
            ],
            ErrorList: [],
          }),
        ),
      );

      await api
        .post(`/comment/moderator/${commentBefore.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
          content,
        })
        .expect(async (res) => {
          expect(res.status).toBe(201);
          expect(res.body.success).toBeTruthy();
        });

      const commentAfter = await getCommentById(dataset.comments[1].id, [
        'translations',
        'translations.language',
      ]);

      expect(
        commentAfter.translations.find(
          (item) => item.languageId === translation.languageId,
        ).content,
      ).toBe(content);
    });
  });
});
