import { FactoryProvider } from '@nestjs/common';
import Queue from 'bull';
import { ConfigService } from '@nestjs/config';
import { QUEUE } from '../enum/queue.enum';

export const QueueSendConversationToApiProvider: FactoryProvider<any> = {
  provide: QUEUE.SEND_CONVERSATION_TO_API,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new Queue(QUEUE.SEND_CONVERSATION_TO_API, {
      redis: config.get('redis'),
      defaultJobOptions: { removeOnComplete: true, attempts: 3 },
    }),
};
