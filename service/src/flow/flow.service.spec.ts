import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { I18nService } from 'nestjs-i18n';
import { ClientProxyService } from '../api/service/client-proxy.service';
import { CommunicatorService } from '../communicator/service/communicator.service';
import { StorageService } from '../storage/storage.service';
import { FlowService } from './flow.service';

describe('FlowService', () => {
  let service: FlowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [
        FlowService,
        {
          provide: StorageService,
          useValue: {},
        },
        {
          provide: I18nService,
          useValue: {},
        },
        {
          provide: ConfigService,
          useValue: {
            get: () => null,
          },
        },
        {
          provide: ClientProxyService,
          useValue: {},
        },
        {
          provide: I18nService,
          useValue: {},
        },
        {
          provide: CommunicatorService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FlowService>(FlowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
