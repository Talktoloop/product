import { Test, TestingModule } from '@nestjs/testing';
import { CommentTranslationModeratorService } from './comment-translation-moderator.service';
import { CommentRepository } from '../repository/comment.repository';
import { CommentTranslationRepository } from '../repository/comment-translation.repository';
import { commentTranslationRepositoryMock } from '../../../test/mocks/comment-translation.repository.mock';
import { commentRepositoryMock } from '../../../test/mocks/comment.repository.mock';
import { LanguageService } from '../../language/language.service';
import { languageServiceMock } from '../../../test/mocks/language.service.mock';
import { CommentService } from './comment.service';
import { commentServiceMock } from '../../../test/mocks/comment.service.mock';
import { getStoryStub } from '../../../test/entity/story.mock';
import { getCommentStub } from '../../../test/entity/comment.mock';
import { getUserStub } from '../../../test/entity/user.mock';
import { faker } from '@faker-js/faker';
import { CommentTranslationEntity } from '../../comment/entity/comment-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../../common/constant/translation-status.constants';
import { LanguageEntity } from '../../language/entity/language.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../../common/constant/translation-type.constant';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { PROVIDER_TYPE } from '../../language/interface/provider.enum';

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
  },
}));

describe('CommentTranslationModeratorService', () => {
  let service: CommentTranslationModeratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentTranslationModeratorService,
        {
          provide: CommentRepository,
          useValue: commentRepositoryMock,
        },
        {
          provide: CommentTranslationRepository,
          useValue: commentTranslationRepositoryMock,
        },
        {
          provide: LanguageService,
          useValue: languageServiceMock,
        },
        {
          provide: CommentService,
          useValue: commentServiceMock,
        },
      ],
    }).compile();

    service = module.get<CommentTranslationModeratorService>(
      CommentTranslationModeratorService,
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
    const story = getStoryStub();
    const user = getUserStub();
    const comment = getCommentStub({
      storyId: story.id,
      userId: user.id,
    });
    let index = 0;
    let language = new LanguageEntity();
    language.id = index ? faker.number.int(1000) : story.languageId;
    language.code = faker.string.alphanumeric(2);
    language.provider = PROVIDER_TYPE.AWS;

    comment.translations = [];
    comment.language = language;

    while (index < 2) {
      language = new LanguageEntity();
      language.id = index ? faker.number.int(1000) : comment.languageId;
      language.code = faker.string.alphanumeric(2);
      language.provider = PROVIDER_TYPE.AWS;

      const translation = new CommentTranslationEntity();
      translation.languageId = language.id;
      translation.language = language;
      translation.type =
        index === 1
          ? TRANSLATION_TYPE_CONSTANTS.MACHINE
          : TRANSLATION_TYPE_CONSTANTS.MANUAL;
      translation.commentId = comment.id;
      translation.content = faker.lorem.sentence();
      translation.status =
        index === 1
          ? TRANSLATION_STATUS_CONSTANTS.ERROR
          : TRANSLATION_STATUS_CONSTANTS.TRANSLATED;

      comment.translations.push(translation);

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
        .spyOn(commentServiceMock, 'findComment')
        .mockReturnValue(new Promise((res) => res(comment)));
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(new Promise((res) => res(language)));

      await service.saveTranslation(data, comment.id);

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledTimes(0);

      comment.translations[0].language.provider = undefined;
      comment.translations[1].content = null;

      jest.clearAllMocks();
      jest
        .spyOn(commentServiceMock, 'findComment')
        .mockReturnValue(new Promise((res) => res(comment)));

      await service.saveTranslation(data, comment.id);

      expect(languageServiceMock.invokeTranslation).toBeCalledWith(
        comment.id,
        data.content,
        language.id,
        SOURCE_TYPE.COMMENT,
      );

      comment.translations[0].language.provider = PROVIDER_TYPE.AWS;
      comment.translations[1].content = faker.lorem.sentence();
    });

    it('retryTranslation() does call LanguageService.invokeTranslation() with the expected parameters', async () => {
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(
          new Promise((res) => res(comment.translations[1].language)),
        );
      jest
        .spyOn(commentServiceMock, 'findComment')
        .mockReturnValue(new Promise((res) => res(comment)));

      await service.retryTranslation(
        comment.id,
        comment.translations[1].language.code,
      );

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledWith(
        comment.id,
        comment.translations[0].content,
        comment.translations[0].language.id,
        SOURCE_TYPE.COMMENT,
      );

      comment.translations[1].status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
      comment.translations[1].type = TRANSLATION_TYPE_CONSTANTS.MANUAL;
      comment.translations[0].language.provider = PROVIDER_TYPE.AWS;
      comment.translations[0].type = TRANSLATION_TYPE_CONSTANTS.MACHINE;

      const language = new LanguageEntity();
      language.id = faker.number.int(1000);
      language.code = faker.string.alphanumeric(2);

      const translation = new CommentTranslationEntity();
      translation.language = language;
      translation.languageId = language.id;
      translation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
      translation.commentId = comment.id;
      translation.content = faker.lorem.sentence();
      translation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
      translation.language.provider = PROVIDER_TYPE.AWS;

      comment.translations.push(translation);

      jest.clearAllMocks();
      jest
        .spyOn(commentServiceMock, 'findComment')
        .mockReturnValue(new Promise((res) => res(comment)));
      jest
        .spyOn(languageServiceMock, 'getLanguageByCode')
        .mockReturnValue(
          new Promise((res) => res(comment.translations[2].language)),
        );

      await service.retryTranslation(
        comment.id,
        comment.translations[2].language.code,
      );

      expect(languageServiceMock.invokeTranslation).toHaveBeenCalledWith(
        comment.id,
        comment.translations[0].content,
        comment.translations[0].language.id,
        SOURCE_TYPE.COMMENT,
      );
    });
  });
});
