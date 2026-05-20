import { FactoryProvider } from '@nestjs/common';
import Queue from 'bull';
import { ConfigService } from '@nestjs/config';
import { QUEUE_CONSTANT } from '../constant/queue.constant';

export const CheckUserAnswerProvider: FactoryProvider<any> = {
  provide: QUEUE_CONSTANT.CHECK_USER_ANSWER,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new Queue(QUEUE_CONSTANT.CHECK_USER_ANSWER, {
      redis: config.get('redis'),
      defaultJobOptions: { removeOnComplete: true, attempts: 3 },
    }),
};
