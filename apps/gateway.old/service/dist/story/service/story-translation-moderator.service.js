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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryTranslationModeratorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const story_translation_repository_1 = require("../repository/story-translation.repository");
const shared_1 = require("@ourloop/shared");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const story_service_1 = require("./story.service");
const story_historical_translation_moderator_service_1 = require("./story-historical-translation-moderator.service");
const helpers_1 = require("../../common/helpers");
const language_service_1 = require("../../language/language.service");
const story_translation_entity_1 = require("../entity/story-translation.entity");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
const source_type_constants_1 = require("../../common/constant/source-type.constants");
const languages_constants_1 = require("../../common/constant/languages.constants");
const aws_1 = require("../../language/utils/aws");
const channel_constant_1 = require("../../common/constant/channel.constant");
const story_repository_1 = require("../repository/story.repository");
const messenger_service_1 = require("../../messenger/service/messenger.service");
let StoryTranslationModeratorService = class StoryTranslationModeratorService {
    constructor(storyRepository, storyService, storyTranslationRepository, storyHistoricalTranslationService, languageService, messengerService) {
        this.storyRepository = storyRepository;
        this.storyService = storyService;
        this.storyTranslationRepository = storyTranslationRepository;
        this.storyHistoricalTranslationService = storyHistoricalTranslationService;
        this.languageService = languageService;
        this.messengerService = messengerService;
    }
    async checkOriginalContent(userId, story, data, language, isRepinned) {
        var _a;
        const basicNewTranslation = (_a = data.translations) === null || _a === void 0 ? void 0 : _a.find((item) => item.code === (language === null || language === void 0 ? void 0 : language.code));
        let actualOriginalTranslation = story.translations.find((translation) => { var _a; return ((_a = translation.language) === null || _a === void 0 ? void 0 : _a.code) === (language === null || language === void 0 ? void 0 : language.code); });
        let newOriginalContent;
        let historicalContent = null;
        if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR && data.content) {
            historicalContent = await this.storyHistoricalTranslationService.save({
                userId,
                translationId: actualOriginalTranslation === null || actualOriginalTranslation === void 0 ? void 0 : actualOriginalTranslation.id,
                content: data.content,
            });
        }
        if (isRepinned && !basicNewTranslation) {
            newOriginalContent = await this.concatenatePinnedMessages(story.id, story.channel);
        }
        else if (basicNewTranslation) {
            newOriginalContent = basicNewTranslation === null || basicNewTranslation === void 0 ? void 0 : basicNewTranslation.content;
        }
        else if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR &&
            data.content &&
            (!this.storyHistoricalTranslationService.contentIsDefined(actualOriginalTranslation === null || actualOriginalTranslation === void 0 ? void 0 : actualOriginalTranslation.content) ||
                !basicNewTranslation)) {
            newOriginalContent = data.content;
        }
        if (newOriginalContent &&
            newOriginalContent !== (actualOriginalTranslation === null || actualOriginalTranslation === void 0 ? void 0 : actualOriginalTranslation.content)) {
            actualOriginalTranslation = await this.saveTranslation({
                language: language === null || language === void 0 ? void 0 : language.code,
                content: newOriginalContent,
            }, Object.assign(Object.assign({}, story), { language }), userId, true);
            if (historicalContent === undefined) {
                await this.storyHistoricalTranslationService.save({
                    userId,
                    translationId: actualOriginalTranslation === null || actualOriginalTranslation === void 0 ? void 0 : actualOriginalTranslation.id,
                    content: data.content,
                });
            }
            if (!actualOriginalTranslation) {
                return false;
            }
        }
        return true;
    }
    async concatenatePinnedMessages(storyId, channel) {
        const story = await this.storyRepository.findStoryByIdAndParams(storyId, {
            withDetails: true,
            channel,
        });
        let conversation;
        switch (channel) {
            case 'whatsapp':
            case 'telegram':
            case 'messenger':
            case 'sms': {
                conversation = story.conversation;
                break;
            }
            default: {
                return story.translations.find((translation) => translation.language.code === story.language.code).content;
            }
        }
        if (!conversation)
            return;
        let content = '';
        const messages = await this.storyService.chooseChannelMessages(story.conversationId, channel);
        for (const message of messages) {
            switch (channel) {
                case 'whatsapp':
                case 'telegram':
                case 'messenger': {
                    const messengerMessage = message;
                    if (messengerMessage.isPinned || messengerMessage.isStory)
                        content += `\n${messengerMessage.content}`;
                    break;
                }
                case 'sms': {
                    const smsMessage = message;
                    if (smsMessage.isPinned || smsMessage.isStory)
                        content += `\n${smsMessage.content}`;
                    break;
                }
            }
        }
        return content;
    }
    async retryTranslation(storyId, languageCode) {
        var _a, _b;
        try {
            const languageEntity = await this.languageService.getLanguageByCode(languageCode);
            const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'retryTranslation', ['translations', 'translations.language']);
            const { status } = story.translations.find(({ language: { code } }) => code === languageEntity.code);
            if (status !== translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR) {
                throw new shared_1.CustomError(shared_1.RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR, {
                    error: `This translation has different status than ERROR`,
                });
            }
            let content, language;
            ({ content, language } = story.translations.find(({ language: { id } }) => id === story.languageId));
            if (!language.provider) {
                ({ content, language } = story.translations.find(({ type, languageId }) => type === translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL &&
                    languageId !== story.languageId));
            }
            if (languageEntity.provider !== language.provider) {
                const enLang = await this.languageService.getLanguageByCode(languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH);
                const enTranslation = await this.storyTranslationRepository.findOne({
                    where: { storyId, languageId: enLang.id, content: (0, typeorm_1.Not)('') },
                });
                if (!enTranslation) {
                    const translation = await this.languageService.runTranslationLambdaSync(story.id, enLang, content, language.code, source_type_constants_1.SOURCE_TYPE.STORY, language.provider, (_a = language.alternativeProvider) !== null && _a !== void 0 ? _a : enLang.provider);
                    content = (0, aws_1.getPayloadFromTranslation)(translation);
                }
                else {
                    content = enTranslation.content;
                }
                language.code = languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH;
            }
            this.languageService.runTranslationLambda(story.id, languageEntity, content, language.code, source_type_constants_1.SOURCE_TYPE.STORY, language.provider, (_b = language.alternativeProvider) !== null && _b !== void 0 ? _b : languageEntity.provider);
            return true;
        }
        catch (error) {
            throw new shared_1.CustomError(shared_1.STORY_TRANSLATION_UPDATE_ERROR, error.error);
        }
    }
    saveTranslationToRepository(translation) {
        return this.storyTranslationRepository.save(translation);
    }
    async restoreOriginalContent(userId, story) {
        let restoredContent;
        if ([channel_constant_1.CHANNEL_CONSTANTS.IVRR, channel_constant_1.CHANNEL_CONSTANTS.WEB].includes(story.channel)) {
            const historicalOriginalContent = await this.storyHistoricalTranslationService.findHistoricaloriginalContentForStory(story, {
                createdAt: story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR ? 'DESC' : 'ASC',
            });
            if (!historicalOriginalContent) {
                return false;
            }
            restoredContent = historicalOriginalContent.content;
        }
        else {
            restoredContent = await this.concatenatePinnedMessages(story.id, story.channel);
        }
        const translation = await this.saveTranslation({
            language: story.language.code,
            content: restoredContent,
        }, story, userId, true);
        return !!translation.id;
    }
    async saveTranslation({ language, content }, story, userId, forceRunTranslations = false) {
        let result;
        const languageEntity = await this.languageService.getLanguageByCode(language);
        try {
            let translation = await this.storyTranslationRepository.getParticularTranslationForStory(story.id, languageEntity.id);
            if (!translation) {
                translation = new story_translation_entity_1.StoryTranslationEntity({
                    storyId: story.id,
                    languageId: languageEntity.id,
                });
            }
            else if (translation.content !== content) {
                await this.storyHistoricalTranslationService.save({
                    userId,
                    translationId: translation.id,
                    content: translation.content,
                    isRecoverable: story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR,
                });
            }
            const originalContent = translation.content;
            translation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
            translation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL;
            translation.content = content;
            translation.numberOfWords = (0, shared_1.calculateNumberOfSubstringsByDivider)(content, ' ');
            result = await this.saveTranslationToRepository(translation);
            if ((0, helpers_1.updatedOriginalContent)(story.language.code, language, originalContent, content) || forceRunTranslations || !(0, helpers_1.includesTranslatableContent)(story.translations)) {
                this.languageService.invokeTranslationModerator(story.id, content, languageEntity.id, source_type_constants_1.SOURCE_TYPE.STORY, story.translations);
            }
        }
        catch (error) {
            throw new shared_1.CustomError(error.message, error.error);
        }
        return result;
    }
    async getTranslations(storyId) {
        return this.storyService.checkThatStoryExist({ id: storyId }, 'getTranslations', ['translations', 'translations.language']);
    }
    async removeStoryTranslation(storyId, code) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'removeStoryTranslation', ['translations', 'translations.language']);
        const translation = story.translations.find((translation) => translation.language.code === code &&
            translation.language.id !== story.languageId);
        if (!translation) {
            return;
        }
        return this.storyTranslationRepository.delete(translation.id);
    }
    async setTranslationAsVerified(storyId, data) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'setTranslationAsVerified', ['translations', 'translations.language']);
        const translation = story.translations.find((item) => { var _a; return ((_a = item.language) === null || _a === void 0 ? void 0 : _a.code) === data.language; });
        if (!translation || translation.languageId === story.languageId) {
            return;
        }
        return this.storyTranslationRepository
            .update({
            storyId,
            languageId: translation.language.id,
        }, {
            type: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL,
            content: data.content,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.STORY_TRANSLATION_UPDATE_ERROR, {
                error: 'story not verified - function setTranslationAsVerified',
            });
        });
    }
};
exports.StoryTranslationModeratorService = StoryTranslationModeratorService;
exports.StoryTranslationModeratorService = StoryTranslationModeratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => language_service_1.LanguageService))),
    __metadata("design:paramtypes", [story_repository_1.StoryRepository,
        story_service_1.StoryService,
        story_translation_repository_1.StoryTranslationRepository,
        story_historical_translation_moderator_service_1.StoryHistoricalTranslationModeratorService,
        language_service_1.LanguageService,
        messenger_service_1.MessengerService])
], StoryTranslationModeratorService);
//# sourceMappingURL=story-translation-moderator.service.js.map