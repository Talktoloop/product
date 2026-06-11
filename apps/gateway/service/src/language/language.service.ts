import { Inject, Injectable, Logger } from '@nestjs/common';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { CheckTranslationAWSResponse } from './interface/check-translation-aws-response.interface';
import {
  ComprehendClient,
  BatchDetectDominantLanguageCommand,
} from '@aws-sdk/client-comprehend';
import { LanguageRepository } from './language.repository';
import { LanguageEntity } from './entity/language.entity';
import {
  ADD_TRANSLATION_ERROR,
  CustomError,
  LANGUAGE_NOT_FOUND,
} from '@ourloop/shared';
import { SOURCE_TYPE } from '../common/constant/source-type.constants';
import { PROVIDER_TYPE } from './interface/provider.enum';
import { TranslationServiceClient } from '@google-cloud/translate';
import { google } from '@google-cloud/translate/build/protos/protos';
import { LANGUAGES_CONSTANTS } from '../common/constant/languages.constants';
import { StoryTranslationEntity } from '../story/entity/story-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../common/constant/translation-status.constants';
import { CommentTranslationEntity } from '../comment/entity/comment-translation.entity';
import { TRANSLATION_TYPE_CONSTANTS } from '../common/constant/translation-type.constant';
import { ConfigService } from '@nestjs/config';
import { inngest } from '../inngest/client';
@Injectable()
export class LanguageService {
  private readonly logger = new Logger(LanguageService.name);
  constructor(
    @Inject(DI_CONSTANTS.CONFIG)
    private readonly config: ConfigService,
    @Inject(DI_CONSTANTS.AWS_TRANSLATION)
    private readonly awsTranslationProvider: ComprehendClient,
    @Inject(DI_CONSTANTS.GOOGLE_TRANSLATION)
    private readonly googleTranslationProvider: TranslationServiceClient,
    private readonly languageRepository: LanguageRepository,
  ) { }

  async checkTranslationByAWS(
    content: string,
  ): Promise<CheckTranslationAWSResponse> {
    return new Promise((resolve, reject) => {
      const params = { TextList: [content] };
      const command = new BatchDetectDominantLanguageCommand(params);

      this.awsTranslationProvider.send(command, (err, data) => {
        if (err) return reject(err);
        const {
          ResultList: [{ Languages }],
        } = data;
        const [lang] = Languages;
        resolve(lang);
      });
    });
  }

  async invokeTranslationModerator(
    sourceId: string,
    content: string,
    originalTextLangId: number,
    sourceType = SOURCE_TYPE.STORY,
    _translations?: StoryTranslationEntity[],
  ): Promise<void> {
    return this.invokeTranslation(sourceId, content, originalTextLangId, sourceType);
  }

  async invokeTranslation(
    sourceId: string,
    content: string,
    originalTextLangId: number,
    sourceType = SOURCE_TYPE.STORY,
  ): Promise<void> {
    if (!originalTextLangId) {
      return;
    }

    let origin = await this.languageRepository.findOne({
      where: { id: originalTextLangId },
    });
    if (!origin) return;

    if (!origin.provider && origin.dialect) {
      const dialectOrigin = await this.languageRepository.findOne({
        where: { code: origin.dialect },
      });
      if (dialectOrigin) origin = dialectOrigin;
    }

    await inngest.send({
      name: 'translation/requested.v1',
      data: {
        sourceId,
        sourceType,
        content,
        originalTextLangCode: origin.code,
      },
    });

    this.logger.log(
      `[Inngest] Emitted translation/requested.v1 for ${sourceType} ${sourceId} from=${origin.code}`,
    );
  }

  async getDefaultLanguage(): Promise<LanguageEntity> {
    return this.languageRepository.findOne({ where: { isDefault: true } });
  }

  async getLanguageById(id: number): Promise<LanguageEntity> {
    if (!id) {
      throw new CustomError(LANGUAGE_NOT_FOUND, {
        error: `This language is not supported`,
      });
    }

    const language = await this.languageRepository.findOne({ where: { id } });
    if (!language) {
      throw new CustomError(LANGUAGE_NOT_FOUND, {
        error: `This language is not supported`,
      });
    }
    return language;
  }

  async getLanguageByCode(code: string): Promise<LanguageEntity> {
    if (!code) {
      throw new CustomError(LANGUAGE_NOT_FOUND, {
        error: `This language is not supported`,
      });
    }

    const language = await this.languageRepository.findOne({ where: { code } });

    if (!language) {
      throw new CustomError(LANGUAGE_NOT_FOUND, {
        error: `This language is not supported`,
      });
    }
    return language;
  }

  async getVisibleLanguages(): Promise<LanguageEntity[]> {
    return this.languageRepository.find({
      where: {
        visible: true,
      },
    });
  }

  async getLanguages(): Promise<LanguageEntity[]> {
    return this.languageRepository.find();
  }

  async checkProbabilityCriteria(
    language: string,
    content: string,
    provider: PROVIDER_TYPE,
  ): Promise<void> {
    let languageCode: string, confidence: number;
    const minOfProbability = +this.config.get('translation.minimumProbability');

    if (provider === PROVIDER_TYPE.AWS) {
      ({ LanguageCode: languageCode, Score: confidence } =
        await this.checkTranslationByAWS(content));
    }

    if (provider === PROVIDER_TYPE.GOOGLE) {
      ({ languageCode, confidence } =
        await this.checkTranslationByGoogle(content));
    }

    if (languageCode !== language || confidence * 100 < minOfProbability) {
      throw new CustomError(ADD_TRANSLATION_ERROR, {
        error: `Probability of content is less than ${minOfProbability}`,
      });
    }
  }
  async checkTranslationByGoogle(
    content: string,
  ): Promise<google.cloud.translation.v3.IDetectedLanguage> {
    const location = this.config.get('translation.google.location');
    const projectId = this.config.get('translation.google.projectId');
    const detectRequest = {
      parent: `projects/${projectId}/locations/${location}`,
      content,
    };
    const [detections] =
      await this.googleTranslationProvider.detectLanguage(detectRequest);
    const { languages } = detections;
    return languages.pop();
  }

  async checkOriginLanguage(languageCode: string): Promise<LanguageEntity> {
    const languages = await this.languageRepository.find();
    const language =
      languageCode &&
      languages.filter((language) => language.code === languageCode)[0];

    if (languageCode && !language) {
      throw new CustomError(LANGUAGE_NOT_FOUND, {
        error: 'language is not supported - function checkOriginLanguage',
      });
    }

    return language;
  }

  async changeOriginLanguage(
    translations: (CommentTranslationEntity | StoryTranslationEntity)[],
    language: LanguageEntity,
    originalLanguageId: number,
    manualTranslationLanguages: string[] = [],
  ): Promise<{
    translations: (CommentTranslationEntity | StoryTranslationEntity)[];
    contentUpdated: boolean;
    oldOriginalContent: string;
  }> {
    const oldOriginalContent = translations.find(
      ({ languageId }) => languageId === originalLanguageId,
    )?.content;
    let contentUpdated = false;

    translations = translations.map((translation) => {
      if (translation.languageId === language.id) {
        translation.content = oldOriginalContent;
        translation.status = TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
        contentUpdated = true;
      } else if (
        !manualTranslationLanguages.includes(translation.language.code)
      ) {
        const isEnglish = translation.language?.code === LANGUAGES_CONSTANTS.ENGLISH;
        if (!isEnglish) {
          translation.content = '';
          translation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
          translation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
        }
      }

      return translation;
    });

    return { translations, contentUpdated, oldOriginalContent };
  }
}
