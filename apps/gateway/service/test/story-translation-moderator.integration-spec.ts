import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import {
  getStoryById,
  updateStoryTranslationStatus,
  removeTranslationByStoryIdAndLanguageId,
} from './entity/story.mock';
import { clearDatabase } from './helpers';
import { initializeDataset } from './helpers/story';
import { ROLE } from '../src/user/constant/role.constant';
import {
  NO_STORY,
  STORY_TRANSLATION_UPDATE_ERROR,
  LANGUAGE_NOT_FOUND,
} from '@ourloop/shared';
import { TRANSLATION_TYPE_CONSTANTS } from '../src/common/constant/translation-type.constant';
import { TRANSLATION_STATUS_CONSTANTS } from '../src/common/constant/translation-status.constants';
import { awsTranslationMock } from './mocks/aws-translation.mock';
import { getRandomLanguageCode } from './entity/language.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('StoryTranslationModeratorController (integration)', () => {
  let dataset: any;
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

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

  describe('/story/moderator/:id/translation (DELETE)', () => {
    it('Should return status 400 and error NO_STORY', async () =>
      api
        .delete(`/story/moderator/${faker.string.uuid()}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(NO_STORY);
          expect(res.status).toBe(400);
        }));

    it('Should return status 200 and key success with false value', async () => {
      const story = await getStoryById(dataset.stories[3].id, [
        'language',
        'translations',
        'translations.language',
      ]);

      await api
        .delete(`/story/moderator/${story.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: story.language.code,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });

      return api
        .delete(`/story/moderator/${story.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });
    });

    it('Should delete story translation and return status 200 and valid body', async () => {
      const story = dataset.stories[3];
      const storyBeforeChanges = await getStoryById(story.id, [
        'translations',
        'translations.language',
      ]);
      const code = storyBeforeChanges.translations[1].language.code;

      await api
        .delete(`/story/moderator/${story.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: code,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const storyAfterChanges = await getStoryById(story.id, [
        'translations',
        'translations.language',
      ]);

      expect(
        storyAfterChanges.translations.find(
          (translation) => translation.language.code === code,
        ),
      ).toBeUndefined();
    });
  });

  describe('/story/moderator/:id/translation/verify (PUT)', () => {
    it('Should return status 400 and error NO_STORY', async () =>
      api
        .put(`/story/moderator/${faker.string.uuid()}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(NO_STORY);
          expect(res.status).toBe(400);
        }));

    it('Should update story translation ,return status 200 and key success with FALSE value', async () => {
      const story = await getStoryById(dataset.stories[3].id, ['language']);

      await api
        .put(`/story/moderator/${story.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: story.language.code,
          content: faker.lorem.sentence(),
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });

      return api
        .put(`/story/moderator/${story.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeFalsy();
        });
    });

    it('Should update story translation ,return status 200 and key success with TRUE value', async () => {
      const story = dataset.stories[3];
      const storyBeforeChanges = await getStoryById(story.id, [
        'translations',
        'translations.language',
      ]);
      const translation = storyBeforeChanges.translations[1];

      expect(translation.type).toBe(TRANSLATION_TYPE_CONSTANTS.MACHINE);

      await api
        .put(`/story/moderator/${story.id}/translation/verify`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
          content: faker.lorem.sentence(),
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const storyAfterChanges = await getStoryById(story.id, ['translations']);

      expect(
        storyAfterChanges.translations.find(
          (item) => item.id === translation.id,
        )?.type,
      ).toBe(TRANSLATION_TYPE_CONSTANTS.MANUAL);
    });
  });

  describe('/story/moderator/:id/translation/retry (PUT)', () => {
    it('Should return status 400 and error STORY_TRANSLATION_UPDATE_ERROR', async () => {
      return api
        .put(`/story/moderator/${dataset.stories[3].id}/translation/retry`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(STORY_TRANSLATION_UPDATE_ERROR);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 200 and valid body', async () => {
      const story = await getStoryById(dataset.stories[3].id, [
        'translations',
        'translations.language',
      ]);
      const translation = story.translations.find(
        (translation) => translation.languageId !== story.languageId,
      );

      await updateStoryTranslationStatus(
        translation.id,
        TRANSLATION_STATUS_CONSTANTS.ERROR,
      );

      return api
        .put(`/story/moderator/${story.id}/translation/retry`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });
    });
  });

  describe('/story/moderator/:id/translation (PUT)', () => {
    it('Should return status 400 and error LANGUAGE_NOT_FOUND', async () => {
      return api
        .put(`/story/moderator/${dataset.stories[4].id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          content: faker.lorem.sentence(),
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(LANGUAGE_NOT_FOUND);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 200 and valid body', async () => {
      const storyBefore = await getStoryById(dataset.stories[4].id, [
        'translations',
        'translations.language',
        'language',
      ]);
      const translation = storyBefore.translations.find(
        (translation) => translation.languageId !== storyBefore.languageId,
      );

      await removeTranslationByStoryIdAndLanguageId(
        storyBefore.id,
        translation.languageId,
      );

      let content = faker.lorem.sentence();

      jest.spyOn(awsTranslationMock, 'send').mockImplementation(
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
        .put(`/story/moderator/${storyBefore.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
          content,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      let storyAfter = await getStoryById(dataset.stories[4].id, [
        'translations',
        'translations.language',
      ]);

      expect(
        storyAfter.translations.find(
          (item) => item.languageId === translation.languageId,
        ).content,
      ).toBe(content);

      content = faker.lorem.sentence();

      await api
        .put(`/story/moderator/${storyBefore.id}/translation`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: translation.language.code,
          content,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      storyAfter = await getStoryById(dataset.stories[4].id, [
        'translations',
        'translations.language',
      ]);

      expect(
        storyAfter.translations.find(
          (item) => item.languageId === translation.languageId,
        ).content,
      ).toBe(content);
    });
  });
});
