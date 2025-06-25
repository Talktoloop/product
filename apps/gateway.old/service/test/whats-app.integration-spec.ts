import { INestApplication } from '@nestjs/common';
import { getAppInstance } from './mocks/app.mock';
import { clearDatabase } from './helpers';
import {
  getWhatsAppConversationMock,
  initializeDataset,
} from './helpers/messanger';
import { ClientProxy } from '@nestjs/microservices';
import {
  NO_STORY,
  CONVERSATION_NOT_FOUND,
  VALIDATION_FAILED,
  STORY_INCORRECT_STATUS,
} from '@ourloop/shared';
import {
  getMessengerConversationById,
  getMessageByIdParams,
} from './entity/messanger.mock';
import { ConversationRO } from '../src/common/response/conversation.ro';
import { getLanguages } from './entity/language.mock';
import { CHANNEL_CONSTANTS } from '../src/common/constant/channel.constant';
import { faker } from '@faker-js/faker';
import { ROLE } from '../src/user/constant/role.constant';
import supertest from 'supertest';
import { clientProxyMock } from './mocks/client-proxy.mock';
import { of, lastValueFrom } from 'rxjs';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('WhatsAppMessengerController (integration)', () => {
  let dataset: any;
  let app: INestApplication;
  let client: ClientProxy;
  let api: supertest.SuperTest<supertest.Test>;
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
    client.close();
  });

  describe('Pattern saveWhatsAppFlowRecord', () => {
    it('Should return error VALIDATION_FAILED', async () => {
      return lastValueFrom(
        client.send<any>(
          {
            cmd: 'saveWhatsappStory',
          },
          {},
        ),
      ).catch((error) => {
        expect(error?.message).toBe(VALIDATION_FAILED);
      });
    });

    it('Should add no sensitive story and save conversation', async () => {
      const dataCollection = [];

      dataCollection.push(
        await getWhatsAppConversationMock().then((result) => result),
      );
      dataCollection.push(
        await getWhatsAppConversationMock('John', 'Doe').then(
          (result) => result,
        ),
      );
      dataCollection.push(
        await getWhatsAppConversationMock('John', null).then(
          (result) => result,
        ),
      );
      dataCollection.push(
        await getWhatsAppConversationMock(null, 'Doe').then((result) => result),
      );
      dataCollection.push(
        await getWhatsAppConversationMock(null, null).then((result) => result),
      );

      for (let index = 0; index < dataCollection.length, index++; ) {
        const data = dataCollection[index];

        const { id } = await lastValueFrom(
          client.send<ConversationRO>(
            {
              cmd: 'saveWhatsappConversation',
            },
            data,
          ),
        ).then(async (result) => {
          expect(Number.isInteger(result.id)).toBeTruthy();

          return result;
        });

        const conversation = await getMessengerConversationById(id, [
          'story',
          'country',
          'story.translations',
          'story.country',
          'story.recipient',
          'messengerMessages',
          'language',
        ]);

        expect(conversation.messengerMessages.length).toBe(
          data.flowResponses.length,
        );

        const languages = await getLanguages();
        const language = languages.find((item) => item.code === data.lang);

        expect(conversation.language.code).toBe(language.code);
        expect(conversation.uuid).toBe(data.storyUuid);
        expect(conversation.story.recipient.firstName).toBe(
          data.user.firstName,
        );
        expect(conversation.story.recipient.lastName).toBe(data.user.lastName);
        expect(conversation.additionalInfo).toBe(data.additionalInfo);
        expect(conversation.story.isSensitive).toBe(0);
        expect(conversation.story.conversationId).toBe(conversation.id);
        expect(conversation.story.channel).toBe(CHANNEL_CONSTANTS.WHATSAPP);
        expect(conversation.story.translations[0].languageId).toBe(language.id);

        for (const message of data.flowResponses) {
          expect(
            conversation.messengerMessages.find(
              (item) =>
                item.conversationId === conversation.id &&
                item.content === message.content &&
                item.isStory === message.isStory &&
                item.type === message.type,
            ),
          ).toBeDefined();
        }
      }
    });
  });

  describe('Pattern saveWhatsappMessage', () => {
    it('Should return error VALIDATION_FAILED', async () => {
      return lastValueFrom(
        client.send<any>(
          {
            cmd: 'saveWhatsappMessage',
          },
          {},
        ),
      ).catch((error) => {
        expect(error?.message).toBe(VALIDATION_FAILED);
      });
    });

    it('Should return error CONVERSATION_NOT_FOUND', async () => {
      return lastValueFrom(
        client.send<ConversationRO>(
          {
            cmd: 'saveWhatsappMessage',
          },
          {
            messengerConversationId: faker.number.int(1000),
            messages: [
              {
                type: 0,
                content: faker.lorem.sentence(),
                createdAt: new Date(),
                isStory: false,
              },
            ],
          },
        ),
      ).catch((error) => {
        expect(error?.message).toBe(CONVERSATION_NOT_FOUND);
      });
    });

    it('Should save messages', async () => {
      const content = faker.lorem.sentence();

      await lastValueFrom(
        client.send<ConversationRO>(
          {
            cmd: 'saveWhatsappMessage',
          },
          {
            messengerConversationId: dataset.conversation.id,
            messages: [
              {
                type: 0,
                content,
                createdAt: new Date(),
                isStory: false,
              },
            ],
          },
        ),
      ).then((result: any) => {
        expect(result?.success).toBeTruthy();
      });

      const message = await getMessageByIdParams({
        content,
        conversationId: dataset.conversation.id,
      });

      expect(message.content).toBe(content);
    });
  });

  describe('/messenger/whatsapp/message (POST)', () => {
    const introduction = faker.lorem.sentence(20).substr(0, 120);

    it('Should return status 400 and error STORY_INCORRECT_STATUS', async () => {
      return api
        .post('/messenger/whatsapp/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(),
          storyId: dataset.stories[1].id,
        })
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(STORY_INCORRECT_STATUS);
        });
    });

    it('Should return status 400 and error NO_STORY', async () => {
      return api
        .post('/messenger/whatsapp/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(),
          storyId: faker.string.uuid(),
        })
        .expect((res) => {
          expect(res.status).toBe(400);
          expect(res.body?.error?.code).toBe(NO_STORY);
        });
    });

    it('Should return valid body and status 201', async () => {
      const story = dataset.stories[0];
      const content = faker.lorem.sentence();

      jest.spyOn(clientProxyMock, 'send').mockImplementationOnce(() =>
        of([
          {
            content,
            type: 0,
            createdAt: new Date(),
            isStory: false,
          },
        ]),
      );

      await api
        .post('/messenger/whatsapp/message')
        .set('Authorization', String(ROLE.MODERATOR))
        .send({
          introduction,
          content: faker.lorem.sentence(100).substr(0, 300),
          storyId: story.id,
        })
        .expect((res) => {
          expect(res.status).toBe(201);
          expect(res.body.success).toBeTruthy();
        });

      const message = await getMessageByIdParams({
        content,
        conversationId: dataset.conversation.id,
      });

      expect(message.content).toBe(content);
    });
  });
});
