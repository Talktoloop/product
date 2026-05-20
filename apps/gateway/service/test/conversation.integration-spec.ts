import { INestApplication } from '@nestjs/common';
import { getAppInstance } from './mocks/app.mock';
import { clearDatabase } from './helpers';
import {
  getSMSConversationMock,
  initializeDataset,
} from './helpers/conversation';
import { ClientProxy } from '@nestjs/microservices';
import { SENDER_TYPE_CONSTANT, VALIDATION_FAILED } from '@ourloop/shared';
import { ConversationRO } from '../src/common/response/conversation.ro';
import { getConversationById } from './entity/conversation.mock';
import { getLanguages } from './entity/language.mock';
import { CHANNEL_CONSTANTS } from '../src/common/constant/channel.constant';
import { lastValueFrom } from 'rxjs';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('ConversationController (integration)', () => {
  let app: INestApplication;
  let client: ClientProxy;
  let connection: DataSource;

  beforeAll(async () => {
    app = await getAppInstance();
    connection = await getConnection(config);

    await clearDatabase();
    await initializeDataset();
    client = app.get('client');
    await client.connect();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
    client.close();
  });

  describe('Pattern saveConversation', () => {
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

    it('Should add no sensitive story and save conversation', async () => {
      const data = await getSMSConversationMock();

      const { id } = await lastValueFrom(
        client.send<ConversationRO>(
          {
            cmd: 'saveConversation',
          },
          data,
        ),
      );

      expect(Number.isInteger(id)).toBeTruthy();

      const conversation = await getConversationById(id, [
        'story',
        'story.translations',
        'story.country',
        'story.recipient',
        'smsMessages',
        'smsMessages.conversation',
        'smsMessages.conversation.story',
        'smsMessages.conversation.story.recipient',
      ]);

      expect(conversation.story.country.code).toBe(data.country);
      expect(conversation.createdAt.toISOString()).toBe(
        data.messages[0].timestamp,
      );
      expect(conversation.smsMessages.length).toBe(data.messages.length);

      const provider = data.messages[1].provider;
      const languages = await getLanguages();
      const language = languages.find(
        (item) => item.code === data.messages[0].language,
      );

      for (const message of data.messages) {
        expect(
          conversation.smsMessages.find(
            (item) =>
              item.conversationId === conversation.id &&
              item.conversation.provider === provider &&
              item.conversation.languageId === language.id &&
              item.content === message.content &&
              item.conversation.storyId &&
              item.conversation.story.recipient.phone ===
                data.userPhoneNumber &&
              item.conversation.serviceNumber === data.loopPhoneNumber &&
              item.isUser === (message.sender === SENDER_TYPE_CONSTANT.USER),
          ),
        ).toBeDefined();
      }
      expect(conversation.story.isSensitive).toBe(0);
      expect(conversation.story.country.code).toBe(data.country);
      expect(conversation.story.recipient.phone).toBe(data.userPhoneNumber);
      expect(conversation.story.conversationId).toBe(conversation.id);
      expect(conversation.story.channel).toBe(CHANNEL_CONSTANTS.SMS);
      expect(conversation.story.translations[0].languageId).toBe(language.id);
      expect(conversation.story.translations[0].content).toBe(
        data.messages[1].content,
      );
    });

    it('Should add sensitive story with needed contact and save conversation', async () => {
      const data = await getSMSConversationMock();

      const { id } = await lastValueFrom(
        client.send<ConversationRO>(
          {
            cmd: 'saveConversation',
          },
          {
            ...data,
            isSensitive: true,
            contactAccepted: true,
          },
        ),
      );

      expect(Number.isInteger(id)).toBeTruthy();

      const conversation = await getConversationById(id, [
        'story',
        'story.recipient',
      ]);

      expect(conversation.story.isSensitive).toBe(1);
      expect(conversation.story.recipient.userWantContact).toBe(true);
    });

    it('Should add sensitive story with no needed contact and save conversation', async () => {
      const data = await getSMSConversationMock();

      const { id } = await lastValueFrom(
        client.send<ConversationRO>(
          {
            cmd: 'saveConversation',
          },
          {
            ...data,
            isSensitive: true,
            contactAccepted: false,
          },
        ),
      );

      expect(Number.isInteger(id)).toBeTruthy();

      const conversation = await getConversationById(id, [
        'story',
        'story.recipient',
      ]);

      expect(conversation.story.isSensitive).toBe(1);
      expect(conversation.story.recipient.userWantContact).toBe(false);
    });
  });
});
