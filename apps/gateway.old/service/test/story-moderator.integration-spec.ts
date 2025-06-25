import { INestApplication } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import {
  getStoryByStatus,
  getStoryById,
  getStories,
  removeTranslationByStoryIdAndLanguageId,
  updateStoryTranslationContent,
  updateStory,
  addStory,
} from './entity/story.mock';
import getRandomGender from '../src/migrations/utils/get-random-gender';
import getRandomAge from '../src/migrations/utils/get-random-age';
import {
  getRegions,
  getRandomRegion,
  getAdministrativeDataByStoryId,
  findParentsById,
} from './entity/administrative-data.mock';
import { StoryModeratorOrderEnum } from '../src/common/types';
import { clearDatabase, checkPagination } from './helpers';
import {
  initializeDataset,
  checkStoryProperties,
  DBData,
} from './helpers/story';
import { ROLE } from '../src/user/constant/role.constant';
import {
  getLanguages,
  getDefaultLanguage,
  addLanguage,
  getRandomLanguageCode,
} from './entity/language.mock';
import { DIFFICULTY_VALUE } from '../src/common/types';
import {
  VALIDATION_FAILED,
  LANGUAGE_NOT_FOUND,
  TRANSLATIONS_ARE_NEEDED,
  NO_STORY,
  SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR,
  SENSITIVE_STORY_CAN_NOT_BE_UPDATED_TO_NON_SENSITIVE,
  STORY_INCORRECT_STATUS,
  SENSITIVE_STORY_NOT_FOUND,
  SENSITIVE_STORY_ALREADY_EXPORTED,
  STORY_STATUS,
  GET_ADMINISTRATIVE_DATA_FAILED,
} from '@ourloop/shared';
import { getRandomOrganization } from './entity/organization.mock';
import { getRandomMaternityStatus } from './entity/maternity-status.mock';
import getRandomThematic from '../src/migrations/utils/get-random-thematic-area';
import getRandomDifficulty from '../src/migrations/utils/get-random-difficulty';
import { getRandomRejectReason } from './entity/reject-reason.mock';
import { TRANSLATION_STATUS_CONSTANTS } from '../src/common/constant/translation-status.constants';
import { checkMessageValues as checkMessengerMessageValues } from './helpers/messanger';
import { checkMessageValues as checkSmsMessageValues } from './helpers/message';
import { awsTranslationMock } from './mocks/aws-translation.mock';
import { PROVIDER_TYPE } from '../src/language/interface/provider.enum';
import { MARKED_AS_SENSITIVE_BY } from '../src/common/constant/marked-as-sensitive.constant';
import { getCountryById, getRandomCountry } from './entity/country.mock';
import { getKeysWithLowerCase } from '../src/common/helpers';
import { getMessengerConversationById } from './entity/messanger.mock';
import { updateRecipient } from './entity/story-recipient.mock';
import { assignAdministrativeDataToStory } from './entity/administrative-data.mock';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('StoryModeratorController (integration)', () => {
  let dataset: any;
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let stories = [];
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

  describe('/story/moderator/pending (GET)', () => {
    it('Should find stories by language from page and return valid body', async () => {
      const pageNumber = 2;
      const limit = 1;
      const languages = await getLanguages();
      const { body } = await api
        .get(
          `/story/moderator/pending?page=${pageNumber}&limit=${limit}&order=${StoryModeratorOrderEnum.OLDEST_FIRST}&language=${languages[2].code}`,
        )
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(res.body.items.length).toBe(limit);
          expect(
            res.body.items.filter((item) => item.id === dataset.stories[6].id)
              .length,
          ).toBe(1);
        });
      stories = await getStories({ languageId: languages[2].id });
      checkStoryProperties(
        body.items[0],
        stories.filter((element) => element.id == body.items[0].id)[0],
        ['channel'],
      );
      return api
        .get(
          `/story/moderator/pending?page=${pageNumber}&limit=${limit}&order=${StoryModeratorOrderEnum.NEWEST_FIRST}&language=${languages[2].code}`,
        )
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(
            res.body.items.filter((item) => item.id === dataset.stories[5].id)
              .length,
          ).toBe(1);
        });
    });
    it('Should find story with all translation without language defined on header', async () => {
      const story = stories[1];
      const languages = await getLanguages();
      const langCode = languages[2].code;
      return api
        .get(`/story/moderator/web/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', langCode)
        .expect((res) => {
          expect(
            story?.translations.filter(
              (entity) => entity.language.code === langCode,
            )[0]?.content,
          ).toBe(res.body.content);
          expect(
            res.body.translations.find((element) => element.code === langCode),
          ).not.toBe(true);
        });
    });
    it('Should find stories (all languages) from page and return valid body', async () => {
      const pageNumber = 2;
      const limit = 1;
      const stories = await getStories();
      await api
        .get(
          `/story/moderator/pending?page=${pageNumber}&limit=${limit}&order=${StoryModeratorOrderEnum.OLDEST_FIRST}`,
        )
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(res.body.items.length).toBe(limit);
          expect(
            res.body.items.filter((item) => item.id === dataset.stories[5].id)
              .length,
          ).toBe(1);
          checkStoryProperties(
            res.body.items[0],
            stories.filter(
              (element) => element.id == res.body.items[0].id,
            )[0] as DBData,
            ['channel'],
          );
        });
      return api
        .get(
          `/story/moderator/pending?page=${pageNumber}&limit=${limit}&order=${StoryModeratorOrderEnum.NEWEST_FIRST}`,
        )
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          checkPagination(res, { page: pageNumber, limit });
          expect(
            res.body.items.filter((item) => item.id === stories[2].id).length,
          ).toBe(1);
        });
    });
  });

  describe('/story/moderator/whatsapp/:id (GET)', () => {
    let stories = [];
    it('Should return status 400 and error NO_STORY', async () => {
      stories = await getStories();
      const storyId = stories[0].id;
      return api
        .get(`/story/moderator/whatsapp/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(NO_STORY);
        });
    });
    it('Should return valid body and status 200', async () => {
      let story = dataset.stories[8];

      const { status, body } = await api
        .get(`/story/moderator/whatsapp/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR));
      story = stories.find((element) => element.id === story.id);
      const country = await getCountryById(story.countryId);
      expect(status).toBe(200);
      checkStoryProperties(body, story, [
        'publishedAt',
        'place',
        'authorNickname',
        'difficulties',
        'organisations',
        'maternityStatus',
        'user',
        'categories',
        'age',
        'gender',
        'createdAt',
        'isSensitive',
        'language',
        'emailProvided',
        'translations',
        'messages',
        'status',
        'caseManagerReturnedAt',
        'caseManagerNote',
      ]);
      expect(body.place).toBe(
        `${dataset.administrativeData[1].names[0].name}, ${dataset.administrativeData[0].names[0].name}`,
      );
      expect(body.country).toBe(country.code);
      expect(body.contactAccepted).toBe(false);
      expect(body.historicalContent.trim()).toBe(
        story.conversation.messengerMessages
          .find((message) => message.isStory)
          ?.content.trim() ?? '',
      );
      const conversation = await getMessengerConversationById(
        story.conversationId,
        [
          'messengerMessages',
          'messengerMessages.user',
          'messengerMessages.conversation',
          'messengerMessages.conversation.story',
          'messengerMessages.conversation.story.recipient',
          'story',
          'story.recipient',
        ],
      );
      await updateRecipient(story.recipientId, {
        userWantContact: true,
      });
      for (const index in body.messages) {
        checkMessengerMessageValues(
          body.messages[index],
          conversation.messengerMessages.find(
            (item) => item.id == body.messages[index].id,
          ),
        );
      }
      expect(body.messages[0].isPinned).toBeDefined();
      expect(body.messages[0].sender.username).toBeNull();
      const { body: newBody } = await api
        .get(`/story/moderator/whatsapp/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR));
      expect(newBody.messages[0].sender.username).toBeDefined();
      expect(newBody.messages[0].sender.username).not.toBeNull();
    });
  });

  describe('/story/moderator/sms/:id (GET)', () => {
    let stories = [];

    it('Should return status 400 and error NO_STORY', async () => {
      stories = await getStories();
      const storyId = stories[0].id;

      return api
        .get(`/story/moderator/sms/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(NO_STORY);
        });
    });

    it('Should return valid body and status 200', async () => {
      let story = dataset.stories[4];

      await Promise.all(
        dataset.administrativeData.map((item) =>
          assignAdministrativeDataToStory(item.id, story.id),
        ),
      );

      const { status, body } = await api
        .get(`/story/moderator/sms/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR));

      story = stories.find((element) => element.id === story.id);
      const country = await getCountryById(story.countryId);

      expect(status).toBe(200);
      checkStoryProperties(body, story, [
        'publishedAt',
        'place',
        'authorNickname',
        'difficulties',
        'organisations',
        'maternityStatus',
        'user',
        'categories',
        'age',
        'gender',
        'createdAt',
        'isSensitive',
        'contactAccepted',
        'language',
        'emailProvided',
        'translations',
        'messages',
        'status',
        'caseManagerReturnedAt',
        'caseManagerNote',
      ]);
      expect(body.id).toBe(story.id);
      expect(body.place).toBe(
        `${dataset.administrativeData[1].names[0].name}, ${dataset.administrativeData[0].names[0].name}`,
      );
      expect(body.country).toBe(country.code);
      expect(body.messages[0].isPinned).toBeDefined();
      expect(body.phone).toBe(body.messages[0].recipient);
      expect(body.isSensitive).toBe(false);
      expect(body.contactAccepted).toBe(true);
      expect(body.historicalContent.trim()).toBe(
        story.conversation.smsMessages
          .find((item) => item.isStory)
          ?.content.trim(),
      );

      for (const index in body.messages) {
        checkSmsMessageValues(
          body.messages[index],
          story.conversation.smsMessages.find(
            (item) => item.id == body.messages[index].id,
          ),
        );
      }
    });
  });

  describe('/story/moderator/web/:id (GET)', () => {
    let stories = [];

    it('Should return status 400 and error NO_STORY', async () => {
      stories = await getStories();
      const storyId = dataset.stories[4].id;

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(NO_STORY);
        });
    });

    it('Should return original translation, and status 200', async () => {
      stories = await getStories();
      const storyId = stories[0].id;

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.contactAccepted).toBe(true);
          expect(res.body.place).toBe(stories[0].place);
          expect(
            stories[0]?.translations.filter(
              (entity) => entity.languageId === stories[0].languageId,
            )[0]?.content,
          ).toBe(res.body.content);
        });
    });

    it('Should return translation status', async () => {
      const storyId = stories[0].id;

      await Promise.all(
        dataset.administrativeData.map((item) =>
          assignAdministrativeDataToStory(item.id, storyId),
        ),
      );

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.place).toBe(
            `${dataset.administrativeData[1].names[0].name}, ${dataset.administrativeData[0].names[0].name}`,
          );
          res.body.translations.map((entity) =>
            expect(entity.status).toBe(TRANSLATION_STATUS_CONSTANTS.TRANSLATED),
          );
        });
    });

    it('Should return markedAsSensitiveBy with valid value', async () => {
      return api
        .get(`/story/moderator/web/${stories[2].id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.historicalContent).toBe(null);
          expect(res.body.markedAsSensitiveBy).toBe(
            MARKED_AS_SENSITIVE_BY.AUTHOR,
          );
        });
    });

    it('Should return valid body and status 200', async () => {
      const storyId = stories[0].id;
      const recipient = stories[0].recipient;

      await updateRecipient(recipient.id, {
        difficultyByModerator: DIFFICULTY_VALUE.NO,
      });

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.isSensitive).toBe(!!stories[0].isSensitive);
          expect(res.body.difficulty).toBe(
            getKeysWithLowerCase(DIFFICULTY_VALUE)[0],
          );
          expect(res.body.thematics.sort()).toEqual(
            stories[0].thematics.map(({ id }) => id).sort(),
          );

          checkStoryProperties(res.body, stories[0], [
            'publishedAt',
            'place',
            'authorNickname',
            'difficulties',
            'organisations',
            'maternityStatus',
            'user',
            'categories',
            'age',
            'gender',
            'createdAt',
            'isSensitive',
            'language',
            'emailProvided',
            'translations',
            'status',
            'caseManagerReturnedAt',
            'caseManagerNote',
          ]);
        });
    });

    it('Should return key emailProvided with true value', async () => {
      const storyId = dataset.stories[0].id;
      const recipient = dataset.stories[0].recipient;

      await updateRecipient(recipient.id, {
        email: null,
      });

      await api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.emailProvided).toBeTruthy();
        });

      await updateRecipient(recipient.id, { email: faker.internet.email() });
      await updateStory(storyId, {
        userId: null,
      });

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.emailProvided).toBeTruthy();
        });
    });

    it('Should return key emailProvided with false value', async () => {
      const storyId = dataset.stories[0].id;
      const recipient = dataset.stories[0].recipient;

      await updateRecipient(recipient.id, {
        email: null,
      });

      await updateStory(storyId, {
        userId: null,
      });

      return api
        .get(`/story/moderator/web/${storyId}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .set('content-language', getRandomLanguageCode())
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.emailProvided).toBeFalsy();
        });
    });

    it('Should return default translation and status 200 if translation is empty', async () => {
      stories = await getStories();
      const story = stories[3];
      const defaultLanguage = await getDefaultLanguage();
      const translation = story.translations.find(
        (item) =>
          item.languageId !== defaultLanguage.id &&
          item.languageId !== story.languageId,
      );

      await updateStoryTranslationContent(translation.id, '');

      stories = await getStories();

      return api
        .get(`/story/moderator/web/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(
            res.body.translations.find(
              (item) => item.code === translation.language.code,
            ).content,
          ).toBe(
            story.translations.find(
              (item) => item.languageId === defaultLanguage.id,
            ).content,
          );
        });
    });

    it('Should return original content and status 200 if translation is empty', async () => {
      stories = await getStories();
      const story = stories[3];
      const defaultLanguage = await getDefaultLanguage();
      const translation = story.translations.find(
        (item) =>
          item.languageId !== defaultLanguage.id &&
          item.languageId !== story.languageId,
      );

      await updateStoryTranslationContent(translation.id, '');

      const defaultTranslation = stories[3].translations.find(
        (item) => item.languageId === defaultLanguage.id,
      );

      await updateStoryTranslationContent(defaultTranslation.id, '');

      stories = await getStories();

      return api
        .get(`/story/moderator/web/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(
            res.body.translations.find(
              (item) => item.code === translation.language.code,
            ).content,
          ).toBe(
            story.translations.find(
              (item) => item.languageId === story.languageId,
            ).content,
          );
          expect(
            res.body.translations.find(
              (item) => item.code === defaultLanguage.code,
            ).content,
          ).toBe(
            story.translations.find(
              (item) => item.languageId === story.languageId,
            ).content,
          );
        });
    });
  });

  describe(`/story/moderator/:id (PUT)`, () => {
    it('Should return status 400 and error SENSITIVE_STORY_CAN_NOT_BE_UPDATED_AS_NON_SENSITIVE', async () => {
      stories = await getStories();
      return api
        .put(`/story/moderator/${stories[2].id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          isSensitive: false,
          countryId: getRandomCountry(dataset.countries).id,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(
            SENSITIVE_STORY_CAN_NOT_BE_UPDATED_TO_NON_SENSITIVE,
          );
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 200 and update isSensitive to false', async () => {
      return api
        .put(`/story/moderator/${stories[3].id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          isSensitive: false,
          countryId: getRandomCountry(dataset.countries).id,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
        });
    });

    it('isSensitive should be false after update', async () => {
      return api
        .get(`/story/moderator/web/${stories[3].id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.isSensitive).toBe(false);
        });
    });

    it('Should return status 400 and error VALIDATION_FAILED', async () => {
      const story = await getStoryByStatus(STORY_STATUS.AWAITING_REPLAY);
      const defaultLanguage = await getDefaultLanguage();

      if (story) {
        await removeTranslationByStoryIdAndLanguageId(
          story.id,
          defaultLanguage.id,
        );
      }

      return api
        .put(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          translations: [{}],
          countryId: getRandomCountry(dataset.countries).id,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(VALIDATION_FAILED);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 400 and error LANGUAGE_NOT_FOUND', async () => {
      const story = await getStoryByStatus(STORY_STATUS.AWAITING_REPLAY);
      const defaultLanguage = await getDefaultLanguage();

      if (story) {
        await removeTranslationByStoryIdAndLanguageId(
          story.id,
          defaultLanguage.id,
        );
      }

      await api
        .put(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: getRandomLanguageCode(),
          countryId: getRandomCountry(dataset.countries).id,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(LANGUAGE_NOT_FOUND);
          expect(res.status).toBe(400);
        });

      return api
        .put(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          translations: [
            {
              code: dataset.languages.filter(
                (language) => language.isDefault,
              )[0]?.code,
              content: faker.lorem.sentence(),
            },
            {
              code: getRandomLanguageCode(),
              content: faker.lorem.sentence(),
            },
          ],
          regionId: dataset.administrativeData[0].id,
          countryId: dataset.administrativeData[0].countryId,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(LANGUAGE_NOT_FOUND);
          expect(res.status).toBe(400);
        });
    });

    it('Should return status 400 and error GET_ADMINISTRATIVE_DATA_FAILED', async () => {
      stories = await getStories();

      await api
        .put(`/story/moderator/${stories[4].id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          regionId: faker.number.int(1000),
          countryId: getRandomCountry(dataset.countries).id,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(GET_ADMINISTRATIVE_DATA_FAILED);
          expect(res.status).toBe(400);
        });
    });

    it('Should update story and return status 200 and valid body', async () => {
      const story = await getStoryByStatus(STORY_STATUS.AWAITING_REPLAY, [
        'language',
      ]);
      const defaultLanguage = await getDefaultLanguage();
      const regions = await getRegions();
      const randomRegion = getRandomRegion(regions);
      const parents = await findParentsById(randomRegion.id);

      if (story) {
        await removeTranslationByStoryIdAndLanguageId(
          story.id,
          defaultLanguage.id,
        );
      }

      const organization = getRandomOrganization(dataset.organizations);
      const difficulty = getRandomDifficulty(dataset.difficulties);
      const maternityStatus = getRandomMaternityStatus(
        dataset.maternityStatuses,
      );
      const thematic = getRandomThematic(dataset.thematics);
      const age = getRandomAge();
      const gender = getRandomGender();
      const place = faker.location.city();
      const isSensitive = true;
      const translations = [
        {
          code: dataset.languages.filter((language) => language.isDefault)[0]
            ?.code,
          content: faker.lorem.sentence(),
        },
        {
          code: dataset.languages.filter((language) => !language.isDefault)[0]
            ?.code,
          content: faker.lorem.sentence(),
        },
      ];
      const authorNickname = faker.internet.userName();

      await api
        .put(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          gender,
          age,
          place,
          isSensitive,
          organisations: [organization.id],
          difficulties: [difficulty.id],
          maternityStatus: [maternityStatus.id],
          thematics: [thematic.id],
          translations: translations,
          authorNickname,
          regionId: randomRegion.id,
          countryId: randomRegion.countryId,
        })
        .expect(({ status, body }) => {
          expect(status).toBe(200);
          expect(body.success).toBeTruthy();
        });

      const dbStory = await getStoryById(story.id, [
        'difficulties',
        'country',
        'organisations',
        'maternityStatus',
        'thematics',
        'translations',
        'translations.language',
        'recipient',
      ]);

      const dbAdministrativeData = await getAdministrativeDataByStoryId(
        dbStory.id,
      );
      expect(dbAdministrativeData.length).toBe(parents.length);
      for (const parent of parents) {
        expect(
          dbAdministrativeData.find(
            (region) => region.administrativeAreaId === parent.id,
          ),
        ).toBeTruthy();
      }

      const countryId = regions.find((region) => region.id === randomRegion.id)
        ?.countryId;
      const country = await getCountryById(countryId);

      expect(dbStory.status).toBe(STORY_STATUS.PENDING_PUBLICATION);
      expect(dbStory.recipient.nickname).toBe(authorNickname);
      expect(dbStory.recipient.ageByModerator).toBe(age);
      expect(dbStory.recipient.genderByModerator).toBe(gender);
      expect(dbStory.place).toBe(place);
      expect(dbStory.country.code).toBe(country?.code);
      expect(!!dbStory.isSensitive).toBe(isSensitive);
      expect(dbStory.organisations.length).toBe(1);
      expect(dbStory.organisations[0].id).toBe(organization.id);
      expect(dbStory.difficulties.length).toBe(1);
      expect(dbStory.difficulties[0].id).toBe(difficulty.id);
      expect(dbStory.maternityStatus.length).toBe(1);
      expect(dbStory.maternityStatus[0].id).toBe(maternityStatus.id);
      expect(dbStory.thematics.length).toBe(1);
      expect(dbStory.thematics[0].id).toBe(thematic.id);

      for (const translation of dbStory.translations) {
        expect(
          translations.filter(
            (item) =>
              item.code === translation.language.code &&
              item.content === translation.content,
          ),
        ).toBeDefined();
      }
    });

    it('Should update original language and return status 200 and valid body', async () => {
      const story = await getStoryByStatus(STORY_STATUS.PENDING_PUBLICATION);
      const language = dataset.languages.filter(
        (language) => !language.isDefault,
      )[0];

      await api
        .put(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          language: language.code,
          regionId: dataset.administrativeData[0].id,
          countryId: dataset.administrativeData[0].countryId,
        })
        .expect(({ status, body }) => {
          expect(status).toBe(200);
          expect(body.success).toBeTruthy();
        });

      const dbStory = await getStoryById(story.id, ['translations']);

      expect(dbStory.languageId).toBe(language.id);
    });

    for (const provider of [PROVIDER_TYPE.AWS, null]) {
      it(`Should return status 200 and original language should be changed to language with translation provider: ${provider}`, async () => {
        const story = await addStory({
          status: STORY_STATUS.PENDING_PUBLICATION,
        });
        const newOriginalLanguage = dataset.languages.find(
          (language) =>
            language.provider === provider && language.id !== story.id,
        );
        const originalContent = story.translations.find(
          (translation) => translation.languageId === story.languageId,
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
          .put(`/story/moderator/${story.id}`)
          .set('Authorization', String(ROLE.MODERATOR))
          .send({
            language: newOriginalLanguage.code,
            regionId: dataset.administrativeData[0].id,
            countryId: dataset.administrativeData[0].countryId,
          })
          .expect(({ status, body }) => {
            expect(status).toBe(200);
            expect(body.success).toBeTruthy();
          });

        const updatedStory = await getStoryById(story.id, ['translations']);

        expect(originalContent).toBe(
          updatedStory.translations.find(
            (translation) => translation.languageId === newOriginalLanguage.id,
          ).content,
        );
        expect(updatedStory.languageId).toBe(newOriginalLanguage.id);

        for (const translation of updatedStory.translations) {
          if (translation.id !== newOriginalLanguage.id) {
            expect(translation.content).toBe(
              provider
                ? story.translations.find(
                    (entity) => entity.languageId === translation.languageId,
                  ).content
                : translation.content,
            );
          }
        }
      });
    }
  });

  describe(`/story/moderator/:id/reject (PUT)`, () => {
    it('Should return status 400 and error VALIDATION_FAILED', async () => {
      const language = await addLanguage({
        isDefault: false,
        length: 3,
      });
      const story = dataset.stories[3];
      const firstRejectReason = getRandomRejectReason(dataset.rejectReasons);
      const secondRejectReason = getRandomRejectReason(dataset.rejectReasons, [
        firstRejectReason.id,
      ]);
      const reasonText = faker.lorem.sentence();

      await api
        .put(`/story/moderator/${story.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, firstRejectReason.id],
          reasonTexts: [reasonText, faker.lorem.sentence()],
          rationale: faker.lorem.sentence(),
          notificationLanguage: language.code,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(VALIDATION_FAILED);
          expect(res.status).toBe(400);
        });

      return api
        .put(`/story/moderator/${story.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, secondRejectReason.id],
          reasonTexts: [reasonText, reasonText],
          rationale: faker.lorem.sentence(),
          notificationLanguage: language.code,
        })
        .expect((res) => {
          expect(res.body?.error?.code).toBe(VALIDATION_FAILED);
          expect(res.status).toBe(400);
        });
    });

    it('Should reject story, return status 200 and valid body', async () => {
      const language = await addLanguage({
        isDefault: false,
        length: 3,
      });
      const story = dataset.stories[3];
      const firstRejectReason = getRandomRejectReason(dataset.rejectReasons);
      const secondRejectReason = getRandomRejectReason(dataset.rejectReasons, [
        firstRejectReason.id,
      ]);
      const rationale = faker.lorem.sentence();
      const firstReasonText = faker.lorem.sentence();
      const secondReasonText = faker.lorem.sentence();

      await api
        .put(`/story/moderator/${story.id}/reject`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          reasonIds: [firstRejectReason.id, secondRejectReason.id],
          reasonTexts: [firstReasonText, secondReasonText],
          rationale,
          notificationLanguage: language.code,
        })
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbStory = await getStoryById(story.id, ['rejectReasons']);

      expect(
        dbStory.rejectReasons.find(
          (rejectReason) =>
            rejectReason.rejectReasonId === firstRejectReason.id,
        ).rejectReasonText,
      ).toBe(firstReasonText);
      expect(
        dbStory.rejectReasons.find(
          (rejectReason) =>
            rejectReason.rejectReasonId === secondRejectReason.id,
        ).rejectReasonText,
      ).toBe(secondReasonText);
      expect(dbStory.rejectRationale).toBe(rationale);
      expect(dbStory.rejectReasonLanguageId).toBe(language.id);
    });
  });

  describe(`/story/moderator/:id/publish (PUT)`, () => {
    it('Should return status 400 and error SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR', async () => {
      const story = await addStory({
        status: STORY_STATUS.PENDING_PUBLICATION,
        isSensitive: true,
      });

      return api
        .put(`/story/moderator/${story.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(
            SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR,
          );
        });
    });

    it('Should return status 400 and error TRANSLATIONS_ARE_NEEDED', async () => {
      const languageIds = [];
      let story = await addStory({
        status: STORY_STATUS.PENDING_PUBLICATION,
      });
      story = await getStoryById(story.id, [
        'translations',
        'translations.language',
      ]);

      await Promise.all(
        story.translations
          .filter((translation) => translation.language.provider)
          .map((translation) => {
            languageIds.push(translation.language.id);

            return removeTranslationByStoryIdAndLanguageId(
              story.id,
              translation.language.id,
            );
          }),
      );

      return api
        .put(`/story/moderator/${story.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(TRANSLATIONS_ARE_NEEDED);
        });
    });

    it('Should publish story and return status 200 and valid body', async () => {
      const story = await addStory({
        status: STORY_STATUS.PENDING_PUBLICATION,
      });

      await assignAdministrativeDataToStory(
        dataset.administrativeData[0].id,
        story.id,
      );

      await api
        .put(`/story/moderator/${story.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      const dbStory = await getStoryById(story.id, [
        'difficulties',
        'organisations',
        'maternityStatus',
        'thematics',
      ]);

      expect(dbStory.status === STORY_STATUS.PUBLISHED).toBeTruthy();
    });
  });

  describe(`/story/moderator/:id (DELETE)`, () => {
    it('Should delete story and return status 200 and valid body', async () => {
      const story = dataset.stories[3];

      await api
        .delete(`/story/moderator/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      expect(await getStoryById(story.id)).toBeNull();
    });
  });

  describe(`/story/moderator/:id/unpublish (PUT)`, () => {
    it('Should return status 400 and error STORY_INCORRECT_STATUS', async () => {
      const story = await addStory({
        status: STORY_STATUS.NOT_STARTED,
        isSensitive: true,
      });

      return api
        .put(`/story/moderator/${story.id}/unpublish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(STORY_INCORRECT_STATUS);
        });
    });

    it('Should unPublish story and return status 200 and valid body', async () => {
      const publishedAt = new Date();
      const story = await addStory({
        status: STORY_STATUS.PUBLISHED,
        publishedAt,
      });

      await api
        .put(`/story/moderator/${story.id}/unpublish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect((res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      let dbStory = await getStoryById(story.id);

      expect(dbStory.status === 'pending_edit').toBeTruthy();

      await assignAdministrativeDataToStory(
        dataset.administrativeData[0].id,
        story.id,
      );

      await api
        .put(`/story/moderator/${story.id}/publish`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body.success).toBeTruthy();
        });

      dbStory = await getStoryById(story.id);

      expect(publishedAt.toISOString()).toBe(dbStory.publishedAt.toISOString());
      expect(dbStory.status === STORY_STATUS.PUBLISHED).toBeTruthy();
    });
  });

  describe('/story/moderator/:id/export (POST)', () => {
    it('Should return status 400 and error SENSITIVE_STORY_NOT_FOUND', async () => {
      return api
        .post(`/story/moderator/${dataset.stories[0].id}/export`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          immediateAssistance: faker.datatype.boolean(),
          note: faker.lorem.sentence(),
        })
        .expect(({ status, body }) => {
          expect(status).toBe(400);
          expect(body?.error?.code).toBe(SENSITIVE_STORY_NOT_FOUND);
        });
    });

    it('Should return status 400 and error STORY_INCORRECT_STATUS', async () => {
      const story = await addStory({
        status: STORY_STATUS.REJECTED,
        isSensitive: true,
      });

      return api
        .post(`/story/moderator/${story.id}/export`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          immediateAssistance: faker.datatype.boolean(),
          note: faker.lorem.sentence(),
        })
        .expect(({ status, body }) => {
          expect(status).toBe(400);
          expect(body?.error?.code).toBe(STORY_INCORRECT_STATUS);
        });
    });

    it('Should return status 400 and error SENSITIVE_STORY_ALREADY_EXPORTED', async () => {
      const story = await addStory({
        status: STORY_STATUS.SENT_TO_CASE_MANAGER,
        isSensitive: true,
      });

      return api
        .post(`/story/moderator/${story.id}/export`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          immediateAssistance: faker.datatype.boolean(),
          note: faker.lorem.sentence(),
        })
        .expect(async ({ status, body }) => {
          expect(status).toBe(400);
          expect(body?.error?.code).toBe(SENSITIVE_STORY_ALREADY_EXPORTED);
        });
    });

    it('Should return status 201 and valid body', async () => {
      let story = await addStory({
        status: STORY_STATUS.AWAITING_REPLAY,
        isSensitive: true,
      });

      await api
        .post(`/story/moderator/${story.id}/export`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          immediateAssistance: true,
          note: faker.lorem.sentence(),
        })
        .expect(async ({ status, body }) => {
          expect(status).toBe(201);
          expect(body.success).toBeTruthy();
        });

      story = await getStoryById(story.id);

      expect(story.status).toBe(STORY_STATUS.SENT_TO_CASE_MANAGER);
      expect(story.isUrgent).toBe(true);

      story = await addStory({
        status: STORY_STATUS.AWAITING_REPLAY,
        isSensitive: true,
      });

      await api
        .post(`/story/moderator/${story.id}/export`)
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          immediateAssistance: false,
          note: faker.lorem.sentence(),
        });

      story = await getStoryById(story.id);

      expect(story.isUrgent).toBe(false);
    });
  });
});
