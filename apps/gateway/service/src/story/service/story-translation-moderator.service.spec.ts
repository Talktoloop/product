import { Test, TestingModule } from '@nestjs/testing';
import { StoryTranslationModeratorService } from './story-translation-moderator.service';
import { StoryService } from './story.service';
import { StoryTranslationRepository } from '../repository/story-translation.repository';
import { storyTranslationRepositoryMock } from '../../../test/mocks/story-translation.repository.mock';
import { storyServiceMock } from '../../../test/mocks/story.service.mock';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { getStoryStub } from '../../../test/entity/story.mock';
import { faker } from '@faker-js/faker';
import { StoryTranslationEntity } from '../../story/entity/story-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { PROVIDER_TYPE } from '../../language/interface/provider.enum';
import { configMock } from '../../../test/mocks/config.mock';
import { DI_CONSTANTS as COMMON_DI } from '../../common/constant/di.constant';
import { StoryHistoricalTranslationModeratorService } from './story-historical-translation-moderator.service';
import { storyHistoricalTranslationModeratorServiceMock } from '../../../test/mocks/story-historial-translation-moderator.service.mock';
import { getUserStub } from '../../../test/entity/user.mock';
import { StoryRepository } from '../repository/story.repository';
import { storyRepositoryMock } from '../../../test/mocks/story.repository.mock';
import { MessengerService } from '../../messenger/service/messenger.service';
import { messengerServiceMock } from '../../../test/mocks/messenger-service.mock';

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

describe('StoryTranslationModeratorService', () => {
  let service: StoryTranslationModeratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoryTranslationModeratorService,
        {
          provide: COMMON_DI.CONFIG,
          useValue: configMock,
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
          provide: StoryTranslationRepository,
          useValue: storyTranslationRepositoryMock,
        },
        {
          provide: StoryHistoricalTranslationModeratorService,
          useValue: storyHistoricalTranslationModeratorServiceMock,
        },
        {
          provide: StoryRepository,
          useValue: storyRepositoryMock,
        },
        {
          provide: MessengerService,
          useValue: messengerServiceMock,
        },
      ],
    }).compile();

    service = module.get<StoryTranslationModeratorService>(
      StoryTranslationModeratorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Is method defined', () => {
    it('retryTranslation is defined', () =>
      expect(service.retryTranslation).toBeDefined());
  });

  describe('Check if methods work properly', () => {
    const user = getUserStub();
    const story = getStoryStub();
    let index = 0;

    let language = new LanguageEntity();
    language.id = index ? faker.number.int(1000) : story.languageId;
    language.code = faker.string.alphanumeric(2);
    language.provider = PROVIDER_TYPE.AWS;

    story.translations = [];
    story.language = language;

    while (index < 2) {
      language = new LanguageEntity();
      language.id = index ? faker.number.int(1000) : story.languageId;
      language.code = faker.string.alphanumeric(2);
      language.provider = PROVIDER_TYPE.AWS;

      const translation = new StoryTranslationEntity();
      translation.language = language;
      translation.type =
        index === 1
          ? TRANSLATION_TYPE_CONSTANTS.MACHINE
          : TRANSLATION_TYPE_CONSTANTS.MANUAL;
      translation.storyId = story.id;
      translation.content = 'loren ipsum';
      translation.status =
        index === 1
          ? TRANSLATION_STATUS_CONSTANTS.ERROR
          : TRANSLATION_STATUS_CONSTANTS.TRANSLATED;

      story.translations.push(translation);

      index++;
    }

    it('saveTranslation() does call LanguageService.invokeTranslation() with the expected parameters', async () => {
      const language = new LanguageEntity();
      language.id = faker.number.int(1000);
      language.code = faker.string.alphanumeric(2);
      language.provider = PROVIDER_TYPE.AWS;

      const data = {
        language: language.code,
        content: faker.lorem.sentence(),
      };

      jest
        .spyOn(storyServiceMock, 'checkThatStoryExist')
        .mockReturnValue(new Promise((res) => res(story)));
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(new Promise((res) => res(language)));

      await service.saveTranslation(data, story, user.id);

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledTimes(0);

      story.translations[0].language.provider = undefined;
      story.translations[1].content = null;

      jest.clearAllMocks();
      jest
        .spyOn(storyServiceMock, 'checkThatStoryExist')
        .mockReturnValue(new Promise((res) => res(story)));

      await service.saveTranslation(data, story, user.id);

      expect(languageServiceMock.invokeTranslation).toBeCalledWith(
        story.id,
        data.content,
        language.id,
      );

      story.translations[0].language.provider = PROVIDER_TYPE.AWS;
      story.translations[1].content = faker.lorem.sentence();
    });

    it('retryTranslation() does call LanguageService.invokeTranslation() with the expected parameters', async () => {
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(
          new Promise((res) => res(story.translations[1].language)),
        );
      jest
        .spyOn(storyServiceMock, 'checkThatStoryExist')
        .mockReturnValue(new Promise((res) => res(story)));

      await service.retryTranslation(
        story.id,
        story.translations[1].language.code,
      );

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledWith(
        story.id,
        story.translations[0].content,
        story.translations[0].language.id,
        SOURCE_TYPE.STORY,
      );

      story.translations[1].status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
      story.translations[1].type = TRANSLATION_TYPE_CONSTANTS.MANUAL;
      story.translations[0].language.provider = PROVIDER_TYPE.AWS;
      story.translations[0].type = TRANSLATION_TYPE_CONSTANTS.MACHINE;

      const language = new LanguageEntity();
      language.id = faker.number.int(1000);
      language.code = faker.string.alphanumeric(2);

      const translation = new StoryTranslationEntity();
      translation.language = language;
      translation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
      translation.storyId = story.id;
      translation.content = faker.lorem.sentence();
      translation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;

      story.translations.push(translation);

      jest.clearAllMocks();
      jest
        .spyOn(storyServiceMock, 'checkThatStoryExist')
        .mockReturnValue(new Promise((res) => res(story)));
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(
          new Promise((res) => res(story.translations[2].language)),
        );

      story.translations[2].language.provider = PROVIDER_TYPE.AWS;
      await service.retryTranslation(
        story.id,
        story.translations[2].language.code,
      );

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledWith(
        story.id,
        story.translations[0].content,
        story.translations[0].language.id,
        SOURCE_TYPE.STORY,
      );
    });
  });
});
