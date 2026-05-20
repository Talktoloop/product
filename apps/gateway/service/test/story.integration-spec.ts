import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import {
  getStoryStub,
  getTranslationStub,
  getStoryByContent,
  getStoryById,
  getStories,
} from './entity/story.mock';
import getRandomGender from '../src/migrations/utils/get-random-gender';
import getRandomAge from '../src/migrations/utils/get-random-age';
import { getAdministrativeDataByStoryId } from './entity/administrative-data.mock';
import { DIFFICULTY_VALUE, AGE_VALUE, GENDER_VALUE } from '../src/common/types';
import {
  STORY_STATUS,
  COMMENT_STATUS,
  GET_ADMINISTRATIVE_DATA_FAILED,
  _omit,
} from '@ourloop/shared';
import { clearDatabase, checkPagination } from './helpers';
import {
  initializeDataset,
  checkStoryProperties,
  checkStorySentValues,
} from './helpers/story';
import { getKeysWithLowerCase } from '../src/common/helpers';
import { ROLE } from '../src/user/constant/role.constant';
import {
  addLanguage,
  setDefaultLanguage,
  getLanguageFromList,
  getRandomLanguageCode,
} from './entity/language.mock';
import { StoryEntity } from '../src/story/entity/story.entity';
import { updateStory } from './entity/story.mock';
import { TRANSLATION_TYPE_CONSTANTS } from '../src/common/constant/translation-type.constant';
import { StoryTranslationEntity } from '../src/story/entity/story-translation.entity';
import { clearPhoneNumber } from '../src/common/request/custom.joi';
import { getCountryById, getRandomCountry } from './entity/country.mock';
import getRandomCategory from '../src/migrations/utils/get-random-category';
import getRandomDifficulty from '../src/migrations/utils/get-random-difficulty';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';
import { configMock } from './mocks/config.mock';

describe('StoryController (integration)', () => {
  const pageNumber = 1;
  const limit = 10;
  let dataset: any;
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;
  let stories = [];

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

  describe(`/story (GET)`, () => {
    it('Should find stories by with status PUBLISHED, return status 200 and valid body', async () => {
      return api
        .get(`/story?page=${pageNumber}&limit=${limit}`)
        .expect((res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(
            dataset.stories.filter(
              (item) => item.status == STORY_STATUS.PUBLISHED,
            ).length,
          ).toBe(res.body.items.length);
          expect(res.body.items[0].channel).toBeDefined();
        });
    });

    it('Should find story by thematic ids', async () => {
      const thematicIds = [
        dataset.thematics[0].id,
        dataset.thematics[1].id,
        dataset.thematics[6].id,
      ];

      await api
        .get(`/story?thematic=${dataset.thematics[0].id}&limit=${limit}`)
        .expect(({ status }) => {
          expect(status).toBe(200);
        });

      const { body } = await api
        .get(`/story?thematic=${thematicIds.join(',')}&limit=${limit}`)
        .expect(async ({ status, body }) => {
          expect(status).toBe(200);
          expect(body.items.length).toBe(2);
        });

      let story: StoryEntity;

      for (const item of body.items) {
        story = await getStoryById(item.id, ['thematics']);

        expect(
          story.thematics
            .map((thematic) => thematic.id)
            .filter((value) => thematicIds.includes(value)).length > 0,
        ).toBeTruthy();
      }
    });

    it('Should find story with NO_ANSWER age value', async () => {
      const { body } = await api
        .get(`/story?age=0&limit=${limit}`)
        .expect(({ status }) => {
          expect(status).toBe(200);
        });

      let story: StoryEntity;

      for (const item of body.items) {
        story = await getStoryById(item.id, ['recipient']);

        expect(story.recipient.ageByModerator).toBe(AGE_VALUE['No answer']);
      }
    });

    it('Should find story with NO_ANSWER gender value', async () => {
      const { body } = await api
        .get(`/story?gender=0&limit=${limit}`)
        .expect(async ({ status }) => {
          expect(status).toBe(200);
        });

      let story: StoryEntity;

      for (const item of body.items) {
        story = await getStoryById(item.id, ['recipient']);

        expect(story.recipient.genderByModerator).toBe(GENDER_VALUE.NO_ANSWER);
      }
    });

    it('Should find story by query parameters, return status 200 and valid body', async () => {
      stories = await getStories();
      const story = dataset.stories[0];
      const country = await getCountryById(story.countryId);

      const queryParams = `
          type=${getRandomCategory(dataset.categories)},${
            story.categories[0].id
          }
        	&age=${getRandomAge()},${story.recipient.ageByModerator}
        	&country=${getRandomCountry(dataset.countries).code},${country.code}
        	&regionId=${dataset.administrativeData[0].id}
        	&gender=${getRandomGender([story.gender])},${
            story.recipient.genderByModerator
          }
        	&difficulty=${getRandomDifficulty(dataset.difficulties, [
            story.difficulties[0].id,
          ])?.id},${story.difficulties[0].id}
        	&organisation=${story.organisations[0].id}
        	&q=${dataset.phrase.replace(/ /g, '_')}
        	&thematic=${story.thematics.map((thematic) => thematic.id).join(',')}
        `;

      return api
        .get(
          `/story?page=${pageNumber}&limit=${limit}&${queryParams
            .replace(/\s+/g, '')
            .replace(/_/g, ' ')}`,
        )
        .expect((res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(
            res.body.items.filter((item) => item.id === story.id).length,
          ).toBe(1);

          for (const item of res.body.items) {
            if (item.id == story.id) {
              expect(item.place).toBe(
                `${dataset.administrativeData[1].names[0].name}, ${dataset.administrativeData[0].names[0].name}`,
              );

              checkStorySentValues(item, {
                numberOfVotes: dataset.voutes.length,
                numberOfViews: dataset.views,
                numberOfComments: dataset.comments.filter(
                  (comment) => comment.status === COMMENT_STATUS.PUBLISHED,
                ).length,
              });
            }

            checkStoryProperties(
              item,
              stories.filter((element) => element.id == item.id)[0],
            );
          }
        });
    });

    it('Should not find stories by thematic and age and return valid body', async () => {
      const story = dataset.stories[0];

      return api
        .get(
          `/story?age=${story.age}&thematic=${dataset.thematics[20].id}&limit=10&page=1`,
        )
        .then((res) => {
          checkPagination(res, { page: 1, limit: 10 });
          expect(res.body.items.length).toBe(0);
        });
    });

    it('Should find stories from valid page and return valid body', async () => {
      const pageNumber = 2;
      const limit = 1;

      const res = await api.get(`/story?page=${pageNumber}&limit=${limit}`);

      checkPagination(res, { page: pageNumber, limit });
      expect(res.body.items.length).toBe(limit);
      expect(
        res.body.items.filter((item) => item.id === dataset.stories[3].id)
          .length,
      ).toBe(1);

      stories = await getStories();

      checkStoryProperties(
        res.body.items[0],
        stories.filter((element) => element.id == res.body.items[0].id)[0],
      );

      return api.get(`/story?page=1&limit=${limit}`).expect(async (res) => {
        checkPagination(res, { page: 1, limit });
        expect(
          res.body.items.filter(
            (item) =>
              item.id === dataset.stories[dataset.stories.length - 1].id,
          ).length,
        ).toBe(1);
      });
    });

    it('Should find stories with default translation, return status 200 and valid body', async () => {
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const notDefaultLanguage = getLanguageFromList(dataset.languages, false);

      for (const entity of stories) {
        await updateStory(entity.id, { languageId: notDefaultLanguage.id });
      }

      const { body } = await api
        .get(`/story?page=${pageNumber}&limit=${limit}`)
        .set('content-language', getRandomLanguageCode())
        .expect((res) => {
          checkPagination(res, { page: pageNumber, limit });
        });

      for (const entity of stories) {
        await updateStory(entity.id, {
          languageId: defaultLanguage.id,
        });
      }

      let story: StoryEntity;

      for (const item of body.items) {
        story = stories.filter((entity) => entity.id === item.id)[0];

        expect(
          body.items.filter((entity) => entity.id === story.id).length,
        ).toBe(1);
        expect(
          story?.translations.filter(
            (entity) => entity.languageId === defaultLanguage.id,
          )[0]?.content,
        ).toBe(item.content);
      }
    });

    it('Should find stories with original translation, return status 200 and valid body', async () => {
      const story = stories[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const newLanguage = await addLanguage({
        isDefault: true,
      });

      await setDefaultLanguage(newLanguage.id);

      const { body } = await api
        .get(`/story?page=${pageNumber}&limit=${limit}`)
        .set('content-language', getRandomLanguageCode())
        .expect(async (res) => {
          checkPagination(res, { page: pageNumber, limit });
        });

      await setDefaultLanguage(defaultLanguage.id);

      for (const item of body.items) {
        if (item.id === story.id) {
          expect(
            story?.translations.filter(
              (entity) => entity.languageId === story.languageId,
            )[0]?.content,
          ).toBe(item.content);
        }
      }
    });
  });

  describe(`/story/:id (GET)`, () => {
    it(`Should find story by id and return status 200 and valid body`, async () => {
      let story = dataset.stories[3];
      let stories = [];

      await api
        .get(`/story/${story.id}`)
        .set('content-language', dataset.languages[0].code)
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.views).toBe(0);
        });

      const { body } = await api
        .get(`/story/${story.id}`)
        .set('content-language', dataset.languages[1].code)
        .expect((res) => {
          expect(res.status).toBe(200);
        });

      stories = await getStories();
      story = stories.filter((element) => element.id === body.id)[0];

      expect(body.place).toBe(story.place);

      checkStorySentValues(body, {
        difficulty: getKeysWithLowerCase(DIFFICULTY_VALUE)[2],
        numberOfVotes: dataset.voutes.length,
        originalLanguageCode: story.language.code,
        translationCodes: story.translations.map(
          (item: StoryTranslationEntity) => {
            return {
              code: item.language.code,
              type: item.type,
              content: item.content,
              status: item.status,
            };
          },
        ),
        numberOfViews: 1,
        numberOfComments: dataset.comments.filter(
          (comment) => comment.status === COMMENT_STATUS.PUBLISHED,
        ).length,
        numberOfCategories: dataset.categories.length,
        numberOfDifficulties: 1,
        numberOfMaternityStatuses: 1,
        channel: story.channel,
        thematics: story.thematics.map(({ id }) => id),
      });

      checkStoryProperties(
        body,
        story,
        [
          'categories',
          'difficulties',
          'maternityStatus',
          'gender',
          'age',
          'language',
          'translations',
        ],
        dataset.languages[1].id,
      );
    });

    it('Should find story with default translation, return status 200 and valid body', async () => {
      const story = dataset.stories[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const notDefaultLanguage = getLanguageFromList(dataset.languages, false);

      await updateStory(story.id, { languageId: notDefaultLanguage.id });

      const { body } = await api
        .get(`/story/${story.id}`)
        .set('content-language', getRandomLanguageCode());

      expect(body.place).toBe(
        `${dataset.administrativeData[1].names[0].name}, ${dataset.administrativeData[0].names[0].name}`,
      );

      await updateStory(story.id, { languageId: defaultLanguage.id });

      expect(
        story?.translations.filter(
          (entity) => entity.languageId === defaultLanguage.id,
        )[0]?.content,
      ).toBe(body.content);
    });

    it('Should find story with original translation, return status 200 and valid body', async () => {
      stories = await getStories();
      const story = stories[0];
      const defaultLanguage = getLanguageFromList(dataset.languages);
      const newLanguage = await addLanguage({
        isDefault: true,
      });

      await setDefaultLanguage(newLanguage.id);

      const { body } = await api
        .get(`/story/${story.id}`)
        .set('content-language', getRandomLanguageCode());

      await setDefaultLanguage(defaultLanguage.id);

      expect(
        story?.translations.filter(
          (entity) => entity.languageId === story.languageId,
        )[0]?.content,
      ).toBe(body.content);
    });
  });

  describe(`/story/:id/vote (PUT)`, () => {
    it('Should add vote and return status 200 and valid body', async () => {
      const story = dataset.stories[0];
      const storyBefore = await getStoryById(story.id, ['votes']);

      await api
        .put(`/story/${story.id}/vote`)
        .set('Authorization', String(ROLE.USER))
        .send()
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const storyAfter = await getStoryById(story.id, ['votes']);
      expect(storyBefore.votes.length + 1).toBe(storyAfter.votes.length);
    });
  });

  describe(`/story/:id/unvote (PUT)`, () => {
    it('Should remove vote and return status 200 and valid body', async () => {
      const story = dataset.stories[0];

      return api
        .put(`/story/${story.id}/unvote`)
        .set('Authorization', String(ROLE.USER))
        .send()
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });
    });
  });

  xdescribe('/story (POST)', () => {
    it('Should return status 403', async () => {
      jest.spyOn(configMock, 'get').mockImplementationOnce(
        jest.fn((key: number | string): any => {
          if (key === 'application.onlyGetRequest') {
            return true;
          }
        }),
      );

      const content = faker.lorem.sentence();

      return api
        .post('/story')
        .set('Authorization', String(ROLE.USER))
        .send({ content })
        .then((res) => {
          expect(res.status).toBe(403);
        });
    });

    for (const role of [ROLE.USER, undefined]) {
      const details = getStoryStub();

      it(`Should return status 400 for role ${role} and error GET_ADMINISTRATIVE_DATA_FAILED`, async () => {
        const content = faker.lorem.sentence();
        await api
          .post('/story')
          .set('Authorization', String(role))
          .send({
            content,
            regionId: faker.number.int(1000),
          })
          .expect((res) => {
            expect(res.body?.error?.code).toBe(GET_ADMINISTRATIVE_DATA_FAILED);
            expect(res.status).toBe(400);
          });
      });

      it(`Should add story by user with role ${role}, return status 201 and valid body`, async () => {
        const parentRegion = dataset.administrativeData[0];
        const childRegion = dataset.administrativeData[1];
        const language = dataset.languages[+(role !== undefined)];

        const translation = getTranslationStub({
          storyId: details.id,
          languageId: language.id,
          type:
            language.id === details.languageId
              ? TRANSLATION_TYPE_CONSTANTS.MANUAL
              : TRANSLATION_TYPE_CONSTANTS.MACHINE,
        });

        await api
          .post('/story')
          .set('Authorization', String(role))
          .set('content-language', language.code)
          .send({
            ..._omit(
              {
                ...translation,
                ...details,
              },
              [
                'id',
                'difficulty',
                'status',
                'publishedAt',
                'languageId',
                'storyId',
                'type',
                'recipient',
              ],
            ),
            difficulty: getKeysWithLowerCase(DIFFICULTY_VALUE)[1],
            regionId: childRegion.id,
          })
          .then(async (res) => {
            expect(res.status).toBe(201);
            expect(res.body.success).toBeTruthy();
          });
        const dbStory = await getStoryByContent(translation.content, [
          'translations',
        ]);
        const dbAdministrativeData = await getAdministrativeDataByStoryId(
          dbStory.id,
        );
        for (const region of dbAdministrativeData) {
          expect(
            region?.administrativeAreaId === childRegion.id ||
              region.administrativeAreaId === parentRegion.id,
          ).toBeTruthy();
        }

        expect(dbStory?.status === STORY_STATUS.NOT_STARTED).toBeTruthy();
        expect(dbStory?.translations[0]?.languageId).toBe(language.id);
        expect(dbStory?.languageId).toBe(language.id);
      });

      it(`Should add story by user (role ${role}) with content only and return status 201 and valid body`, async () => {
        const parentRegion = dataset.administrativeData[0];
        const childRegion = dataset.administrativeData[1];
        const content = faker.lorem.sentence();
        const defaultLanguage = getLanguageFromList(dataset.languages);
        await api
          .post('/story')
          .set('Authorization', String(role))
          .send({
            content,
            difficulty: null,
            regionId: childRegion.id,
          })
          .then(async (res) => {
            expect(res.status).toBe(201);
            expect(res.body.success).toBeTruthy();
          });

        const dbStory = await getStoryByContent(content, [
          'translations',
          'recipient',
        ]);

        const dbAdministrativeData = await getAdministrativeDataByStoryId(
          dbStory.id,
        );
        for (const region of dbAdministrativeData) {
          expect(
            region?.administrativeAreaId === childRegion.id ||
              region.administrativeAreaId === parentRegion.id,
          ).toBeTruthy();
        }

        expect(dbStory?.countryId).toBeNull();
        expect(dbStory.status === STORY_STATUS.NOT_STARTED).toBeTruthy();
        expect(dbStory?.languageId).toBe(defaultLanguage.id);
      });
    }

    for (const phoneFormat of ['+(###) ###-###-###', '00### ###-###-###']) {
      it(`Should add story with phone number in format ${phoneFormat}, return status 201 and valid body`, async () => {
        const parentRegion = dataset.administrativeData[0];
        const childRegion = dataset.administrativeData[1];
        const phone = faker.phone.number(phoneFormat);
        const content = faker.lorem.sentence();

        await api
          .post('/story')
          .set('Authorization', String(ROLE.USER))
          .send({ content, phone, regionId: childRegion.id })
          .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.success).toBeTruthy();
          })
          .catch((error) => expect(error).toBeUndefined());

        const dbStory = await getStoryByContent(content, ['recipient']);

        const dbAdministrativeData = await getAdministrativeDataByStoryId(
          dbStory.id,
        );
        for (const region of dbAdministrativeData) {
          expect(
            region?.administrativeAreaId === childRegion.id ||
              region.administrativeAreaId === parentRegion.id,
          ).toBeTruthy();
        }
        expect(dbStory?.recipient.phone.match(/^\+[0-9]+$/)).not.toBeNull();
        expect(dbStory?.recipient.phone).toBe(clearPhoneNumber(phone));
        expect(dbStory?.recipient.phone[0]).toBe('+');
        expect(dbStory?.recipient.phone.substr(0, 3)).not.toBe('+00');
      });
    }
  });
});
