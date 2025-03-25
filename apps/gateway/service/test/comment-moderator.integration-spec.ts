import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import { differenceInMilliseconds } from 'date-fns';
import { clearDatabase, checkPagination } from './helpers';
import { getAppInstance } from './mocks/app.mock';
import { ROLE } from '../src/user/constant/role.constant';
import { OrderEnum } from '../src/common/types';
import {
  getCommentById,
  getComments,
  updateComment,
  addComment,
  removeTranslationByCommentIdAndLanguageId,
  getCommentByStatus,
  assignRejectReasonToComment,
} from './entity/comment.mock';
import {
  initializeDataset,
  checkCommentProperties,
  checkCommentDetails,
} from './helpers/comment';
import { getRandomRejectReason } from './entity/reject-reason.mock';
import {
  STORY_INCORRECT_STATUS,
  COMMENT_INCORRECT_STATUS,
  TRANSLATIONS_ARE_NEEDED,
  LANGUAGE_NOT_FOUND,
  VALIDATION_FAILED,
  COMMENT_STATUS,
} from '@ourloop/shared';
import {
  getLanguageFromList,
  addLanguage,
  setDefaultLanguage,
  getRandomLanguageCode,
  getDefaultLanguage,
} from './entity/language.mock';
import { TRANSLATION_STATUS_CONSTANTS } from '../src/common/constant/translation-status.constants';
import { CHANNEL_CONSTANTS } from '../src/common/constant/channel.constant';
import { PROVIDER_TYPE } from '../src/language/interface/provider.enum';
import { awsTranslationMock } from './mocks/aws-translation.mock';
import { getStoryById } from './entity/story.mock';
import { getCountryById } from './entity/country.mock';
import { addStory } from './entity/story.mock';
import { getLanguageById } from './entity/language.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('CommentModeratorController (integration)', () => {
  const pageNumber = 1;
  const limit = 2;
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

  describe('/comment/moderator/scheduled (GET)', () => {
    it(`Should find scheduled comments by language code, return status 200 and valid body`, async () => {
      const country = await getCountryById(dataset.stories[0].countryId);
      const language = await getLanguageById(dataset.stories[0].languageId);

      await addComment({
        status: COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        storyId: dataset.stories[0].id,
      });

      comments = await getComments();

      const filteredComments = comments.filter(
        (comment) =>
          comment.status === COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
      );

      for (const filteredComment of filteredComments) {
        await api
          .get(
            `/comment/moderator/scheduled?country=${country.code}&channel=${filteredComment.channel}&language=${filteredComment.language?.code}&limit=10&page=1`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            expect(res.status).toBe(200);
            expect(res.body.items.length).toBe(1);
            for (const item of res.body.items) {
              expect(item.storyLanguage).toBe(language?.code);
              expect(item.language).toBe(filteredComment.language?.code);
              expect(item.content).toBe(
                filteredComment.translations.find(
                  (translation) =>
                    translation.languageId === filteredComment.languageId,
                )?.content,
              );
              expect(item.authorNickname).toBe(
                filteredComment.recipient.nickname,
              );
            }
          });
      }
    });

    for (const order of Object.values(OrderEnum)) {
      it(`Should return scheduled comments in order: ${order}, status 200 and valid body`, async () => {
        if (order == OrderEnum.asc) {
          await Promise.all([
            addComment({
              status: COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
              storyId: dataset.stories[0].id,
            }),
            addComment({
              status: COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
              storyId: dataset.stories[0].id,
            }),
          ]);

          comments = await getComments();
        }

        return api
          .get(
            `/comment/moderator/scheduled?page=${pageNumber}&limit=${limit}&order=${order}`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            checkPagination(res, { page: pageNumber, limit });

            expect(res.body.items.length).toBe(limit);
            expect(
              differenceInMilliseconds(
                new Date(res.body.items[1].createdAt),
                new Date(res.body.items[0].createdAt),
              ) > 0,
            ).toBe(order === OrderEnum.asc);

            let comment;

            for (const item of res.body.items) {
              comment = comments.find((comment) => comment.id === item.id);
              expect(item.categories).toStrictEqual(
                comment.story?.categories
                  .sort((prev, next) => prev.order - next.order)
                  .map((category) => category.code),
              );
              expect(item.status).toBe(
                COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
              );
              expect(item.country).toBe(comment.story.country.code);
              checkCommentProperties(item, comment);
            }
          });
      });
    }
  });

  describe('/comment/moderator/pending-recording (GET)', () => {
    it(`Should find pending recording comments by language code, return status 200 and valid body`, async () => {
      const country = await getCountryById(dataset.stories[0].countryId);
      const language = await getLanguageById(dataset.stories[0].languageId);

      await addComment({
        status: COMMENT_STATUS.PENDING_RECORDING,
        storyId: dataset.stories[0].id,
      });

      comments = await getComments();

      const filteredComments = comments.filter(
        (comment) => comment.status === COMMENT_STATUS.PENDING_RECORDING,
      );

      for (const filteredComment of filteredComments) {
        await api
          .get(
            `/comment/moderator/pending-recording?country=${country.code}&channel=${filteredComment.channel}&language=${filteredComment.language?.code}&limit=10&page=1`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            expect(res.status).toBe(200);

            expect(res.body.items.length).toBe(1);
            for (const item of res.body.items) {
              expect(item.storyPublishedBy).toBeDefined();
              expect(item.storyLanguage).toBe(language?.code);
              expect(item.language).toBe(filteredComment.language?.code);
              expect(item.content).toBe(
                filteredComment.translations.find(
                  (translation) =>
                    translation.languageId === filteredComment.languageId,
                )?.content,
              );
              expect(item.authorNickname).toBe(
                filteredComment.recipient.nickname,
              );
            }
          });
      }
    });

    for (const order of Object.values(OrderEnum)) {
      it(`Should return pending recording comments in order: ${order}, status 200 and valid body`, async () => {
        if (order == OrderEnum.asc) {
          await Promise.all([
            addComment({
              status: COMMENT_STATUS.PENDING_RECORDING,
              storyId: dataset.stories[0].id,
            }),
            addComment({
              status: COMMENT_STATUS.PENDING_RECORDING,
              storyId: dataset.stories[0].id,
            }),
          ]);

          comments = await getComments();
        }

        return api
          .get(
            `/comment/moderator/pending-recording?page=${pageNumber}&limit=${limit}&order=${order}`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            checkPagination(res, { page: pageNumber, limit });

            expect(res.body.items.length).toBe(limit);
            expect(
              differenceInMilliseconds(
                new Date(res.body.items[1].createdAt),
                new Date(res.body.items[0].createdAt),
              ) > 0,
            ).toBe(order === OrderEnum.asc);

            for (const item of res.body.items) {
              expect(item.status).toBe(COMMENT_STATUS.PENDING_RECORDING);
              checkCommentProperties(
                item,
                comments.find((comment) => comment.id === item.id),
              );
            }
          });
      });
    }
  });

  describe('/comment/moderator/pending (GET)', () => {
    for (const order of Object.values(OrderEnum)) {
      it(`Should return pending comments in order: ${order}, status 200 and valid body`, async () => {
        if (order == OrderEnum.asc) {
          comments = await getComments();
        }

        return api
          .get(
            `/comment/moderator/pending?page=${pageNumber}&limit=${limit}&order=${order}`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            checkPagination(res, { page: pageNumber, limit });

            expect(res.body.items.length).toBe(limit);
            expect(
              differenceInMilliseconds(
                new Date(res.body.items[1].createdAt),
                new Date(res.body.items[0].createdAt),
              ) > 0,
            ).toBe(order === OrderEnum.asc);

            for (const item of res.body.items) {
              expect(COMMENT_STATUS.PENDING_REVIEW).toBe(item.status);
              checkCommentProperties(
                item,
                comments.find((comment) => comment.id === item.id),
              );
            }
          });
      });
    }

    it(`Should find pending comments by language code, return status 200 and valid body`, async () => {
      const filteredComments = comments.filter(
        (comment) => COMMENT_STATUS.PENDING_REVIEW === comment.status,
      );

      for (const filteredComment of filteredComments) {
        await api
          .get(
            `/comment/moderator/pending?language=${filteredComment.language?.code}&limit=10&page=1`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            expect(res.status).toBe(200);
            expect(res.body.items.length).toBe(2);

            for (const item of res.body.items) {
              expect(item.language).toBe(filteredComment.language?.code);
            }
          });
      }
    });
  });

  describe('/comment/moderator/:id (GET)', () => {
    it('Should return status 200 and valid body', async () => {
      const comment = dataset.comments[4];
      const rejectReason = getRandomRejectReason(dataset.rejectReasons);

      await updateComment(comment.id, {
        publishedAt: new Date(),
        rejectRationale: faker.lorem.sentence(),
      });
      await assignRejectReasonToComment(
        comment.id,
        rejectReason.id,
        faker.lorem.sentence(),
      );

      return api
        .get(`/comment/moderator/${comment.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          comments = await getComments();

          const commentDB = comments.find(
            (comment) => comment.id === res.body.id,
          );
          commentDB.rejectReasons.reverse();

          checkCommentProperties(res.body, commentDB);
          checkCommentDetails(res.body, commentDB, [
            'user',
            'votes',
            'storyLanguage',
          ]);
        });
    });

    it('Should return translations status', async () => {
      const comment = dataset.comments[0];

      return api
        .get(`/comment/moderator/${comment.id}`)
        .set('content-language', getRandomLanguageCode())
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.status).toBe(200);
          res.body.translations.map((entity) => {
            expect(entity.status).toBe(TRANSLATION_STATUS_CONSTANTS.TRANSLATED);
          });
        });
    });

    it('Should return status 200 and comment with original translation', async () => {
      const comment = dataset.comments[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const newLanguage = await addLanguage({
        isDefault: true,
      });

      await setDefaultLanguage(newLanguage.id);

      const { body } = await api
        .get(`/comment/moderator/${comment.id}`)
        .set('content-language', getRandomLanguageCode())
        .set('Authorization', String(ROLE.MODERATOR));

      await setDefaultLanguage(defaultLanguage.id);
      const commentDB = await getCommentById(comment.id, [
        'translations',
        'story',
        'story.language',
      ]);

      expect(body.s3FileId).toBeDefined();
      expect(body.storyLanguage).toBe(commentDB.story.language.code);
      expect(body.content).toBe(
        commentDB.translations.find(
          (translation) => translation.languageId === commentDB.languageId,
        )?.content,
      );
    });

    it('Should return status 200 and valid body for sms comment', async () => {
      const comment = await addComment({
        storyId: dataset.stories[0].id,
        channel: CHANNEL_CONSTANTS.SMS,
      });
      const story = await getStoryById(comment.storyId);

      return api
        .get(`/comment/moderator/${comment.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.body.id).toBe(comment.id);
          expect(res.body.channel).toBe(CHANNEL_CONSTANTS.SMS);
          expect(res.body.storyChannel).toBe(story.channel);
        });
    });
  });

  describe('/comment/moderator/rejected (GET)', () => {
    for (const order of Object.values(OrderEnum)) {
      it(`Should return rejected comments in order: ${order}, status 200 and valid body`, async () => {
        if (order == OrderEnum.asc) {
          comments = await getComments();
        }

        return api
          .get(
            `/comment/moderator/rejected?page=${pageNumber}&limit=${limit}&order=${order}`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            checkPagination(res, { page: pageNumber, limit });

            expect(res.body.items.length).toBe(limit);
            expect(
              differenceInMilliseconds(
                new Date(res.body.items[1].createdAt),
                new Date(res.body.items[0].createdAt),
              ) > 0,
            ).toBe(order === OrderEnum.asc);

            for (const item of res.body.items) {
              expect(item.status).toBe(COMMENT_STATUS.REJECTED);
              checkCommentProperties(
                item,
                comments.find((comment) => comment.id === item.id),
              );
            }
          });
      });
    }

    it(`Should find rejected comments by language code, return status 200 and valid body`, async () => {
      const filteredComments = comments.filter(
        (comment) => comment.status === COMMENT_STATUS.REJECTED,
      );

      for (const filteredComment of filteredComments) {
        await api
          .get(
            `/comment/moderator/rejected?language=${filteredComment.language?.code}&limit=10&page=1`,
          )
          .set('Authorization', String(ROLE.MODERATOR))
          .then(async (res) => {
            expect(res.status).toBe(200);
            expect(res.body.items.length).toBe(1);

            for (const item of res.body.items) {
              expect(item.language).toBe(filteredComment.language?.code);
            }
          });
      }
    });
  });

  describe('/comment/moderator/:id (PUT)', () => {
    it('Should return status 400 and error LANGUAGE_NOT_FOUND', async () => {
      const comment = await getCommentByStatus(COMMENT_STATUS.PENDING_REVIEW);
      const defaultLanguage = await getDefaultLanguage();

      if (comment) {
        await removeTranslationByCommentIdAndLanguageId(
          comment.id,
          defaultLanguage.id,
        );
      }

      return api
        .put(`/comment/moderator/${comment.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(LANGUAGE_NOT_FOUND);
          expect(res.status).toBe(400);
        });
    });

    it('Should update original language and return status 200 and valid body', async () => {
      const comment = await getCommentByStatus(COMMENT_STATUS.PENDING_REVIEW);
      const language = dataset.languages.filter(
        (language) => !language.isDefault,
      )[0];

      await api
        .put(`/comment/moderator/${comment.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: language.code,
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbComment = await getCommentById(comment.id, ['translations']);
      expect(dbComment.languageId).toBe(language.id);
    });

    for (const provider of [PROVIDER_TYPE.AWS, null]) {
      it(`Should return status 200 and original language should be changed to language with translation provider: ${provider}`, async () => {
        const comment = await addComment({
          storyId: dataset.stories[0].id,
          channel: CHANNEL_CONSTANTS.SMS,
          status: COMMENT_STATUS.PENDING_REVIEW,
        });
        const newOriginalLanguage = dataset.languages.find(
          (language) =>
            language.provider === provider && language.id !== comment.id,
        );
        const originalContent = comment.translations.find(
          (translation) => translation.languageId === comment.languageId,
        ).content;

        jest.spyOn(awsTranslationMock, 'send').mockImplementationOnce(
          jest.fn((params, cb) =>
            cb(undefined, {
              ResultList: [
                {
                  Index: 0,
                  Languages: [
                    { LanguageCode: newOriginalLanguage.code, Score: 0.81 },
                  ],
                },
              ],
              ErrorList: [],
            }),
          ),
        );

        await api
          .put(`/comment/moderator/${comment.id}`)
          .set('Authorization', String(ROLE.MODERATOR))
          .send({
            language: newOriginalLanguage.code,
          })
          .expect(async (res) => {
            expect(res.status).toBe(200);
            expect(res.body.success).toBeTruthy();
          });

        const updatedComment = await getCommentById(comment.id, [
          'translations',
        ]);

        expect(originalContent).toBe(
          updatedComment.translations.find(
            (translation) => translation.languageId === newOriginalLanguage.id,
          ).content,
        );

        expect(updatedComment.languageId).toBe(newOriginalLanguage.id);

        for (const translation of updatedComment.translations) {
          if (translation.id !== newOriginalLanguage.id) {
            expect(translation.content).toBe(
              provider
                ? comment.translations.find(
                    (entity) => entity.languageId === translation.languageId,
                  ).content
                : translation.content,
            );
          }
        }
      });
    }
  });

  describe('/comment/moderator/:id/reject (PUT)', () => {
    it('Should return status 400 and error VALIDATION_FAILED', async () => {
      const comment = dataset.comments[2];
      const firstRejectReason = getRandomRejectReason(dataset.rejectReasons);
      const secondRejectReason = getRandomRejectReason(dataset.rejectReasons, [
        firstRejectReason.id,
      ]);
      const reasonText = faker.lorem.sentence();
      const language = await addLanguage();

      await api
        .put(`/comment/moderator/${comment.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, firstRejectReason.id],
          reasonTexts: [reasonText, faker.lorem.sentence()],
          rationale: faker.lorem.sentence(),
          notificationLanguage: language.code,
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(VALIDATION_FAILED);
          expect(res.status).toBe(400);
        });

      return api
        .put(`/comment/moderator/${comment.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, secondRejectReason.id],
          reasonTexts: [reasonText, reasonText],
          rationale: faker.lorem.sentence(),
          notificationLanguage: language.code,
        })
        .expect(async (res) => {
          expect(res.body?.error?.code).toBe(VALIDATION_FAILED);
          expect(res.status).toBe(400);
        });
    });

    it('Should reject comment, return status 200 and valid body', async () => {
      const comment = dataset.comments[2];
      const language = await addLanguage();
      const firstRejectReason = getRandomRejectReason(dataset.rejectReasons);
      const secondRejectReason = getRandomRejectReason(dataset.rejectReasons, [
        firstRejectReason.id,
      ]);
      const rationale = faker.lorem.sentence();
      const firstReasonText = faker.lorem.sentence();
      const secondReasonText = faker.lorem.sentence();

      await api
        .put(`/comment/moderator/${comment.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, secondRejectReason.id],
          reasonTexts: [firstReasonText, secondReasonText],
          rationale,
          notificationLanguage: language.code,
        })
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbComment = await getCommentById(comment.id, ['rejectReasons']);

      expect(
        dbComment.rejectReasons.find(
          (rejectReason) =>
            rejectReason.rejectReasonId === firstRejectReason.id,
        ).rejectReasonText,
      ).toBe(firstReasonText);
      expect(
        dbComment.rejectReasons.find(
          (rejectReason) =>
            rejectReason.rejectReasonId === secondRejectReason.id,
        ).rejectReasonText,
      ).toBe(secondReasonText);
      expect(dbComment.rejectRationale).toBe(rationale);
      expect(dbComment.rejectReasonLanguageId).toBe(language.id);
    });
  });

  describe('/comment/moderator/:id/pending-recording (PUT)', () => {
    it('Should return status 400 and error STORY_INCORRECT_STATUS', async () => {
      let comment = await addComment({
        status: COMMENT_STATUS.PUBLISHED,
        storyId: dataset.stories[0].id,
      });
      comment = await getCommentById(comment.id, [
        'translations',
        'translations.language',
      ]);

      return api
        .put(`/comment/moderator/${comment.id}/pending-recording`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(STORY_INCORRECT_STATUS);
        });
    });

    it('Should publish comment and return status 200 and valid body', async () => {
      const story = await addStory({
        channel: CHANNEL_CONSTANTS.IVRR,
      });

      const comment = await addComment({
        status: COMMENT_STATUS.PENDING_REVIEW,
        storyId: story.id,
      });

      await api
        .put(`/comment/moderator/${comment.id}/pending-recording`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbComment = await getCommentById(comment.id);

      expect(
        dbComment.status === COMMENT_STATUS.PENDING_RECORDING,
      ).toBeTruthy();
    });
  });

  describe('/comment/moderator/:id/publish (PUT)', () => {
    it('Should return status 400 and error TRANSLATIONS_ARE_NEEDED', async () => {
      const languageIds = [];
      let comment = await addComment({
        status: COMMENT_STATUS.PENDING_REVIEW,
        storyId: dataset.stories[0].id,
      });
      comment = await getCommentById(comment.id, [
        'translations',
        'translations.language',
      ]);

      await Promise.all(
        comment.translations
          .filter((translation) => translation.language.provider)
          .map((translation) => {
            languageIds.push(translation.language.id);

            return removeTranslationByCommentIdAndLanguageId(
              comment.id,
              translation.language.id,
            );
          }),
      );

      return api
        .put(`/comment/moderator/${comment.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(TRANSLATIONS_ARE_NEEDED);
        });
    });

    it('Should return status 400 and error COMMENT_INCORRECT_STATUS', async () => {
      const comment = await addComment({
        status: COMMENT_STATUS.PENDING_RECORDING,
        storyId: dataset.stories[0].id,
      });

      return api
        .put(`/comment/moderator/${comment.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(COMMENT_INCORRECT_STATUS);
        });
    });

    it('Should publish comment and return status 200 and valid body', async () => {
      const comment = await addComment({
        status: COMMENT_STATUS.PENDING_REVIEW,
        storyId: dataset.stories[0].id,
      });

      await api
        .put(`/comment/moderator/${comment.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbComment = await getCommentById(comment.id);

      expect(dbComment.status === COMMENT_STATUS.PUBLISHED).toBeTruthy();
    });
  });

  describe(`/comment/moderator/:id/unpublish (PUT)`, () => {
    it('Should return status 400 and error COMMENT_INCORRECT_STATUS', async () => {
      const comment = await addComment({
        status: COMMENT_STATUS.PENDING_REVIEW,
        storyId: dataset.stories[0].id,
      });

      return api
        .put(`/comment/moderator/${comment.id}/unpublish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(COMMENT_INCORRECT_STATUS);
        });
    });

    it('Should unPublish comment and return status 200 and valid body', async () => {
      const publishedAt = new Date();
      const comment = await addComment({
        status: COMMENT_STATUS.PUBLISHED,
        storyId: dataset.stories[0].id,
        publishedAt,
      });

      await api
        .put(`/comment/moderator/${comment.id}/unpublish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      let dbComment = await getCommentById(comment.id);

      expect(dbComment.status === COMMENT_STATUS.PENDING_REVIEW).toBeTruthy();

      await api
        .put(`/comment/moderator/${comment.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      dbComment = await getCommentById(comment.id);

      expect(publishedAt.toISOString()).toBe(
        dbComment.publishedAt.toISOString(),
      );

      expect(dbComment.status === COMMENT_STATUS.PUBLISHED).toBeTruthy();
    });
  });

  describe('/comment/moderator/:id (DELETE)', () => {
    it('Should delete comment and return status 200 and valid body', async () => {
      const comment = dataset.comments[3];

      await api
        .delete(`/comment/moderator/${comment.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      expect(await getCommentById(comment.id)).toBeNull();
    });
  });
});
