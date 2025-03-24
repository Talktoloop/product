import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { clearDatabase } from './helpers';
import { getAppInstance } from './mocks/app.mock';
import { ROLE } from '../src/user/constant/role.constant';
import { COMMENT_STATUS, _omit } from '@ourloop/shared';
import {
  getCommentStub,
  getTranslationStub,
  getCommentById,
  getComments,
  getCommentByContent,
  updateComment,
} from './entity/comment.mock';
import { initializeDataset, checkCommentDetails } from './helpers/comment';
import {
  addLanguage,
  setDefaultLanguage,
  getLanguageFromList,
  getRandomLanguageCode,
} from './entity/language.mock';
import { CommentEntity } from 'src/comment/entity/comment.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../src/common/constant/translation-type.constant';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';
import { configMock } from './mocks/config.mock';
import { faker } from '@faker-js/faker';

describe('CommentController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  let dataset: any;
  let comments = [];

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

  describe('/comment/:storyId (GET)', () => {
    it('Should find comments by with status ACCEPTED without parent and return status 200 and valid body', async () => {
      comments = await getComments({ status: COMMENT_STATUS.PUBLISHED });
      const story = dataset.stories[0];
      for (const language of dataset.languages) {
        await api
          .get(`/comment/${story.id}`)
          .set('content-language', language.code)
          .expect(async (res) => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();

            const numeberOfComments = dataset.comments.filter(
              (item) =>
                item.status == COMMENT_STATUS.PUBLISHED &&
                item.storyId === story.id &&
                !item.parentCommentId,
            ).length;
            expect(numeberOfComments).toBe(res.body.length);
            for (const item of res.body) {
              checkCommentDetails(
                item,
                comments.filter((element) => element.id == item.id)[0],
                ['user', 'children', 'votes', 'translations'],
                language.id,
              );
            }
          });
      }
    });

    it('Should find comments with default translation, return status 200 and valid body', async () => {
      const story = dataset.stories[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const notDefaultLanguage = getLanguageFromList(dataset.languages, false);

      for (const entity of comments) {
        updateComment(entity.id, { languageId: notDefaultLanguage.id });
      }

      const { body } = await api
        .get(`/comment/${story.id}`)
        .set('content-language', getRandomLanguageCode())
        .send();

      let comment: CommentEntity;

      for (const entity of comments) {
        updateComment(entity.id, {
          languageId: defaultLanguage.id,
        });
      }

      expect(Array.isArray(body)).toBeTruthy();

      for (const item of body) {
        comment = comments.filter((entity) => entity.id === item.id)[0];

        expect(body.filter((entity) => entity.id === comment.id).length).toBe(
          1,
        );
        expect(
          comment?.translations.filter(
            (entity) => entity.languageId === defaultLanguage.id,
          )[0]?.content,
        ).toBe(item.content);
      }
    });

    it('Should find comments with original translation, return status 200 and valid body', async () => {
      const story = dataset.stories[0];
      const comment = comments[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const newLanguage = await addLanguage({
        isDefault: true,
      });

      await setDefaultLanguage(newLanguage.id);

      const { body } = await api
        .get(`/comment/${story.id}`)
        .set('content-language', getRandomLanguageCode())
        .send();

      await setDefaultLanguage(defaultLanguage.id);

      expect(Array.isArray(body)).toBeTruthy();

      for (const item of body) {
        if (item.id === comment.id) {
          expect(
            comment?.translations.filter(
              (entity) => entity.languageId === comment.languageId,
            )[0]?.content,
          ).toBe(item.content);
        }
      }
    });
  });

  describe('/comment/:storyId (POST)', () => {
    it('Should return status 403', async () => {
      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.onlyGetRequest') {
            return true;
          }
        }),
      );

      const story = dataset.stories[0];
      const language = dataset.languages[ROLE.USER];
      const content = faker.lorem.sentence();

      return api
        .post(`/comment/${story.id}`)
        .set('Authorization', String(ROLE.USER))
        .set('content-language', language.code)
        .type('form')
        .send({ content })
        .then(async (res) => {
          expect(res.status).toBe(403);
        });
    });

    for (const role of [ROLE.USER, undefined]) {
      it(`Should add comment by user with role ${role}, return status 201 and valid body`, async () => {
        const story = dataset.stories[0];
        const details = getCommentStub({
          storyId: story.id,
        });
        const language = dataset.languages[+(role !== undefined)];
        const translation = getTranslationStub({
          commentId: details.id,
          languageId: language.id,
          type:
            language.id === details.languageId
              ? TRANSLATION_TYPE_CONSTANTS.MANUAL
              : TRANSLATION_TYPE_CONSTANTS.MACHINE,
        });
        await api
          .post(`/comment/${story.id}`)
          .set('Authorization', String(role))
          .set('content-language', language.code)
          .type('form')
          .send(
            _omit(
              {
                ...translation,
                content: translation.content,
                email: details.recipient.email,
                nickname: details.recipient.nickname,
              },
              [
                'id',
                'status',
                'storyId',
                'userId',
                'languageId',
                'commentId',
                'type',
              ],
            ),
          )
          .then(async (res) => {
            expect(res.status).toBe(201);
            expect(res.body.success).toBeTruthy();
          });

        const dbComment = await getCommentByContent(translation.content, [
          'translations',
        ]);

        expect(dbComment.status === COMMENT_STATUS.PENDING_REVIEW).toBeTruthy();
        expect(dbComment?.translations[0]?.languageId).toBe(language.id);
        expect(dbComment?.languageId).toBe(language.id);
      });
    }
  });

  describe('/comment/:id/vote (PUT)', () => {
    it('Should add vote and return status 200 and valid body', async () => {
      const comment = dataset.comments[0];
      const commentBefore = await getCommentById(comment.id, ['votes']);

      await api
        .put(`/comment/${comment.id}/vote`)
        .set('Authorization', String(ROLE.USER))
        .send()
        .then(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const commentAfter = await getCommentById(comment.id, ['votes']);
      expect(commentBefore.votes.length + 1).toBe(commentAfter.votes.length);
    });
  });

  describe('/comment/:id/unvote (PUT)', () => {
    it('Should remove vote and return status 200 and valid body', async () => {
      const comment = dataset.comments[0];

      return api
        .put(`/comment/${comment.id}/unvote`)
        .set('Authorization', String(ROLE.USER))
        .send()
        .then(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });
    });
  });
});
