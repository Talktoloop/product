"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LanguageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const di_constant_1 = require("../common/constant/di.constant");
const client_lambda_1 = require("@aws-sdk/client-lambda");
const client_comprehend_1 = require("@aws-sdk/client-comprehend");
const language_repository_1 = require("./language.repository");
const shared_1 = require("@ourloop/shared");
const source_type_constants_1 = require("../common/constant/source-type.constants");
const provider_enum_1 = require("./interface/provider.enum");
const translate_1 = require("@google-cloud/translate");
const languages_constants_1 = require("../common/constant/languages.constants");
const aws_1 = require("./utils/aws");
const story_translation_moderator_service_1 = require("../story/service/story-translation-moderator.service");
const story_translation_entity_1 = require("../story/entity/story-translation.entity");
const translation_status_constants_1 = require("../common/constant/translation-status.constants");
const comment_translation_entity_1 = require("../comment/entity/comment-translation.entity");
const comment_translation_moderator_service_1 = require("../comment/service/comment-translation-moderator.service");
const translation_type_constant_1 = require("../common/constant/translation-type.constant");
const config_1 = require("@nestjs/config");
let LanguageService = LanguageService_1 = class LanguageService {
    constructor(config, awsTranslationProvider, googleTranslationProvider, lambdaProvider, languageRepository, storyTranslationModeratorService, commentTranslationModeratorService) {
        this.config = config;
        this.awsTranslationProvider = awsTranslationProvider;
        this.googleTranslationProvider = googleTranslationProvider;
        this.lambdaProvider = lambdaProvider;
        this.languageRepository = languageRepository;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
        this.commentTranslationModeratorService = commentTranslationModeratorService;
        this.logger = new common_1.Logger(LanguageService_1.name);
    }
    async checkTranslationByAWS(content) {
        return new Promise((resolve, reject) => {
            const params = { TextList: [content] };
            const command = new client_comprehend_1.BatchDetectDominantLanguageCommand(params);
            this.awsTranslationProvider.send(command, (err, data) => {
                if (err)
                    return reject(err);
                const { ResultList: [{ Languages }], } = data;
                const [lang] = Languages;
                resolve(lang);
            });
        });
    }
    async getListOfProviders(first) {
        const providers = await this.languageRepository.findAllLanguageProviders();
        const providersWithCorrectOrdering = [first];
        providers.forEach(({ provider }) => {
            if (!providersWithCorrectOrdering.includes(provider)) {
                providersWithCorrectOrdering.push(provider);
            }
        });
        return providersWithCorrectOrdering;
    }
    async invokeTranslationModerator(sourceId, content, originalTextLangId, sourceType = source_type_constants_1.SOURCE_TYPE.STORY, translations) {
        var _a, _b;
        if (!originalTextLangId) {
            return;
        }
        let translateFrom = await this.languageRepository.findOne({
            where: { id: originalTextLangId },
        });
        const orderList = await this.getListOfProviders(translateFrom.provider);
        const languages = await this.languageRepository.findMachineTranslatedLanguages(orderList);
        const languagesToTranslation = languages.filter(({ id }) => id !== originalTextLangId);
        if (!translateFrom) {
            return;
        }
        if (!translateFrom.provider && translateFrom.dialect) {
            translateFrom = await this.languageRepository.findOne({
                where: { code: translateFrom.dialect },
            });
        }
        let enHasBeenSwitched = false;
        const englishEntity = languages.find((lang) => lang.code === languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH);
        for (const lang of languagesToTranslation) {
            const translation = translations === null || translations === void 0 ? void 0 : translations.find((translation) => translation.languageId === lang.id && translation.content && translation.type === translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE);
            if (translation && translateFrom.provider !== lang.provider && !enHasBeenSwitched) {
                if (originalTextLangId !== englishEntity.id) {
                    try {
                        const translation = await this.runTranslationLambdaSync(sourceId, englishEntity, content, translateFrom.code, sourceType, translateFrom.provider, (_a = translateFrom.alternativeProvider) !== null && _a !== void 0 ? _a : englishEntity.provider);
                        enHasBeenSwitched = true;
                        content = (0, aws_1.getPayloadFromTranslation)(translation);
                    }
                    catch (error) {
                        this.logger.error(`runTranslationLambdaSync CATCH ${JSON.stringify(error)}`);
                    }
                }
                translateFrom.code = languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH;
            }
            if (translation && translateFrom.code !== lang.code) {
                this.runTranslationLambda(sourceId, lang, content, translateFrom.code, sourceType, translateFrom.provider, (_b = translateFrom.alternativeProvider) !== null && _b !== void 0 ? _b : lang.provider).catch((error) => {
                    this.logger.error(`runTranslationLambda invokeAsync CATCH ${JSON.stringify(error)}`);
                });
            }
        }
    }
    async invokeTranslation(sourceId, content, originalTextLangId, sourceType = source_type_constants_1.SOURCE_TYPE.STORY) {
        var _a, _b;
        if (!originalTextLangId) {
            return;
        }
        const translateFrom = await this.languageRepository.findOne({
            where: { id: originalTextLangId },
        });
        const orderList = await this.getListOfProviders(translateFrom.provider);
        const languages = await this.languageRepository.findMachineTranslatedLanguages(orderList);
        const languagesToTranslation = languages.filter(({ id }) => id !== originalTextLangId);
        if (!translateFrom) {
            return;
        }
        let enHasBeenSwitched = false;
        const englishEntity = languages.find((lang) => lang.code === languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH);
        for (const lang of languagesToTranslation) {
            if (translateFrom.provider !== lang.provider && !enHasBeenSwitched) {
                if (originalTextLangId !== englishEntity.id) {
                    try {
                        const translation = await this.runTranslationLambdaSync(sourceId, englishEntity, content, translateFrom.code, sourceType, translateFrom.provider, (_a = translateFrom.alternativeProvider) !== null && _a !== void 0 ? _a : englishEntity.provider);
                        enHasBeenSwitched = true;
                        content = (0, aws_1.getPayloadFromTranslation)(translation);
                    }
                    catch (error) {
                        this.logger.error(`runTranslationLambdaSync CATCH ${JSON.stringify(error)}`);
                    }
                }
                translateFrom.code = languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH;
            }
            if (translateFrom.code !== lang.code) {
                this.runTranslationLambda(sourceId, lang, content, translateFrom.code, sourceType, translateFrom.provider, (_b = translateFrom.alternativeProvider) !== null && _b !== void 0 ? _b : lang.provider).catch((error) => {
                    this.logger.error(`runTranslationLambda invokeAsync CATCH ${JSON.stringify(error)}`);
                });
            }
        }
    }
    async addTranslationError(sourceType, sourceId, targetLang, content) {
        if (sourceType === source_type_constants_1.SOURCE_TYPE.STORY) {
            const storyTranslation = new story_translation_entity_1.StoryTranslationEntity({
                storyId: sourceId,
                languageId: targetLang.id,
                content,
                numberOfWords: (0, shared_1.calculateNumberOfSubstringsByDivider)(content, ' '),
            });
            storyTranslation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR;
            storyTranslation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE;
            await this.storyTranslationModeratorService.saveTranslationToRepository(storyTranslation);
        }
        else if (sourceType === source_type_constants_1.SOURCE_TYPE.COMMENT) {
            const commentTranslation = new comment_translation_entity_1.CommentTranslationEntity({
                commentId: sourceId,
                languageId: targetLang.id,
                content,
            });
            commentTranslation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR;
            commentTranslation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE;
            await this.commentTranslationModeratorService.saveTranslationToRepository(commentTranslation);
        }
    }
    async runTranslationLambda(sourceId, targetLang, content, originalTextLang, sourceType, provider, alternativeProvider) {
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
        this.logger.log(`async Translation from ${originalTextLang} to ${targetLang.code} using ${provider}`);
        if (content === '') {
            return this.addTranslationError(sourceType, sourceId, targetLang, content);
        }
        const command = new client_lambda_1.InvokeCommand(params);
        return new Promise((resolve, reject) => {
            this.lambdaProvider.send(command, (error, data) => {
                if (error) {
                    this.logger.error(`runTranslationLambda invokeAsync error ${JSON.stringify(error)}`);
                    reject(error);
                }
                this.logger.log(`runTranslationLambda invokeAsync resolve ${JSON.stringify(data)}`);
                resolve(data);
            });
        });
    }
    async runTranslationLambdaSync(sourceId, targetLang, content, originalTextLang, sourceType, provider, alternativeProvider) {
        console.log('💀 \n'.repeat(10));
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
        this.logger.log(`sync translation from ${originalTextLang} to ${targetLang.code} using ${provider}`);
        return new Promise((resolve, reject) => {
            const command = new client_lambda_1.InvokeCommand(params);
            this.lambdaProvider.send(command, (error, data) => {
                if (error) {
                    this.logger.error(`runTranslationLambdaSync invoke error ${JSON.stringify(error)}`);
                    reject(error);
                }
                this.logger.log(`runTranslationLambdaSync invoke resolve ${JSON.stringify(data)}`);
                resolve(data);
            });
        });
    }
    async getDefaultLanguage() {
        return this.languageRepository.findOne({ where: { isDefault: true } });
    }
    async getLanguageById(id) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                error: `This language is not supported`,
            });
        }
        const language = await this.languageRepository.findOne({ where: { id } });
        if (!language) {
            throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                error: `This language is not supported`,
            });
        }
        return language;
    }
    async getLanguageByCode(code) {
        if (!code) {
            throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                error: `This language is not supported`,
            });
        }
        const language = await this.languageRepository.findOne({ where: { code } });
        if (!language) {
            throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                error: `This language is not supported`,
            });
        }
        return language;
    }
    async getVisibleLanguages() {
        return this.languageRepository.find({
            where: {
                visible: true,
            },
        });
    }
    async getLanguages() {
        return this.languageRepository.find();
    }
    async checkProbabilityCriteria(language, content, provider) {
        let languageCode, confidence;
        const minOfProbability = +this.config.get('translation.minimumProbability');
        if (provider === provider_enum_1.PROVIDER_TYPE.AWS) {
            ({ LanguageCode: languageCode, Score: confidence } =
                await this.checkTranslationByAWS(content));
        }
        if (provider === provider_enum_1.PROVIDER_TYPE.GOOGLE) {
            ({ languageCode, confidence } =
                await this.checkTranslationByGoogle(content));
        }
        if (languageCode !== language || confidence * 100 < minOfProbability) {
            throw new shared_1.CustomError(shared_1.ADD_TRANSLATION_ERROR, {
                error: `Probability of content is less than ${minOfProbability}`,
            });
        }
    }
    async checkTranslationByGoogle(content) {
        const location = this.config.get('translation.google.location');
        const projectId = this.config.get('translation.google.projectId');
        const detectRequest = {
            parent: `projects/${projectId}/locations/${location}`,
            content,
        };
        const [detections] = await this.googleTranslationProvider.detectLanguage(detectRequest);
        const { languages } = detections;
        return languages.pop();
    }
    async checkOriginLanguage(languageCode) {
        const languages = await this.languageRepository.find();
        const language = languageCode &&
            languages.filter((language) => language.code === languageCode)[0];
        if (languageCode && !language) {
            throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                error: 'language is not supported - function checkOriginLanguage',
            });
        }
        return language;
    }
    async changeOriginLanguage(translations, language, originalLanguageId, manualTranslationLanguages = []) {
        var _a;
        const oldOriginalContent = (_a = translations.find(({ languageId }) => languageId === originalLanguageId)) === null || _a === void 0 ? void 0 : _a.content;
        let contentUpdated = false;
        translations = translations.map((translation) => {
            if (translation.languageId === language.id) {
                translation.content = oldOriginalContent;
                translation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
                contentUpdated = true;
            }
            else if (!manualTranslationLanguages.includes(translation.language.code)) {
                translation.content = '';
                translation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR;
                translation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MACHINE;
            }
            return translation;
        });
        return { translations, contentUpdated, oldOriginalContent };
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = LanguageService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.AWS_TRANSLATION)),
    __param(2, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.GOOGLE_TRANSLATION)),
    __param(3, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.LAMBDA)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_translation_moderator_service_1.StoryTranslationModeratorService))),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => comment_translation_moderator_service_1.CommentTranslationModeratorService))),
    __metadata("design:paramtypes", [config_1.ConfigService,
        client_comprehend_1.ComprehendClient,
        translate_1.TranslationServiceClient,
        client_lambda_1.LambdaClient,
        language_repository_1.LanguageRepository,
        story_translation_moderator_service_1.StoryTranslationModeratorService,
        comment_translation_moderator_service_1.CommentTranslationModeratorService])
], LanguageService);
//# sourceMappingURL=language.service.js.map