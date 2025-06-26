"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StoryModeratorService_1;
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryModeratorService = void 0;
const story_administrative_data_repository_1 = require("./../repository/story-administrative-data.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const story_entity_1 = require("../entity/story.entity");
const story_repository_1 = require("../repository/story.repository");
const story_recipient_repository_1 = require("../repository/story-recipient.repository");
const story_reject_reason_repository_1 = require("../repository/story-reject-reason.repository");
const story_service_1 = require("../service/story.service");
const shared_1 = require("@ourloop/shared");
const language_repository_1 = require("../../language/language.repository");
const story_translation_entity_1 = require("../entity/story-translation.entity");
const types_1 = require("../../common/types");
const languages_constants_1 = require("../../common/constant/languages.constants");
const helpers_1 = require("../../common/helpers");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const channel_constant_1 = require("../../common/constant/channel.constant");
const language_service_1 = require("../../language/language.service");
const marked_as_sensitive_constant_1 = require("../../common/constant/marked-as-sensitive.constant");
const country_service_1 = require("../../country/service/country.service");
const difficulty_constant_1 = require("../../airtable-client/constant/difficulty.constant");
const thematic_constant_1 = require("../../airtable-client/constant/thematic.constant");
const urgent_constant_1 = require("../../airtable-client/constant/urgent.constant");
const sensitive_story_table_constant_1 = require("../../airtable-client/constant/sensitive-story-table.constant");
const di_constant_1 = require("../../common/constant/di.constant");
const AirTable = __importStar(require("airtable-node"));
const notification_service_1 = require("../../notification/service/notification.service");
const email_templates_constants_1 = require("../../common/constant/email-templates.constants");
const messenger_message_repository_1 = require("../../messenger/repository/messenger-message.repository");
const message_repository_1 = require("../../sms/repository/message.repository");
const story_translation_moderator_service_1 = require("./story-translation-moderator.service");
const ivrr_service_1 = require("../../ivrr/service/ivrr.service");
const story_historical_translation_moderator_service_1 = require("../service/story-historical-translation-moderator.service");
const administrative_data_service_1 = require("../../country/service/administrative-data.service");
const administrative_data_path_mapper_1 = require("../../country/mapper/administrative-data-path.mapper");
const airtable_organisation_service_1 = require("../../airtable-client/service/airtable-organisation.service");
const organisation_repository_1 = require("../../organisation/organisation.repository");
const reject_reason_service_1 = require("../../lexicon/service/reject-reason.service");
const rxjs_1 = require("rxjs");
const microservices_1 = require("@nestjs/microservices");
const story_status_enum_1 = require("../../messenger/enum/story-status.enum");
const story_notification_service_1 = require("../../notification/service/story-notification.service");
const messenger_service_1 = require("../../messenger/service/messenger.service");
let StoryModeratorService = StoryModeratorService_1 = class StoryModeratorService {
    constructor(storyRepository, storyRecipientRepository, storyRejectReasonRepository, storyService, languageRepository, languageService, countryService, notificationService, messengerMessageRepository, messageRepository, storyHistoricalTranslationModeratorService, storyTranslationModeratorService, airTable, ivrrService, storyAdministrativeDataRepository, administrativeDataService, airTableOrganisationService, organisationRepository, rejectReasonService, clientProxy, storyNotificationService, messengerService) {
        this.storyRepository = storyRepository;
        this.storyRecipientRepository = storyRecipientRepository;
        this.storyRejectReasonRepository = storyRejectReasonRepository;
        this.storyService = storyService;
        this.languageRepository = languageRepository;
        this.languageService = languageService;
        this.countryService = countryService;
        this.notificationService = notificationService;
        this.messengerMessageRepository = messengerMessageRepository;
        this.messageRepository = messageRepository;
        this.storyHistoricalTranslationModeratorService = storyHistoricalTranslationModeratorService;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
        this.airTable = airTable;
        this.ivrrService = ivrrService;
        this.storyAdministrativeDataRepository = storyAdministrativeDataRepository;
        this.administrativeDataService = administrativeDataService;
        this.airTableOrganisationService = airTableOrganisationService;
        this.organisationRepository = organisationRepository;
        this.rejectReasonService = rejectReasonService;
        this.clientProxy = clientProxy;
        this.storyNotificationService = storyNotificationService;
        this.messengerService = messengerService;
        this.logger = new common_1.Logger(StoryModeratorService_1.name);
    }
    async changeStoryStatus(from, to) {
        return this.storyRepository.update({ status: from }, { status: to });
    }
    async sendNotificationAfterExportToAirTable(moderator, caseManagers) {
        return Promise.all(caseManagers.map((caseManager) => this.notificationService.sendEmail(email_templates_constants_1.MANAGER_TEMPLATES.NEW_STORY_IN_CASE_MANAGER_SYSTEM, {
            manager_name: caseManager.nickname,
            moderator_name: moderator === null || moderator === void 0 ? void 0 : moderator.nickname,
        }, {}, [{ Email: caseManager.email }])));
    }
    async getStoryPlace(story) {
        var _a;
        let place = story.place;
        if (story.storyAdministrativeData[0]) {
            const defaultLanguage = await this.languageService.getDefaultLanguage();
            const parents = await this.administrativeDataService.findParentsById(story.storyAdministrativeData[0].administrativeAreaId);
            const location = (0, administrative_data_path_mapper_1.administrativeDataPathMapper)(parents, defaultLanguage.id, defaultLanguage.id, defaultLanguage.id);
            place = `${location === null || location === void 0 ? void 0 : location.path}, ${(_a = story.country) === null || _a === void 0 ? void 0 : _a.name}`;
        }
        return place;
    }
    async exportStoryToAirTable(userId, id, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const story = await this.storyService.findById(id);
        if (story.status === shared_1.STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP) {
            throw new common_1.BadRequestException(shared_1.STORY_CANNOT_BE_SET_AS_SENSITIVE_AGAIN);
        }
        if (!story.isSensitive) {
            throw new common_1.BadRequestException(shared_1.SENSITIVE_STORY_NOT_FOUND);
        }
        console.log('exportStoryToAirTable - story', JSON.stringify(story));
        console.log('exportStoryToAirTable - boolean', story.status === shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER);
        if (story.status === shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER) {
            throw new common_1.BadRequestException(shared_1.SENSITIVE_STORY_ALREADY_EXPORTED);
        }
        if ([
            shared_1.STORY_STATUS.REJECTED,
            shared_1.STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP,
        ].includes(story.status)) {
            throw new common_1.BadRequestException(shared_1.STORY_INCORRECT_STATUS);
        }
        const place = await this.getStoryPlace(story);
        if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
            await this.ivrrService.removeStoryLogs(story);
        }
        const originalTranslation = story.translations.find((translation) => translation.languageId === story.languageId);
        const englishTranslation = story.translations.find((translation) => translation.language.code === languages_constants_1.LANGUAGES_CONSTANTS.ENGLISH);
        const fields = {};
        let markedAsSensitiveBy = story.markedAsSensitiveByRole
            ? (0, helpers_1.upperCaseFirst)(story.markedAsSensitiveByRole)
            : '';
        if (story.markedAsSensitiveByRole === marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY.MODERATOR) {
            markedAsSensitiveBy += `: ${(_b = (_a = story.markedAsSensitiveBy) === null || _a === void 0 ? void 0 : _a.nickname) !== null && _b !== void 0 ? _b : (_c = story.markedAsSensitiveBy) === null || _c === void 0 ? void 0 : _c.email}`;
        }
        const phone = ((_d = story.recipient) === null || _d === void 0 ? void 0 : _d.phone)
            ? story.recipient.phone
            : story.channel === channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP
                ? (_e = story.recipient) === null || _e === void 0 ? void 0 : _e.communicatorId
                : '';
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.MARKED_AS_SENSITIVE_BY] =
            markedAsSensitiveBy;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.AUTHOR_ALLOWED_FOR_CONTACT] =
            ((_f = story.recipient) === null || _f === void 0 ? void 0 : _f.userWantContact) !== false ? 'true' : 'false';
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.CONTENT] = originalTranslation === null || originalTranslation === void 0 ? void 0 : originalTranslation.content;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.CONTENT_ENG] = englishTranslation === null || englishTranslation === void 0 ? void 0 : englishTranslation.content;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.ORGANIZATION] = story.organisations
            .map((item) => item.name)
            .join(', ');
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.LANGUAGE] = (0, helpers_1.upperCaseFirst)((0, helpers_1.getKeyByValue)(languages_constants_1.LANGUAGES_CONSTANTS, story.language.code));
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.COUNTRY] = (_g = story.country) === null || _g === void 0 ? void 0 : _g.name;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.GENDER] = (_j = (0, helpers_1.upperCaseFirst)((0, helpers_1.getKeyByValue)(types_1.GENDER_VALUE, (_h = story.recipient) === null || _h === void 0 ? void 0 : _h.genderByModerator))) === null || _j === void 0 ? void 0 : _j.replace(/_/gi, ' ');
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.AGE] = (_l = (0, helpers_1.upperCaseFirst)((0, helpers_1.getKeyByValue)(types_1.AGE_VALUE, (_k = story.recipient) === null || _k === void 0 ? void 0 : _k.ageByModerator))) === null || _l === void 0 ? void 0 : _l.replace(/_/gi, ' ');
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.LOCATION] = place;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.LOOP_ID] = story.id;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.PHONE] = (0, helpers_1.isContactAccepted)(story)
            ? phone
            : '';
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.EMAIL] = (0, helpers_1.isContactAccepted)(story)
            ? (_m = story.recipient) === null || _m === void 0 ? void 0 : _m.email
            : '';
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.DISABILITY] = story.difficulties.map((item) => (0, helpers_1.getKeyByValue)(difficulty_constant_1.DIFFICULTY, item.code, false));
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.CATEGORY] = story.thematics.map((thematic) => (0, helpers_1.getKeyByValue)(thematic_constant_1.THEMATIC, thematic.parent ? thematic === null || thematic === void 0 ? void 0 : thematic.parent.code : thematic.code, false));
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.SUBCATEGORY] = story.thematics
            .filter((thematic) => thematic.parent)
            .map((thematic) => (0, helpers_1.getKeyByValue)(thematic_constant_1.THEMATIC, `${thematic.parent.code}.${thematic.code}`, false))
            .filter((thematic) => thematic);
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.MODERATOR_NOTE] = data.note;
        fields[sensitive_story_table_constant_1.SENSITIVE_STORY_COLUMNS.URGENCY] = (0, helpers_1.upperCaseFirst)((0, helpers_1.getKeyByValue)(urgent_constant_1.URGENT, +data.immediateAssistance));
        await this.airTable
            .table('Sensitive Stories')
            .create({
            records: [
                {
                    fields,
                },
            ],
        })
            .then((result) => {
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new shared_1.CustomError(shared_1.SENSITIVE_STORY_EXPORT_ERROR, {
                    error: result === null || result === void 0 ? void 0 : result.error,
                });
            }
        })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.SENSITIVE_STORY_EXPORT_ERROR, error);
        });
        return this.storyRepository.update({ id: story.id }, {
            status: shared_1.STORY_STATUS.SENT_TO_CASE_MANAGER,
            statusChangedByUserId: userId,
            isUrgent: data.immediateAssistance,
        });
    }
    async unPublishStory(userId, story) {
        if (story.status !== shared_1.STORY_STATUS.PUBLISHED) {
            throw new shared_1.CustomError(shared_1.STORY_INCORRECT_STATUS, {
                error: 'story incorrect status - function unPublishStory',
            });
        }
        return this.storyRepository
            .update(story.id, {
            status: shared_1.STORY_STATUS.PENDING_EDIT,
            statusChangedByUserId: userId,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.STORY_UPDATE_ERROR, {
                error: 'story not unpublished - function unPublishStory',
            });
        });
    }
    async getStoryDetailsByIdAndChannelOrFail(id, channel, withDetails = true) {
        const data = await this.storyRepository.findStoryByIdAndParams(id, {
            withDetails,
            channel,
        });
        if (!data)
            throw new shared_1.CustomError(shared_1.NO_STORY, {
                error: 'Story ID does not exist',
            });
        return data;
    }
    async getPendingStories(params, userLanguageId) {
        var _a, _b, _c, _d;
        let storyIds = await this.storyRepository.findPendingStoriesIds(params);
        const meta = (0, helpers_1.preparePaginationMetadata)(storyIds, params.limit, params.page);
        storyIds = (0, helpers_1.narrowDownIds)(storyIds, params.page, params.limit);
        const defaultLanguageId = (await this.languageService.getDefaultLanguage())
            .id;
        let data = [];
        if (storyIds.length) {
            data = await this.storyRepository.getPendingStoriesByIds(storyIds, params.order, userLanguageId, defaultLanguageId);
        }
        const items = [];
        let story;
        for (const row of data) {
            if ((story === null || story === void 0 ? void 0 : story.id) !== row.id) {
                if (story) {
                    items.push(story);
                }
                story = {
                    id: row.id,
                    createdAt: row.createdAt,
                    channel: row.channel,
                    status: row.status,
                    countryCode: row.countryCode,
                    languageCode: row.languageCode,
                    conversationId: row.conversationId,
                    categories: [],
                    isSensitive: !!row.isSensitive,
                    moderatorId: row.assignedModerator_id,
                    moderatorName: row.assignedModerator_nickname,
                    moderatorEmail: row.assignedModerator_email,
                };
                if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
                    story.s3FileId = row.s3FileId;
                    story.recordingDuration = row.recordingDuration;
                }
                else {
                    story.content = ((_a = row.userContent) === null || _a === void 0 ? void 0 : _a.length)
                        ? row.userContent
                        : ((_b = row.defaultContent) === null || _b === void 0 ? void 0 : _b.length)
                            ? row.defaultContent
                            : row.originalContent;
                    story.numberOfWords = ((_c = row.userContent) === null || _c === void 0 ? void 0 : _c.length)
                        ? row.numberOfWordsOfUserContent
                        : ((_d = row.defaultContent) === null || _d === void 0 ? void 0 : _d.length)
                            ? row.numberOfWordsOfDefaultContent
                            : row.numberOfWordsOfOriginalContent;
                }
            }
            if (row.categoryCode && !story.categories.includes(row.categoryCode)) {
                story.categories.push(row.categoryCode);
            }
        }
        if (story) {
            items.push(story);
        }
        meta.itemCount = items.length;
        const itemsWithPagination = { meta, items };
        const promises = [];
        for (const story of itemsWithPagination.items) {
            if (story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR || !story.s3FileId)
                continue;
            if (!story.recordingDuration) {
                const recordingDurationPromise = this.ivrrService
                    .getS3FileAudioDuration(story.s3FileId)
                    .then((fileDuration) => {
                    const roundedRecordingDuration = Math.ceil(fileDuration);
                    story.recordingDuration = roundedRecordingDuration;
                });
                promises.push(recordingDurationPromise);
            }
        }
        await Promise.all(promises);
        return itemsWithPagination;
    }
    async setTranslations(userId, story, translations, languages) {
        let language;
        let storyTranslation;
        const operations = [];
        translations = translations.filter((item) => item.code !== story.language.code);
        for (const translation of translations) {
            language = languages.find((entity) => entity.code === translation.code);
            if (!language) {
                throw new shared_1.CustomError(shared_1.LANGUAGE_NOT_FOUND, {
                    error: 'language is not supported - function setTranslations',
                });
            }
            storyTranslation = story.translations.find((entity) => entity.languageId === (language === null || language === void 0 ? void 0 : language.id));
            if (storyTranslation) {
                if (storyTranslation.content !== translation.content) {
                    operations.push(this.storyHistoricalTranslationModeratorService.save({
                        userId,
                        translationId: storyTranslation.id,
                        content: storyTranslation.content,
                        isRecoverable: story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR,
                    }));
                }
                storyTranslation.content = translation.content;
                storyTranslation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL;
            }
            else {
                story.translations.push(new story_translation_entity_1.StoryTranslationEntity({
                    storyId: story.id,
                    languageId: language.id,
                    content: translation.content,
                    language,
                }));
            }
        }
        if (operations.length) {
            await Promise.all(operations);
        }
        return story;
    }
    async changeOriginLanguage(userId, story, manualTranslationLanguages, language) {
        await Promise.all(story.translations
            .filter((item) => !manualTranslationLanguages.includes(item.language.code))
            .map((item) => this.storyHistoricalTranslationModeratorService.save({
            translationId: item.id,
            content: item.content,
            userId,
            isRecoverable: story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR,
        })));
        const { translations, contentUpdated, oldOriginalContent } = await this.languageService.changeOriginLanguage(story.translations, language, story.languageId, manualTranslationLanguages);
        story.translations = translations;
        if (!contentUpdated) {
            const newTranslation = new story_translation_entity_1.StoryTranslationEntity({
                storyId: story.id,
                languageId: language.id,
                content: oldOriginalContent,
            });
            newTranslation.language = language;
            story.translations.push(newTranslation);
        }
        return story;
    }
    async updateStory(userId, story, data) {
        var _a, _b, _c, _d, _e, _f;
        const country = await this.countryService.findByIdOrFail(data.countryId);
        const languages = await this.languageRepository.find();
        const language = await this.languageService.checkOriginLanguage(data.language);
        if (story.countryId !== country.id && !data.regionId) {
            data.regionId = null;
        }
        if (Number.isInteger(data.regionId)) {
            const region = await this.administrativeDataService.findAdministrativeDataOrFail(data.regionId);
            if (region.countryId !== country.id) {
                throw new common_1.BadRequestException(shared_1.GET_ADMINISTRATIVE_DATA_FAILED);
            }
        }
        if (data.isSensitive === false &&
            story.markedAsSensitiveByRole === marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY.AUTHOR) {
            throw new shared_1.CustomError(shared_1.SENSITIVE_STORY_CAN_NOT_BE_UPDATED_TO_NON_SENSITIVE, {
                error: 'story update error - function updateStory',
            });
        }
        if (story.status == shared_1.STORY_STATUS.SENT_FROM_CASE_MANAGER_TO_LOOP &&
            data.isSensitive) {
            throw new shared_1.CustomError(shared_1.STORY_CANNOT_BE_SET_AS_SENSITIVE_AGAIN, {
                error: 'story update error - function updateStory',
            });
        }
        if (data.translations) {
            story = await this.setTranslations(userId, story, data.translations, languages);
        }
        if (data.language && (language === null || language === void 0 ? void 0 : language.id) !== story.languageId) {
            story = await this.changeOriginLanguage(userId, story, data.translations
                ? data.translations
                    .filter((item) => item.code !== story.language.code)
                    .map((item) => item.code)
                : [], language);
        }
        const operations = await this.storyService.setStoryAttributes(data);
        const markedAsSensitiveByRole = !story.markedAsSensitiveByRole && data.isSensitive
            ? marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY.MODERATOR
            : story.markedAsSensitiveByRole;
        if (story.recipient) {
            await this.storyRecipientRepository.update(story.recipientId, {
                nickname: (_a = data.authorNickname) !== null && _a !== void 0 ? _a : story.recipient.nickname,
                ageByModerator: (_b = data.age) !== null && _b !== void 0 ? _b : story.recipient.ageByModerator,
                genderByModerator: (_c = data.gender) !== null && _c !== void 0 ? _c : story.recipient.genderByModerator,
                isMinority: (_d = data.isMinority) !== null && _d !== void 0 ? _d : story.recipient.isMinority,
            });
        }
        const edited = story.status === shared_1.STORY_STATUS.PENDING_EDIT;
        const updatedStory = await this.storyRepository
            .save(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, shared_1._omit)(story, ['language'])), (0, helpers_1._pick)(data, [
            'age',
            'gender',
            'authorNickname',
            'place',
            'isSensitive',
            'isUrgent',
            'isMinority',
        ], true)), (0, helpers_1._pick)(operations, [
            'categories',
            'organisations',
            'maternityStatus',
            'difficulties',
            'thematics',
        ])), { difficulty: data.difficulty
                ? types_1.DIFFICULTY_VALUE[data.difficulty.toUpperCase()]
                : null, countryId: country.id, languageId: (_e = language === null || language === void 0 ? void 0 : language.id) !== null && _e !== void 0 ? _e : story.languageId, status: shared_1.STORY_STATUS.PENDING_PUBLICATION, statusChangedByUserId: userId, markedAsSensitiveByRole, markedAsSensitiveByUserId: markedAsSensitiveByRole ? userId : null }), (edited ? { edited } : {})))
            .catch((error) => {
            this.logger.error(error);
            throw new shared_1.CustomError(shared_1.STORY_UPDATE_ERROR, {
                error: 'story update error - function updateStory',
            });
        });
        if (((_f = data.organisations) === null || _f === void 0 ? void 0 : _f.length) > 0) {
            const organisations = await this.organisationRepository.findBy({
                id: (0, typeorm_1.In)(data.organisations),
            });
            this.airTableOrganisationService.syncNumberOfStoriesToAirtable(organisations);
        }
        let isRepinned;
        let isValid;
        if (data.pinnedMessageIds) {
            ({ status: isRepinned, isValid } = await this.updatePinnedMessages(updatedStory.id, updatedStory.channel, data.pinnedMessageIds));
        }
        if (Number.isInteger(data.regionId) || data.regionId === null) {
            const storyAdministrativeData = await this.storyAdministrativeDataRepository.findByStoryId(story.id);
            if (storyAdministrativeData.length > 0) {
                await this.storyAdministrativeDataRepository.remove(storyAdministrativeData);
            }
        }
        if (Number.isInteger(data.regionId)) {
            await this.administrativeDataService.assignAdministrativeDataToStory(data.regionId, story.id);
        }
        const result = await this.storyTranslationModeratorService.checkOriginalContent(userId, story, data, language !== null && language !== void 0 ? language : story.language, isRepinned);
        if (!result || (isRepinned && !isValid)) {
            return;
        }
        return updatedStory;
    }
    async setStoryStatus(userId, storyId, status) {
        return this.storyRepository.update(storyId, {
            status,
            statusChangedByUserId: userId,
        });
    }
    async rejectStory(userId, story, rejectContent, rejectReasons) {
        if (story.status === shared_1.STORY_STATUS.REJECTED) {
            throw new shared_1.CustomError(shared_1.STORY_INCORRECT_STATUS, {
                error: 'story incorrect status - function rejectStory',
            });
        }
        story.status = shared_1.STORY_STATUS.REJECTED;
        story.rejectRationale = rejectContent === null || rejectContent === void 0 ? void 0 : rejectContent.rationale;
        if (userId && userId.length > 0)
            story.statusChangedByUserId = userId;
        if ((rejectReasons === null || rejectReasons === void 0 ? void 0 : rejectReasons.length) > 0) {
            await this.storyRejectReasonRepository.delete({
                storyId: story.id,
            });
            story.rejectReasons = rejectReasons.map((rejectReason, key) => ({
                rejectReasonId: rejectReason.id,
                rejectReasonText: rejectContent.reasonTexts
                    ? rejectContent.reasonTexts[key]
                    : null,
                storyId: story.id,
            }));
            const language = await this.languageRepository.findOne({
                where: { code: rejectContent === null || rejectContent === void 0 ? void 0 : rejectContent.notificationLanguage },
            });
            story.rejectReasonLanguageId = language ? language.id : null;
        }
        return this.storyRepository.save(story);
    }
    async publishStory(story, moderatorId) {
        console.log('💀'.repeat(10));
        console.log(`publishStory Entry`);
        if (![shared_1.STORY_STATUS.PENDING_PUBLICATION, shared_1.STORY_STATUS.PENDING_EDIT].includes(story.status)) {
            throw new shared_1.CustomError(shared_1.STORY_INCORRECT_STATUS, {
                error: 'story incorrect status - function publishStory',
            });
        }
        if (!!story.isSensitive) {
            throw new shared_1.CustomError(shared_1.SENSITIVE_STORY_CANNOT_BE_PUBLISHED_ERROR, {
                error: 'sensitive story cannot be published - function publishStory',
            });
        }
        if (!(0, helpers_1.includesTranslatableContent)(story.translations)) {
            throw new shared_1.CustomError(shared_1.TRANSLATIONS_ARE_NEEDED, {
                error: 'machine-translated content id needed - function publishStory',
            });
        }
        console.log('💀'.repeat(10));
        console.log(`publishStory before update`);
        return this.storyRepository
            .update(story.id, {
            status: shared_1.STORY_STATUS.PUBLISHED,
            statusChangedByUserId: moderatorId,
            publishedAt: !story.publishedAt ? new Date() : story.publishedAt,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.STORY_UPDATE_ERROR, {
                error: 'story not published - function publishStory',
            });
        });
    }
    async removeStory(id) {
        var _a;
        const story = await this.storyService.checkThatStoryExist({ id }, 'removeStory', ['organisations']);
        const res = await this.storyRepository.remove(story);
        if (res) {
            if (((_a = story === null || story === void 0 ? void 0 : story.organisations) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.airTableOrganisationService.syncNumberOfStoriesToAirtable(story.organisations);
            }
            return { success: true };
        }
        return { success: false };
    }
    async updatePinnedMessages(storyId, channel, pinnedMessageIds) {
        const story = await this.storyRepository.findStoryByIdAndParams(storyId, {
            withDetails: true,
            channel,
        });
        let conversation;
        if (story.conversation && story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
            conversation = story.conversation;
        }
        if (!conversation)
            return { status: false, isValid: false };
        const messages = await this.storyService.chooseChannelMessages(story.conversationId, channel);
        const messagesShouldBeRepined = this.messagesShouldBeRepined(messages, pinnedMessageIds);
        if (!messagesShouldBeRepined) {
            return { status: false, isValid: false };
        }
        for (const message of messages) {
            const shouldBePinned = pinnedMessageIds.includes(message.id);
            if (channel === channel_constant_1.CHANNEL_CONSTANTS.SMS) {
                await this.messageRepository.save(Object.assign(Object.assign({}, message), { isPinned: shouldBePinned }));
            }
            else {
                await this.messengerMessageRepository.save(Object.assign(Object.assign({}, message), { isPinned: shouldBePinned }));
            }
        }
        return {
            status: true,
            isValid: pinnedMessageIds.every((value) => messages.map((item) => item.id).includes(value)),
        };
    }
    messagesShouldBeRepined(messages, newPinnes) {
        const actualPinnes = messages
            .filter((message) => message.isPinned)
            .map((message) => message.id);
        const difference = actualPinnes.filter((value) => !newPinnes.includes(value));
        return !!difference.length || actualPinnes.length !== newPinnes.length;
    }
    async checkStoryAndReject(storyId, rejectContent, user) {
        (0, helpers_1.checkRejectReason)(rejectContent);
        const { reasonIds } = rejectContent;
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'rejectStory', [
            'recipient',
            'user',
            'conversation',
            'conversation.smsMessages',
            'conversation.ivrrMessages',
            'conversation.messengerMessages',
            'country',
            'language',
        ]);
        let rejectReasons;
        if ((reasonIds === null || reasonIds === void 0 ? void 0 : reasonIds.length) > 0) {
            rejectReasons = await this.rejectReasonService.findByIdsOrFail(reasonIds);
        }
        this.validateReasonsForChannels(story, rejectReasons);
        const result = await this.rejectStory(user ? user === null || user === void 0 ? void 0 : user.id : '', story, rejectContent, rejectReasons);
        const success = !!(result === null || result === void 0 ? void 0 : result.id);
        if (success) {
            this.handleActionsAfterRejection(story, rejectContent, rejectReasons);
        }
        return success;
    }
    validateReasonsForChannels(story, rejectReasons) {
        if ((story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR &&
            this.checkIfRejectReasonContainsCode(rejectReasons, types_1.REJECT_REASON_CODE.OTHER)) ||
            (story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR &&
                this.checkIfRejectReasonContainsCode(rejectReasons, types_1.REJECT_REASON_CODE.POOR_AUDIO_QUALITY))) {
            throw new common_1.BadRequestException(shared_1.BAD_STORY_CHANNEL);
        }
    }
    checkIfRejectReasonContainsCode(rejectReasons, code) {
        return !!rejectReasons.find((reason) => reason.code === code);
    }
    handleSMSRejection(story) {
        var _a, _b;
        const provider = (_a = story.conversation) === null || _a === void 0 ? void 0 : _a.provider;
        if (!provider) {
            throw new shared_1.CustomError(shared_1.PROVIDER_NOT_FOUND, {
                error: 'No provider for checkToRemovePhoneAfterStoryReject',
            });
        }
        (0, rxjs_1.lastValueFrom)(this.clientProxy.send({ cmd: `${provider}_checkToRemovePhoneAfterStoryReject` }, {
            phone: (_b = story.recipient) === null || _b === void 0 ? void 0 : _b.phone,
            storyId: story.id,
            loopPhone: story.conversation.serviceNumber,
            country: story.country.code,
        })).catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async handleActionsAfterRejection(story, rejectContent, rejectReasons) {
        var _a;
        this.storyNotificationService.sendNotificationsAfterRejectingStory(story, rejectContent);
        if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.SMS) {
            this.handleSMSRejection(story);
        }
        if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
            await this.ivrrService.prepareRejectedStoryCall(story, rejectReasons);
        }
        if ((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.communicatorId) {
            await this.messengerService.sendStoryStatus(story, story_status_enum_1.StoryStatus.REJECTED, this.messengerService.prepareNotificatonReasonText(rejectContent));
        }
    }
    async handleBulkAssignStories(story_ids, moderator_id) {
        return await this.storyRepository
            .createQueryBuilder()
            .update(story_entity_1.StoryEntity)
            .set({ assigned_moderator_id: moderator_id })
            .where({ id: (0, typeorm_1.In)(story_ids.storyIds) })
            .execute();
    }
    getStoriesBySameRecipient(phone, email, storyId) {
        const whereConditions = [];
        if (phone) {
            whereConditions.push({ recipient: { phone }, id: (0, typeorm_1.Not)(storyId) });
        }
        if (email) {
            whereConditions.push({ recipient: { email }, id: (0, typeorm_1.Not)(storyId) });
        }
        if (!whereConditions.length)
            return Promise.resolve([]);
        return this.storyRepository.find({
            where: whereConditions,
            relations: ['translations'],
            select: ['id', 'status', 'createdAt']
        });
    }
};
exports.StoryModeratorService = StoryModeratorService;
exports.StoryModeratorService = StoryModeratorService = StoryModeratorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(12, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.AIRTABLE)),
    __param(19, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __metadata("design:paramtypes", [story_repository_1.StoryRepository,
        story_recipient_repository_1.StoryRecipientRepository,
        story_reject_reason_repository_1.StoryRejectReasonRepository,
        story_service_1.StoryService,
        language_repository_1.LanguageRepository,
        language_service_1.LanguageService,
        country_service_1.CountryService,
        notification_service_1.NotificationService,
        messenger_message_repository_1.MessengerMessageRepository,
        message_repository_1.MessageRepository,
        story_historical_translation_moderator_service_1.StoryHistoricalTranslationModeratorService,
        story_translation_moderator_service_1.StoryTranslationModeratorService, typeof (_a = typeof AirTable !== "undefined" && AirTable) === "function" ? _a : Object, ivrr_service_1.IvrrService,
        story_administrative_data_repository_1.StoryAdministrativeDataRepository,
        administrative_data_service_1.AdministrativeDataService,
        airtable_organisation_service_1.AirTableOrganisationService,
        organisation_repository_1.OrganisationRepository,
        reject_reason_service_1.RejectReasonService,
        microservices_1.ClientProxy,
        story_notification_service_1.StoryNotificationService,
        messenger_service_1.MessengerService])
], StoryModeratorService);
//# sourceMappingURL=story-moderator.service.js.map