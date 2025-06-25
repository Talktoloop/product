import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationService } from './organisation.service';
import { OrganisationRepository } from './organisation.repository';
import { configMock } from '../../test/mocks/config.mock';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { organisationRepositoryMock } from '../../test/mocks/organisation.repository';
import { UserService } from '../user/service/user.service';
import { userServiceMock } from '../../test/mocks/user.service.mock';
import { StoryTranslationModeratorService } from '../story/service/story-translation-moderator.service';
import { storyTranslationModeratorServiceMock } from '../../test/mocks/story-translation-moderator.service.mock';
import { NotificationService } from '../notification/service/notification.service';
import { notificationServiceMock } from '../../test/mocks/notification.service.mock';
import { OrganisationApplicationService } from '../user/service/organisation-application.service';
import { organisationApplicationServiceMock } from '../../test/mocks/organisation-application.service.mock';
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

describe('OrganisationService', () => {
  let service: OrganisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganisationService,
        {
          provide: DI_CONSTANTS.CONFIG,
          useValue: configMock,
        },
        {
          provide: OrganisationRepository,
          useValue: organisationRepositoryMock,
        },
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        {
          provide: StoryTranslationModeratorService,
          useValue: storyTranslationModeratorServiceMock,
        },
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
        {
          provide: OrganisationApplicationService,
          useValue: organisationApplicationServiceMock,
        },
        {
          provide: AirTableOrganisationService,
          useValue: airTableOrganisationServiceMock,
        },
      ],
    }).compile();

    service = module.get<OrganisationService>(OrganisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
