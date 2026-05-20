import { FactoryProvider } from '@nestjs/common';
import Queue from 'bull';
import { ConfigService } from '@nestjs/config';
import { QUEUE_CONSTANT } from '../constant/queue.constant';

export const InitializeCallProvider: FactoryProvider<any> = {
  provide: QUEUE_CONSTANT.INITIALIZE_CALL,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new Queue(QUEUE_CONSTANT.INITIALIZE_CALL, {
      redis: config.get('redis'),
      defaultJobOptions: { removeOnComplete: true, attempts: 1 },
    }),
};
