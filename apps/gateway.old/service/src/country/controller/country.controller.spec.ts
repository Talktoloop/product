import { Test, TestingModule } from '@nestjs/testing';
import { CountryService } from '../service/country.service';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { CountryController } from './country.controller';
import { AdministrativeDataService } from '../service/administrative-data.service';
import { administrativeDataServiceMock } from '../../../test/mocks/administrative-data.service.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { configMock } from '../../../test/mocks/config.mock';
import { AirTableCountryService } from '../../airtable-client/service/airtable-country.service';
import { airTableCountryServiceMock } from '../../../test/mocks/airtable-country.service.mock';

jest.mock('../../config/default', () => ({
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

describe('CountryController', () => {
  let controller: CountryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [
        {
          provide: CountryService,
          useValue: countryServiceMock,
        },
        {
          provide: AdministrativeDataService,
          useValue: administrativeDataServiceMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
        {
          provide: AirTableCountryService,
          useValue: airTableCountryServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CountryController>(CountryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
