import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';
import { LanguageService } from '../language/language.service';
import { organisationServiceMock } from '../../test/mocks/organisation.service.mock';
import { languageServiceMock } from '../../test/mocks/language.service.mock';
import { CountryService } from '../country/service/country.service';
import { countryServiceMock } from '../../test/mocks/country.service.mock';
import { StoryService } from '../story/service/story.service';
import { storyServiceMock } from '../../test/mocks/story.service.mock';
import { configMock } from '../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
import { airTableOrganisationServiceMock } from '../../test/mocks/airtable-organisation.service.mock';

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

describe('Organisation Controller', () => {
  let controller: OrganisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationController],
      providers: [
        {
          provide: OrganisationService,
          useValue: organisationServiceMock,
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
          provide: StoryService,
          useValue: storyServiceMock,
        },
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
        {
          provide: AirTableOrganisationService,
          useValue: airTableOrganisationServiceMock,
        },
      ],
    }).compile();

    controller = module.get<OrganisationController>(OrganisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
