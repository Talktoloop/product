import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { I18nService } from 'nestjs-i18n';
import { QUEUE } from '../common/enum/queue.enum';
import { CommunicatorService } from '../communicator/service/communicator.service';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), CacheModule.register()],
      providers: [
        StorageService,
        {
          provide: CommunicatorService,
          useValue: {},
        },
        {
          provide: I18nService,
          useValue: {},
        },
        {
          provide: QUEUE.SEND_CONVERSATION_TO_API,
          useValue: {},
        },
        {
          provide: ConfigService,
          useValue: {
            get: () => null,
          },
        },
      ],
    }).compile();

    service = module.get<StorageService>(StorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
