import { Test, TestingModule } from '@nestjs/testing';
import { AirTableClientController } from './airtable-client.controller';
import { AirTableClientRepository } from './repository/airtable-client.repository';
import { AirTableClientService } from './airtable-client.service';
import { configMock } from '../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../common/constant/di.constant';

jest.mock('../config/default', () => ({
  dynamicConfiguration: () => {
    return {
      database: {
        charset: '',
        database: '',
        host: '',
        password: 'root',
        port: 3307,
        type: 'mysql',
        username: '',
      },
    };
  },
}));

describe('AirtableClientController', () => {
  let controller: AirTableClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirTableClientController],
      providers: [
        AirTableClientRepository,
        {
          provide: AirTableClientService,
          useValue: AirTableClientService,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<AirTableClientController>(AirTableClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
