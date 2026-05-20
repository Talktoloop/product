import { Test, TestingModule } from '@nestjs/testing';
import { StoryModeratorService } from './story-moderator.service';
import { StoryService } from './story.service';
import { StoryRepository } from '../repository/story.repository';
import { storyRepositoryMock } from '../../../test/mocks/story.repository.mock';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { getStoryStub } from '../../../test/entity/story.mock';
import { faker } from '@faker-js/faker';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { PROVIDER_TYPE } from '../../language/interface/provider.enum';
import { LanguageRepository } from '../../language/language.repository';
import { languageRepositoryMock } from '../../../test/mocks/language.repository.mock';
import { CountryService } from '../../country/service/country.service';
import { countryServiceMock } from '../../../test/mocks/country.service.mock';
import { airTableMock, create } from '../../../test/mocks/airtable.mock';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { GENDER_VALUE, AGE_VALUE } from '../../common/types';
import { STORY_STATUS } from '@ourloop/shared';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { upperCaseFirst } from '../../common/helpers';
import { DIFFICULTY } from '../../airtable-client/constant/difficulty.constant';
import { THEMATIC } from '../../airtable-client/constant/thematic.constant';
import { DI_CONSTANTS } from '../../common/constant/di.constant';
import { StoryConversationService } from './story-conversation.service';
import { conversationServiceMock } from '../../../test/mocks/conversation.service.mock';
import { StoryConversationEntity } from '../entity/story-conversation.entity';
import { UserEntity } from '../..//user/entity/user.entity';
import { MARKED_AS_SENSITIVE_BY } from '../../common/constant/marked-as-sensitive.constant';
import { NotificationService } from '../../notification/service/notification.service';
import { notificationServiceMock } from '../../../test/mocks/notification.service.mock';
import { MessengerMessageRepository } from '../../messenger/repository/messenger-message.repository';
import { MessageRepository } from '../../sms/repository/message.repository';
import { messageRepositoryMock } from '../../../test/mocks/message.repository.mock';
import { messengerMessageRepositoryMock } from '../../../test/mocks/messenger-message.repository.mock';
import { StoryTranslationModeratorService } from './story-translation-moderator.service';
import { storyTranslationModeratorServiceMock } from '../../../test/mocks/story-translation-moderator.service.mock';
import { storyRejectReasonRepositoryMock } from '../../../test/mocks/story-reject-reason.repository.mock';
import { StoryRejectReasonRepository } from '../repository/story-reject-reason.repository';
import { IvrrService } from '../../ivrr/service/ivrr.service';
import { ivrrServiceMock } from '../../../test/mocks/ivrr.service.mock';
import { StoryHistoricalTranslationModeratorService } from './story-historical-translation-moderator.service';
import { storyHistoricalTranslationModeratorServiceMock } from '../../../test/mocks/story-historial-translation-moderator.service.mock';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { storyRecipientRepositoryMock } from '../../../test/mocks/story-recipient.repository.mock';
import { StoryAdministrativeDataRepository } from '../repository/story-administrative-data.repository';
import { storyAdministrativeDataRepositoryMock } from '../../../test/mocks/story-administrative-data.repository.mock';
import { CountryAdministrativeDataRepository } from '../../country/repository/country-administrative-data.repository';
import { countryAdministrativeDataRepositoryMock } from '../../../test/mocks/country-administrative-data.repository.mock';
import { AdministrativeDataService } from '../../country/service/administrative-data.service';
import { administrativeDataServiceMock } from '../../../test/mocks/administrative-data.service.mock';
import { MessengerService } from '../../messenger/service/messenger.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';
import { AirTableOrganisationService } from '../../airtable-client/service/airtable-organisation.service';
import { airTableOrganisationServiceMock } from '../../../test/mocks/airtable-organisation.service.mock';
import { OrganisationRepository } from '../../organisation/organisation.repository';
import { organisationRepositoryMock } from '../../../test/mocks/organisation.repository';
import { IvrrCallRepository } from '../../ivrr/repository/ivrr-call.repository';
import { ivrrCallRepositoryMock } from '../../../test/mocks/ivrr-call.repository.mock';
import { RejectReasonService } from '../../lexicon/service/reject-reason.service';
import { lexiconServiceMock } from '../../../test/mocks/lexicon.service.mock';
import { DI_CONSTANTS as SHARED_DI } from '@ourloop/shared';
import { clientProxyMock } from '../../../test/mocks/client-proxy.mock';
import { StoryNotificationService } from '../../notification/service/story-notification.service';
import { storyNotificationServiceMock } from '../../../test/mocks/story-notification.service.mock';

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

describe('StoryModeratorService', () => {
  let service: StoryModeratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoryModeratorService,
        {
          provide: IvrrService,
          useValue: ivrrServiceMock,
        },
        {
          provide: NotificationService,
          useValue: notificationServiceMock,
        },
        {
          provide: StoryHistoricalTranslationModeratorService,
          useValue: storyHistoricalTranslationModeratorServiceMock,
        },
        {
          provide: StoryConversationService,
          useValue: conversationServiceMock,
        },
        {
          provide: StoryTranslationModeratorService,
          useValue: storyTranslationModeratorServiceMock,
        },
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
          provide: StoryRepository,
          useValue: storyRepositoryMock,
        },
        {
          provide: StoryRejectReasonRepository,
          useValue: storyRejectReasonRepositoryMock,
        },
        {
          provide: LanguageRepository,
          useValue: languageRepositoryMock,
        },
        {
          provide: DI_CONSTANTS.AIRTABLE,
          useValue: airTableMock,
        },
        {
          provide: MessengerMessageRepository,
          useValue: messengerMessageRepositoryMock,
        },
        {
          provide: MessageRepository,
          useValue: messageRepositoryMock,
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
          provide: AdministrativeDataService,
          useValue: administrativeDataServiceMock,
        },
        {
          provide: MessengerService,
          useValue: messengerServiceMock,
        },
        {
          provide: AirTableOrganisationService,
          useValue: airTableOrganisationServiceMock,
        },
        {
          provide: OrganisationRepository,
          useValue: organisationRepositoryMock,
        },
        {
          provide: IvrrCallRepository,
          useValue: ivrrCallRepositoryMock,
        },
        {
          provide: RejectReasonService,
          useValue: lexiconServiceMock,
        },
        {
          provide: SHARED_DI.CLIENT_PROXY,
          useValue: clientProxyMock,
        },
        {
          provide: StoryNotificationService,
          useValue: storyNotificationServiceMock,
        },
      ],
    }).compile();

    service = module.get<StoryModeratorService>(StoryModeratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Is method defined', () => {
    it('exportStoryToAirTable is defined', () =>
      expect(service.exportStoryToAirTable).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const story = getStoryStub({
      isSensitive: true,
      status: STORY_STATUS.ISSUER_DID_NOT_REPLIED,
      age: AGE_VALUE['14-17'],
      gender: GENDER_VALUE.NON_BINARY,
      phone: faker.phone.number(),
      languageId: faker.number.int(1000),
    });
    const originalLanguage = new LanguageEntity();
    const englishLanguage = new LanguageEntity();
    const originalTranslation = new StoryTranslationEntity();
    const englishTranslation = new StoryTranslationEntity();
    const firstThematicChild = new ThematicEntity();
    const secondThematicChild = new ThematicEntity();
    const firstThematicParent = new ThematicEntity();
    const secondThematicParent = new ThematicEntity();
    const organisation = new OrganisationEntity();
    const firstDifficulty = new DifficultyEntity();
    const secondDifficulty = new DifficultyEntity();
    const country = new CountryEntity();
    const recipient = new StoryRecipientEntity();

    recipient.id = 1;
    recipient.phone = faker.phone.number();
    recipient.email = faker.internet.email();
    recipient.userWantContact;
    recipient.genderByModerator = 3;
    recipient.ageByModerator = 1;

    originalLanguage.id = story.languageId;
    originalLanguage.code = LANGUAGES_CONSTANTS.FRENCH;
    originalLanguage.provider = PROVIDER_TYPE.AWS;

    englishLanguage.id = story.languageId;
    englishLanguage.code = LANGUAGES_CONSTANTS.ENGLISH;
    englishLanguage.provider = PROVIDER_TYPE.AWS;

    originalTranslation.language = originalLanguage;
    originalTranslation.languageId = originalLanguage.id;
    originalTranslation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
    originalTranslation.storyId = story.id;
    originalTranslation.content = faker.lorem.sentence();
    originalTranslation.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;

    englishTranslation.language = englishLanguage;
    englishTranslation.languageId = englishLanguage.id;
    englishTranslation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
    englishTranslation.storyId = story.id;
    englishTranslation.content = faker.lorem.sentence();
    englishTranslation.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;

    story.translations = [originalTranslation, englishTranslation];
    story.language = originalLanguage;

    firstThematicParent.code = THEMATIC['1. Health'];
    firstThematicChild.code = THEMATIC['1.a Medical Centres'].split('.')[1];
    firstThematicChild.parent = firstThematicParent;

    secondThematicParent.code = THEMATIC['2. Food security'];
    secondThematicChild.code = THEMATIC['2.a Nutrition'].split('.')[1];
    secondThematicChild.parent = secondThematicParent;

    story.thematics = [firstThematicChild, secondThematicChild];
    story.markedAsSensitiveByRole = MARKED_AS_SENSITIVE_BY.MODERATOR;
    story.recipient = recipient;

    organisation.name = faker.company.name();

    story.organisations = [organisation];

    firstDifficulty.code = DIFFICULTY.Seeing;
    secondDifficulty.code = DIFFICULTY.Hearing;

    story.difficulties = [firstDifficulty, secondDifficulty];

    country.name = upperCaseFirst(faker.lorem.word());

    story.country = country;

    const user = new UserEntity();
    user.email = faker.internet.email();
    user.nickname = `${faker.person.firstName()} ${faker.person.lastName()}`;
    story.markedAsSensitiveBy = user;
    story.storyAdministrativeData = [];

    it('exportStoryToAirTable() does call AirTable.create() with the expected parameters', async () => {
      jest
        .spyOn(storyServiceMock, 'findById')
        .mockReturnValueOnce(new Promise((res) => res(story)));

      const data = {
        note: faker.lorem.sentence(),
        immediateAssistance: false,
      };

      await service.exportStoryToAirTable(user.id, story.id, data);

      expect(create).toBeCalledWith({
        records: [
          {
            fields: {
              Location: story.place,
              'Author Age': '14-17',
              'Author Gender': 'Non binary',
              'Cell phone': story.recipient.phone,
              Country: country.name,
              Disability: ['Seeing', 'Hearing'],
              Email: story.recipient.email,
              'Loop ID': story.id,
              'Note from moderator 🔒': data.note,
              'Original language': 'French',
              'Story 🔒': originalTranslation.content,
              'Story ENG 🔒': englishTranslation.content,
              'Tagged organisation': organisation.name,
              'Thematic Area': ['1. Health', '2. Food security'],
              'Thematic Area - Subsection': [
                '1.a Medical Centres',
                '2.a Nutrition',
              ],
              Urgency: 'Does not need immediate assistance',
              'Author allowed for contact': 'true',
              'Tagged sensitive by 🔒': `Moderator: ${story.markedAsSensitiveBy?.nickname}`,
            },
          },
        ],
      });

      story.markedAsSensitiveBy.nickname = undefined;
      story.recipient.userWantContact = false;
      story.recipient.phone = '';
      story.recipient.email = '';
      const conversation = new StoryConversationEntity();

      story.conversationId = conversation.id;

      jest
        .spyOn(storyServiceMock, 'findById')
        .mockReturnValueOnce(new Promise((res) => res(story)));

      jest
        .spyOn(conversationServiceMock, 'findById')
        .mockReturnValue(new Promise((res) => res(conversation)));

      await service.exportStoryToAirTable(user.id, story.id, data);

      expect(create).toBeCalledWith({
        records: [
          {
            fields: {
              Location: story.place,
              'Author Age': '14-17',
              'Author Gender': 'Non binary',
              'Cell phone': story.recipient.phone,
              Country: country.name,
              Disability: ['Seeing', 'Hearing'],
              Email: story.recipient.email,
              'Loop ID': story.id,
              'Note from moderator 🔒': data.note,
              'Original language': 'French',
              'Story 🔒': originalTranslation.content,
              'Story ENG 🔒': englishTranslation.content,
              'Tagged organisation': organisation.name,
              'Thematic Area': ['1. Health', '2. Food security'],
              'Thematic Area - Subsection': [
                '1.a Medical Centres',
                '2.a Nutrition',
              ],
              Urgency: 'Does not need immediate assistance',
              'Author allowed for contact': 'false',
              'Tagged sensitive by 🔒': `Moderator: ${story.markedAsSensitiveBy?.email}`,
            },
          },
        ],
      });

      story.markedAsSensitiveByRole = MARKED_AS_SENSITIVE_BY.AUTHOR;

      jest.clearAllMocks();

      jest
        .spyOn(storyServiceMock, 'findById')
        .mockReturnValueOnce(new Promise((res) => res(story)));

      await service.exportStoryToAirTable(user.id, story.id, data);

      expect(create).toBeCalledWith({
        records: [
          {
            fields: {
              Location: story.place,
              'Author Age': '14-17',
              'Author Gender': 'Non binary',
              'Cell phone': story.recipient.phone,
              Country: country.name,
              Disability: ['Seeing', 'Hearing'],
              Email: story.recipient.email,
              'Loop ID': story.id,
              'Note from moderator 🔒': data.note,
              'Original language': 'French',
              'Story 🔒': originalTranslation.content,
              'Story ENG 🔒': englishTranslation.content,
              'Tagged organisation': organisation.name,
              'Tagged sensitive by 🔒': 'Author',
              'Thematic Area': ['1. Health', '2. Food security'],
              'Thematic Area - Subsection': [
                '1.a Medical Centres',
                '2.a Nutrition',
              ],
              Urgency: 'Does not need immediate assistance',
              'Author allowed for contact': 'false',
            },
          },
        ],
      });
    });
  });
});
