import { INestApplication } from '@nestjs/common';
import { getAppInstance } from './mocks/app.mock';
import { clearDatabase } from './helpers';
import { initializeDataset, getSMSMessagesMock } from './helpers/message';
import { ClientProxy } from '@nestjs/microservices';
import { ROLE } from '../src/user/constant/role.constant';
import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import {
  SMS_MESSAGE_IS_TOO_LONG_ERROR,
  CONVERSATION_NOT_FOUND,
  SENDER_TYPE_CONSTANT,
  USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR,
  PHONE_BLOCKERS_TYPE,
  NO_STORY,
  VALIDATION_FAILED,
  STORY_STATUS,
  STORY_INCORRECT_STATUS,
} from '@ourloop/shared';
import { SuccessRO } from '../src/common/response/success.ro';
import { getConversationById } from './entity/conversation.mock';
import { updateRecipient } from './entity/story-recipient.mock';
import { clientProxyMock } from './mocks/client-proxy.mock';
import { of, lastValueFrom } from 'rxjs';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('MessageController (integration)', () => {
  let dataset: any;
  let api: supertest.SuperTest<supertest.Test>;
  let app: INestApplication;
  let client: ClientProxy;
  let connection: DataSource;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    dataset = await initializeDataset();
    client = app.get('client');
    await client.connect();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
    if (client) client.close();
  });

  describe('/sms/message (POST)', () => {
    const introduction = faker.lorem.sentence(20).substr(0, 120);

    it('Should return status 400 and error STORY_INCORRECT_STATUS', async () => {
      const story = dataset.stories[1];

      return api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(),
          storyId: story.id,
        })
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(STORY_INCORRECT_STATUS);
        });
    });

    it('Should return status 400 and error CONVERSATION_NOT_FOUND', async () => {
      const story = dataset.stories[2];

      return api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(),
          storyId: story.id,
        })
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(CONVERSATION_NOT_FOUND);
        });
    });

    it('Should return status 400 and error USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR', async () => {
      const story = dataset.stories[0];

      await updateRecipient(story.recipientId, {
        userWantContact: false,
      });

      const { status, body } = await api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(),
          storyId: story.id,
        });

      await updateRecipient(story.recipientId, {
        userWantContact: true,
      });

      expect(status).toBe(400);
      expect(body?.error?.code).toBe(
        USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR,
      );
    });

    it('Should return status 400 and error SMS_MESSAGE_IS_TOO_LONG_ERROR for to long introduction message', async () => {
      const story = dataset.stories[0];

      return api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction: `${introduction}ą`,
          content: faker.lorem.sentence(),
          storyId: story.id,
        })
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(SMS_MESSAGE_IS_TOO_LONG_ERROR);
        });
    });

    it('Should return status 400 and error SMS_MESSAGE_IS_TOO_LONG_ERROR for to long moderator message', async () => {
      const story = dataset.stories[0];

      return api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction: introduction,
          content: `${faker.lorem.sentence(100).substr(0, 300)}ą`,
          storyId: story.id,
        })
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(SMS_MESSAGE_IS_TOO_LONG_ERROR);
        });
    });

    it('Should return valid body and status 200', async () => {
      const story = dataset.stories[0];

      jest.spyOn(clientProxyMock, 'send').mockImplementationOnce(() =>
        of({
          success: true,
        }),
      );

      return api
        .post('/sms/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(100).substr(0, 300),
          storyId: story.id,
        })
        .expect(async (res) => {
          expect(res.status).toBe(201);
          expect(res.body.success).toBeTruthy();
        });
    });
  });

  describe('Pattern saveMessages', () => {
    it('Should return error VALIDATION_FAILED', async () => {
      return lastValueFrom(
        client.send<any>(
          {
            cmd: 'saveConversation',
          },
          {},
        ),
      ).catch((error) => {
        expect(error?.message).toBe(VALIDATION_FAILED);
      });
    });

    it('Should save messages and story status should be changed to ISSUER_REPLIED', async () => {
      const data = await getSMSMessagesMock(dataset.country.code);
      const story = dataset.stories[0];
      const moderatorId = dataset.users[0].id;
      const datasetConversation = await getConversationById(
        dataset.conversation.id,
        ['story', 'story.recipient'],
      );

      const { success } = await lastValueFrom(
        client.send<SuccessRO>(
          {
            cmd: 'saveMessages',
          },
          {
            ...data,
            storyId: story.id,
            moderatorId,
          },
        ),
      );

      expect(success).toBeTruthy();

      const conversation = await getConversationById(story.conversationId, [
        'story',
        'story.recipient',
        'story.translations',
        'smsMessages',
        'smsMessages.conversation',
        'smsMessages.conversation.story',
        'smsMessages.conversation.story.recipient',
      ]);

      expect(conversation.story.status).toBe(STORY_STATUS.ISSUER_REPLIED);

      const lastMessage = conversation.smsMessages[0];
      for (const message of data.messages) {
        expect(
          conversation.smsMessages.find(
            (item) =>
              item.conversationId === conversation.id &&
              item.conversation.provider ===
                lastMessage.conversation.provider &&
              item.conversation.languageId ===
                lastMessage.conversation.languageId &&
              item.content === message.content &&
              item.isUser === true &&
              item.conversation.storyId === story.id &&
              item.conversation.story.recipient.phone ===
                datasetConversation.story?.recipient?.phone &&
              item.conversation.serviceNumber ===
                datasetConversation.serviceNumber &&
              item.userId ===
                (message.sender === SENDER_TYPE_CONSTANT.LOOP
                  ? moderatorId
                  : null),
          ),
        ).toBeDefined();
      }
    });

    it('Should save messages and story status should be changed to AWAITING_REPLAY', async () => {
      const data = await getSMSMessagesMock(dataset.country.code);
      const story = dataset.stories[0];

      data.messages.pop();

      const { success } = await lastValueFrom(
        client.send<SuccessRO>(
          {
            cmd: 'saveMessages',
          },
          {
            ...data,
            storyId: story.id,
            moderatorId: dataset.users[0].id,
          },
        ),
      );

      expect(success).toBeTruthy();

      const conversation = await getConversationById(story.conversationId, [
        'story',
        'story.translations',
        'smsMessages',
        'smsMessages.conversation',
      ]);

      expect(conversation.story.status).toBe(STORY_STATUS.AWAITING_REPLAY);
    });

    it('Should save messages and story status should be changed to ISSUER_DID_NOT_REPLIED', async () => {
      const data = await getSMSMessagesMock(dataset.country.code);
      const story = dataset.stories[0];

      const { success } = await lastValueFrom(
        client.send<SuccessRO>(
          {
            cmd: 'saveMessages',
          },
          {
            ...data,
            messages: [],
            storyId: story.id,
            moderatorId: dataset.users[0].id,
          },
        ),
      );

      expect(success).toBeTruthy();

      const conversation = await getConversationById(story.conversationId, [
        'story',
        'story.translations',
        'smsMessages',
        'smsMessages.conversation',
      ]);

      expect(conversation.story.status).toBe(
        STORY_STATUS.ISSUER_DID_NOT_REPLIED,
      );
    });
  });

  describe('/sms/is-phone-available/{storyId}/:id (GET)', () => {
    it('Should return status 400 and error NO_STORY', async () => {
      return api
        .get(`/sms/is-phone-available/${faker.string.uuid()}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(NO_STORY);
        });
    });

    it('Should return status 200 and type "noContact"', async () => {
      const story = dataset.stories[0];

      await updateRecipient(story.recipientId, {
        userWantContact: false,
      });

      return api
        .get(`/sms/is-phone-available/${story.id}`)
        .set('Authorization', String(ROLE.MODERATOR))
        .expect(async (res) => {
          expect(res.status).toBe(200);
          expect(res.body).toEqual({
            type: PHONE_BLOCKERS_TYPE.NO_CONTACT,
            storyId: null,
          });
        });
    });

    for (const contactAccepted of [true, null, undefined]) {
      it(`Should return status 200 and type other than "noContact" for contactAccepted with value "${contactAccepted}"`, async () => {
        const story = dataset.stories[0];

        await updateRecipient(story.recipientId, {
          userWantContact: contactAccepted,
        });

        await api
          .get(`/sms/is-phone-available/${story.id}`)
          .set('Authorization', String(ROLE.MODERATOR))
          .then((res) => {
            expect(res.status).toBe(200);
            expect(
              res.body?.type !== PHONE_BLOCKERS_TYPE.NO_CONTACT,
            ).toBeTruthy();
          });
      });
    }

    for (const contactType of [
      PHONE_BLOCKERS_TYPE.CHAT,
      PHONE_BLOCKERS_TYPE.REPLY,
      PHONE_BLOCKERS_TYPE.SMS,
    ]) {
      it(`Should return status 200 and type "${contactType}" and story ID`, async () => {
        const story = dataset.stories[0];

        await updateRecipient(story.recipientId, {
          userWantContact: true,
        });

        jest.spyOn(clientProxyMock, 'send').mockImplementationOnce(() =>
          of({
            storyId: story.id,
            type: contactType,
          }),
        );

        return api
          .get(`/sms/is-phone-available/${story.id}`)
          .set('Authorization', String(ROLE.MODERATOR))
          .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toEqual({
              type: contactType,
              storyId: story.id,
            });
          });
      });
    }
  });
});
