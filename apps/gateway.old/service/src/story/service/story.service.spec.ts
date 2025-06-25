import { Test, TestingModule } from '@nestjs/testing';
import { StoryService } from './story.service';
import { StoryRepository } from '../repository/story.repository';
import { StoryVoteRepository } from '../repository/story-vote.repository';
import { StoryViewRepository } from '../repository/story-view.repository';
import { OrganisationService } from '../../organisation/organisation.service';
import { DifficultyService } from '../../lexicon/service/difficulty.service';
import { MaternityStatusService } from '../../lexicon/service/maternity-status.service';
import { lexiconServiceMock } from '../../../test/mocks/lexicon.service.mock';
import { CategoryService } from '../../category/category.service';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { UserService } from '../../user/service/user.service';
import { userServiceMock } from '../../../test/mocks/user.service.mock';
import { ThematicService } from '../../lexicon/service/thematic.service';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { CountryService } from '../../country/service/country.service';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { StoryTranslationRepository } from '../repository/story-translation.repository';
import { storyTranslationRepositoryMock } from '../../../test/mocks/story-translation.repository.mock';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { storyRecipientRepositoryMock } from '../../../test/mocks/story-recipient.repository.mock';
import { StoryAdministrativeDataRepository } from '../repository/story-administrative-data.repository';
import { storyAdministrativeDataRepositoryMock } from '../../../test/mocks/story-administrative-data.repository.mock';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { administrativeDataServiceMock } from '../../../test/mocks/administrative-data.service.mock';
import { messageServiceMock } from '../../../test/mocks/message.service.mock';
import { MessageService } from '../../sms/service/message.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { MessengerService } from '../../messenger/service/messenger.service';
import { CountryAdministrativeDataRepository } from '../../country/repository/country-administrative-data.repository';
import { countryAdministrativeDataRepositoryMock } from '../../../test/mocks/country-administrative-data.repository.mock';
import { AirTableOrganisationService } from '../../airtable-client/service/airtable-organisation.service';
import { airTableOrganisationServiceMock } from '../../../test/mocks/airtable-organisation.service.mock';
import { exportServiceMock } from '../../../test/mocks/export.service.mock';
import { ExportService } from './export.service';

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

describe('StoryService', () => {
  let service: StoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoryService,
        StoryRepository,
        StoryVoteRepository,
        StoryViewRepository,
        {
          provide: OrganisationService,
          useValue: lexiconServiceMock,
        },
        {
          provide: ExportService,
          useValue: exportServiceMock,
        },
        {
          provide: StoryTranslationRepository,
          useValue: storyTranslationRepositoryMock,
        },
        {
          provide: DifficultyService,
          useValue: lexiconServiceMock,
        },
        {
          provide: MaternityStatusService,
          useValue: lexiconServiceMock,
        },
        {
          provide: CategoryService,
          useValue: lexiconServiceMock,
        },
        {
          provide: RejectReasonService,
          useValue: lexiconServiceMock,
        },
        {
          provide: ThematicService,
          useValue: lexiconServiceMock,
        },
        {
          provide: UserService,
          useValue: userServiceMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: AdministrativeDataService,
          useValue: administrativeDataServiceMock,
        },
        {
          provide: CountryService,
          useValue: countryServiceMock,
        },
        {
          provide: MessageService,
          useValue: messageServiceMock,
        },
        {
          provide: MessengerService,
          useValue: messengerServiceMock,
        },
        {
          provide: StoryRecipientRepository,
          useValue: storyRecipientRepositoryMock,
        },
        {
          provide: StoryRecipientRepository,
          useValue: storyRecipientRepositoryMock,
        },
        {
          provide: StoryAdministrativeDataRepository,
          useValue: storyAdministrativeDataRepositoryMock,
        },
        {
          provide: CountryAdministrativeDataRepository,
          useValue: countryAdministrativeDataRepositoryMock,
        },
        {
          provide: AirTableOrganisationService,
          useValue: airTableOrganisationServiceMock,
        },
      ],
    }).compile();

    service = module.get<StoryService>(StoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
