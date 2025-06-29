import { FactoryProvider } from '@nestjs/common';
import Queue from 'bull';
import { ConfigService } from '@nestjs/config';
import { QUEUE_CONSTANT } from '../constant/queue.constant';

export const RemoveLogsProvider: FactoryProvider<any> = {
  provide: QUEUE_CONSTANT.REMOVE_LOGS,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new Queue(QUEUE_CONSTANT.REMOVE_LOGS, {
      redis: config.get('redis'),
      defaultJobOptions: { removeOnComplete: true, attempts: 1 },
    }),
};
