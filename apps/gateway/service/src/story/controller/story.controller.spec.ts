import { Test, TestingModule } from '@nestjs/testing';
import { StoryController } from './story.controller';
import { StoryService } from '../service/story.service';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { CountryService } from '../../country/service/country.service';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { ExportService } from '../service/export.service';
import { exportServiceMock } from '../../../test/mocks/export.service.mock';
import { OrganisationService } from '../../organisation/organisation.service';
import { organisationServiceMock } from '../../../test/mocks/organisation.service.mock';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { administrativeDataServiceMock } from '../../../test/mocks/administrative-data.service.mock';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { LanguageService } from '../../language/language.service';

jest.mock('../../common/constant/email-templates.constants');
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
  staticConfig: {
    contentLength: {
      min: 5,
      max: 30000,
    },
    pagination: {
      maxLimit: 50,
    },
  },
}));

describe('Story Controller', () => {
  let controller: StoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryController],
      providers: [
        {
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: CountryService,
          useValue: countryServiceMock,
        },
        {
          provide: ExportService,
          useValue: exportServiceMock,
        },
        {
          provide: OrganisationService,
          useValue: organisationServiceMock,
        },
        {
          provide: AdministrativeDataService,
          useValue: administrativeDataServiceMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
      ],
    }).compile();

    controller = module.get<StoryController>(StoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
