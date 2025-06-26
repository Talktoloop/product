import { Inject, Injectable, forwardRef, Logger } from '@nestjs/common';
import { DI_CONSTANTS } from '../common/constant/di.constant';
import { CheckTranslationAWSResponse } from './interface/check-translation-aws-response.interface';
import {
  LambdaClient,
  InvokeCommand,
  InvokeAsyncCommandOutput,
  InvocationResponse,
} from '@aws-sdk/client-lambda';
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
  calculateNumberOfSubstringsByDivider,
} from '@ourloop/shared';
import { SOURCE_TYPE } from '../common/constant/source-type.constants';
import { PROVIDER_TYPE } from './interface/provider.enum';
import { TranslationServiceClient } from '@google-cloud/translate';
import { google } from '@google-cloud/translate/build/protos/protos';
import { LANGUAGES_CONSTANTS } from '../common/constant/languages.constants';
import { getPayloadFromTranslation } from './utils/aws';
import { StoryTranslationModeratorService } from '../story/service/story-translation-moderator.service';
import { StoryTranslationEntity } from '../story/entity/story-translation.entity';
import { TRANSLATION_STATUS_CONSTANTS } from '../common/constant/translation-status.constants';
import { CommentTranslationEntity } from '../comment/entity/comment-translation.entity';
import { CommentTranslationModeratorService } from '../comment/service/comment-translation-moderator.service';
import { TRANSLATION_TYPE_CONSTANTS } from '../common/constant/translation-type.constant';
import { ConfigService } from '@nestjs/config';

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
    @Inject(DI_CONSTANTS.LAMBDA)
    private readonly lambdaProvider: LambdaClient,
    private readonly languageRepository: LanguageRepository,
    @Inject(forwardRef(() => StoryTranslationModeratorService))
    private readonly storyTranslationModeratorService: StoryTranslationModeratorService,
    @Inject(forwardRef(() => CommentTranslationModeratorService))
    private readonly commentTranslationModeratorService: CommentTranslationModeratorService,
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

  async getListOfProviders(first: string): Promise<string[]> {
    const providers = await this.languageRepository.findAllLanguageProviders();
    const providersWithCorrectOrdering = [first];
    providers.forEach(({ provider }) => {
      if (!providersWithCorrectOrdering.includes(provider)) {
        providersWithCorrectOrdering.push(provider);
      }
    });

    return providersWithCorrectOrdering;
  }

  async invokeTranslationModerator(
    sourceId: string,
    content: string,
    originalTextLangId: number,
    sourceType = SOURCE_TYPE.STORY,
    translations: StoryTranslationEntity[],
  ) {
    if (!originalTextLangId) {
      return;
    }

    let translateFrom = await this.languageRepository.findOne({
      where: { id: originalTextLangId },
    });
    const orderList = await this.getListOfProviders(translateFrom.provider);
    const languages =
      await this.languageRepository.findMachineTranslatedLanguages(orderList);

    const languagesToTranslation = languages.filter(
      ({ id }) => id !== originalTextLangId,
    );
    if (!translateFrom) {
      return;
    }

    if (!translateFrom.provider && translateFrom.dialect) {
      translateFrom = await this.languageRepository.findOne({
        where: { code: translateFrom.dialect },
      });
    }

    let enHasBeenSwitched = false;
    const englishEntity = languages.find(
      (lang) => lang.code === LANGUAGES_CONSTANTS.ENGLISH,
    );



    for (const lang of languagesToTranslation) {
      const translation = translations?.find(
        (translation) => translation.languageId === lang.id && translation.content && translation.type === TRANSLATION_TYPE_CONSTANTS.MACHINE,
      );
      if (translation && translateFrom.provider !== lang.provider && !enHasBeenSwitched) {
        //translate to eng
        if (originalTextLangId !== englishEntity.id) {
          try {
            const translation = await this.runTranslationLambdaSync(
              sourceId,
              englishEntity,
              content,
              translateFrom.code,
              sourceType,
              translateFrom.provider,
              translateFrom.alternativeProvider ?? englishEntity.provider,
            );
            enHasBeenSwitched = true;

            content = getPayloadFromTranslation(translation);
          } catch (error) {
            this.logger.error(
              `runTranslationLambdaSync CATCH ${JSON.stringify(error)}`,
            );
          }
        }
        translateFrom.code = LANGUAGES_CONSTANTS.ENGLISH;
      }
      if (translation && translateFrom.code !== lang.code) {
        this.runTranslationLambda(
          sourceId,
          lang,
          content,
          translateFrom.code,
          sourceType,
          translateFrom.provider,
          translateFrom.alternativeProvider ?? lang.provider,
        ).catch((error) => {
          this.logger.error(
            `runTranslationLambda invokeAsync CATCH ${JSON.stringify(error)}`,
          );
        });
      }
    }
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

    const translateFrom = await this.languageRepository.findOne({
      where: { id: originalTextLangId },
    });
    const orderList = await this.getListOfProviders(translateFrom.provider);
    const languages =
      await this.languageRepository.findMachineTranslatedLanguages(orderList);

    const languagesToTranslation = languages.filter(
      ({ id }) => id !== originalTextLangId,
    );
    if (!translateFrom) {
      return;
    }

    let enHasBeenSwitched = false;
    const englishEntity = languages.find(
      (lang) => lang.code === LANGUAGES_CONSTANTS.ENGLISH,
    );

    for (const lang of languagesToTranslation) {
      if (translateFrom.provider !== lang.provider && !enHasBeenSwitched) {
        //translate to eng
        if (originalTextLangId !== englishEntity.id) {
          try {
            const translation = await this.runTranslationLambdaSync(
              sourceId,
              englishEntity,
              content,
              translateFrom.code,
              sourceType,
              translateFrom.provider,
              translateFrom.alternativeProvider ?? englishEntity.provider,
            );
            enHasBeenSwitched = true;

            content = getPayloadFromTranslation(translation);
          } catch (error) {
            this.logger.error(
              `runTranslationLambdaSync CATCH ${JSON.stringify(error)}`,
            );
          }
        }
        translateFrom.code = LANGUAGES_CONSTANTS.ENGLISH;
      }
      if (translateFrom.code !== lang.code) {
        this.runTranslationLambda(
          sourceId,
          lang,
          content,
          translateFrom.code,
          sourceType,
          translateFrom.provider,
          translateFrom.alternativeProvider ?? lang.provider,
        ).catch((error) => {
          this.logger.error(
            `runTranslationLambda invokeAsync CATCH ${JSON.stringify(error)}`,
          );
        });
      }
    }
  }

  async addTranslationError(
    sourceType: SOURCE_TYPE,
    sourceId: string,
    targetLang: LanguageEntity,
    content: string,
  ): Promise<void> {
    if (sourceType === SOURCE_TYPE.STORY) {
      const storyTranslation = new StoryTranslationEntity({
        storyId: sourceId,
        languageId: targetLang.id,
        content,
        numberOfWords: calculateNumberOfSubstringsByDivider(content, ' '),
      });

      storyTranslation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
      storyTranslation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;

      await this.storyTranslationModeratorService.saveTranslationToRepository(
        storyTranslation,
      );
    } else if (sourceType === SOURCE_TYPE.COMMENT) {
      const commentTranslation = new CommentTranslationEntity({
        commentId: sourceId,
        languageId: targetLang.id,
        content,
      });

      commentTranslation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
      commentTranslation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;

      await this.commentTranslationModeratorService.saveTranslationToRepository(
        commentTranslation,
      );
    }
  }

  async runTranslationLambda(
    sourceId: string,
    targetLang: LanguageEntity,
    content: string,
    originalTextLang: string,
    sourceType: SOURCE_TYPE,
    provider: PROVIDER_TYPE,
    alternativeProvider?: PROVIDER_TYPE,
  ): Promise<InvokeAsyncCommandOutput | void> {
    const payload = {
      sourceId,
      sourceType,
      originalText: content,
      originalTextLang,
      target: targetLang.code,
      languageId: targetLang.id,
      hopsConfig: [],
      provider,
      alternativeProvider,
    };
    const params = {
      FunctionName: this.config.get('translation.aws.lambdaARN'),
      Payload: JSON.stringify(payload),
    };

    this.logger.log(
      `async Translation from ${originalTextLang} to ${targetLang.code} using ${provider}`,
    );

    if (content === '') {
      return this.addTranslationError(
        sourceType,
        sourceId,
        targetLang,
        content,
      );
    }

    const command = new InvokeCommand(params);

    return new Promise((resolve, reject) => {
      this.lambdaProvider.send(command, (error, data) => {
        if (error) {
          this.logger.error(
            `runTranslationLambda invokeAsync error ${JSON.stringify(error)}`,
          );
          reject(error);
        }
        this.logger.log(
          `runTranslationLambda invokeAsync resolve ${JSON.stringify(data)}`,
        );
        resolve(data);
      });
    });
  }

  async runTranslationLambdaSync(
    sourceId: string,
    targetLang: LanguageEntity,
    content: string,
    originalTextLang: string,
    sourceType: SOURCE_TYPE,
    provider: PROVIDER_TYPE,
    alternativeProvider: PROVIDER_TYPE,
  ): Promise<InvocationResponse> {
    const payload = {
      sourceId,
      sourceType,
      originalText: content,
      originalTextLang,
      target: targetLang.code,
      languageId: targetLang.id,
      hopsConfig: [],
      provider,
      alternativeProvider,
    };
    const params = {
      FunctionName: this.config.get('translation.aws.lambdaARN'),
      Payload: JSON.stringify(payload),
    };
    this.logger.log(
      `sync translation from ${originalTextLang} to ${targetLang.code} using ${provider}`,
    );

    return new Promise((resolve, reject) => {
      const command = new InvokeCommand(params);

      this.lambdaProvider.send(command, (error, data) => {
        if (error) {
          this.logger.error(
            `runTranslationLambdaSync invoke error ${JSON.stringify(error)}`,
          );
          reject(error);
        }
        this.logger.log(
          `runTranslationLambdaSync invoke resolve ${JSON.stringify(data)}`,
        );
        resolve(data);
      });
    });
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
        translation.content = '';
        translation.status = TRANSLATION_STATUS_CONSTANTS.ERROR;
        translation.type = TRANSLATION_TYPE_CONSTANTS.MACHINE;
      }

      return translation;
    });

    return { translations, contentUpdated, oldOriginalContent };
  }
}
