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
var StoryModeratorController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryModeratorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
const class_transformer_1 = require("class-transformer");
const story_moderator_service_1 = require("../service/story-moderator.service");
const shared_1 = require("@ourloop/shared");
const story_list_moderator_mapper_1 = require("../mapper/story-list-moderator.mapper");
const story_list_moderator_pagination_ro_1 = require("../response/story-list-moderator-pagination.ro");
const story_pagination_with_order_and_filter_dto_1 = require("../../common/dto/story-pagination-with-order-and-filter.dto");
const story_pagination_with_order_and_filter_schema_1 = require("../../common/request/schema/story-pagination-with-order-and-filter.schema");
const passport_1 = require("@nestjs/passport");
const success_ro_1 = require("../../common/response/success.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const update_story_schema_1 = require("../request/schema/update-story-schema");
const update_story_dto_1 = require("../request/dto/update-story.dto");
const story_service_1 = require("../service/story.service");
const success_mapper_1 = require("../../common/mapper/success.mapper");
const story_notification_service_1 = require("../../notification/service/story-notification.service");
const reject_content_schema_1 = require("../../common/request/schema/reject-content.schema");
const reject_content_dto_1 = require("../../common/dto/reject-content.dto");
const story_web_moderator_ro_1 = require("../response/story-web-moderator.ro");
const story_web_details_mapper_1 = require("../mapper/story-web-details.mapper");
const story_sms_details_mapper_1 = require("../mapper/story-sms-details.mapper");
const story_sms_moderator_ro_1 = require("../response/story-sms-moderator.ro");
const channel_constant_1 = require("../../common/constant/channel.constant");
const export_story_schema_1 = require("../request/schema/export-story-schema");
const export_story_dto_1 = require("../request/dto/export-story.dto");
const story_messenger_details_mapper_1 = require("../mapper/story-messenger-details.mapper");
const story_messenger_moderator_ro_1 = require("../response/story-messenger-moderator.ro");
const messenger_service_1 = require("../../messenger/service/messenger.service");
const story_status_enum_1 = require("../../messenger/enum/story-status.enum");
const operators_1 = require("rxjs/operators");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const case_manager_service_1 = require("../../case-manager/service/case-manager.service");
const ivrr_service_1 = require("../../ivrr/service/ivrr.service");
const story_translation_moderator_service_1 = require("../service/story-translation-moderator.service");
const story_historical_translation_moderator_service_1 = require("../service/story-historical-translation-moderator.service");
const languages_constants_1 = require("../../common/constant/languages.constants");
const language_id_decorator_1 = require("../../language/language-id.decorator");
const language_service_1 = require("../../language/language.service");
const message_service_1 = require("../../sms/service/message.service");
const rejected_stories_ro_1 = require("../response/rejected-stories.ro");
const assign_stories_schema_1 = require("../request/schema/assign-stories-schema");
const assign_stories_dto_1 = require("../request/dto/assign-stories.dto");
const assigned_stories_ro_1 = require("../response/assigned-stories.ro");
const moderators_service_1 = require("../../lexicon/service/moderators.service");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
const cerbos_service_1 = require("../../common/cerbos/cerbos.service");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
let StoryModeratorController = StoryModeratorController_1 = class StoryModeratorController {
    constructor(clientProxy, storyModeratorService, storyService, storyNotificationService, messengerService, caseManagerService, storyTranslationModeratorService, storyHistoricalTranslationModeratorService, ivrrService, languageService, config, cerbosService, messageService, moderatorService) {
        this.clientProxy = clientProxy;
        this.storyModeratorService = storyModeratorService;
        this.storyService = storyService;
        this.storyNotificationService = storyNotificationService;
        this.messengerService = messengerService;
        this.caseManagerService = caseManagerService;
        this.storyTranslationModeratorService = storyTranslationModeratorService;
        this.storyHistoricalTranslationModeratorService = storyHistoricalTranslationModeratorService;
        this.ivrrService = ivrrService;
        this.languageService = languageService;
        this.config = config;
        this.cerbosService = cerbosService;
        this.messageService = messageService;
        this.moderatorService = moderatorService;
        this.logger = new common_1.Logger(StoryModeratorController_1.name);
    }
    async getListOfPending(params, userLanguageId) {
        if (!params.page || params.page < 1) {
            params.page = 1;
        }
        const pendingStories = await this.storyModeratorService.getPendingStories(params, userLanguageId);
        return Object.assign(Object.assign({}, pendingStories), { items: (0, story_list_moderator_mapper_1.pendingStoriesMapper)(pendingStories.items) });
    }
    async exportStoryToAirTable(user, storyId, data) {
        const result = await this.storyModeratorService.exportStoryToAirTable(user.id, storyId, data);
        const success = result && !!(result === null || result === void 0 ? void 0 : result.affected);
        if (success) {
            const caseManagers = await this.caseManagerService.findWithEmail();
            this.storyModeratorService.sendNotificationAfterExportToAirTable(user, caseManagers);
            if (data.immediateAssistance) {
                await this.storyNotificationService.sendNotificationAfterUrgentStory(storyId);
            }
        }
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async stopCompletingStory(storyId) {
        var _a, _b, _c, _d;
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'publishStory', ['conversation', 'conversation.smsMessages', 'recipient']);
        const provider = (_a = story.conversation) === null || _a === void 0 ? void 0 : _a.provider;
        if (!provider) {
            throw new shared_1.CustomError(shared_1.PROVIDER_NOT_FOUND, {
                error: 'No provider for removeMessagesFromProviderAndCache',
            });
        }
        try {
            let response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
                .send({ cmd: `${provider}_getMessages` }, { phone: (_b = story.recipient) === null || _b === void 0 ? void 0 : _b.phone })
                .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                throw new shared_1.CustomError(error.message, error.error);
            });
            if (response.messages) {
                response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
                    .send({ cmd: `${provider}_removeMessagesFromProviderAndCache` }, { phone: (_c = story.recipient) === null || _c === void 0 ? void 0 : _c.phone })
                    .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                    throw new shared_1.CustomError(error.message, error.error);
                });
            }
            return (0, success_mapper_1.responseToSuccessRO)((_d = response.success) !== null && _d !== void 0 ? _d : false);
        }
        catch (error) {
            throw error;
        }
    }
    async updateStory(user, storyId, data) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'updateStory', [
            'user',
            'user.language',
            'organisations',
            'translations',
            'translations.language',
            'language',
            'recipient',
        ]);
        if (story.status == shared_1.STORY_STATUS.PUBLISHED) {
            throw new common_1.BadRequestException(shared_1.STORY_IS_ALREADY_PUBLISHED);
        }
        if (story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR && data.content) {
            throw new common_1.BadRequestException(shared_1.VALIDATION_FAILED);
        }
        if ([channel_constant_1.CHANNEL_CONSTANTS.IVRR, channel_constant_1.CHANNEL_CONSTANTS.WEB].includes(story.channel) &&
            data.pinnedMessageIds) {
            throw new common_1.BadRequestException(shared_1.VALIDATION_FAILED);
        }
        if (story.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR && data.content) {
            return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: false });
        }
        const result = await this.storyModeratorService.updateStory(user.id, story, data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!result });
    }
    async unPublishStory(user, storyId) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'unPublishStory');
        const result = await this.storyModeratorService.unPublishStory(user.id, story);
        const success = result && !!(result === null || result === void 0 ? void 0 : result.affected);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async publishStory(user, storyId) {
        var _a;
        console.log('💀'.repeat(10));
        console.log(`checkThatStoryExist`);
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'publishStory', [
            'recipient',
            'user',
            'language',
            'conversation',
            'conversation.smsMessages',
            'conversation.ivrrMessages',
            'conversation.messengerMessages',
            'user.language',
            'organisations',
            'translations',
            'translations.language',
            'country',
            'storyAdministrativeData',
        ]);
        console.log('💀'.repeat(10));
        console.log(`publishStory`);
        const result = await this.storyModeratorService.publishStory(story, user.id);
        const success = result && !!(result === null || result === void 0 ? void 0 : result.affected);
        if (success) {
            console.log('💀'.repeat(10));
            console.log(`sendNotificationsAfterStoryPublication`);
            this.storyNotificationService.sendNotificationsAfterStoryPublication(story);
            if (story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
                console.log('💀'.repeat(10));
                console.log(`preparePublishedStoryCall`);
                await this.ivrrService.preparePublishedStoryCall(story);
                console.log('💀'.repeat(10));
                console.log(`removeStoryLogs`);
                await this.ivrrService.removeStoryLogs(story);
            }
            if ((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.communicatorId) {
                console.log('💀'.repeat(10));
                console.log(`sendStoryStatus`);
                this.messengerService.sendStoryStatus(story, story_status_enum_1.StoryStatus.PUBLISHED);
            }
        }
        console.log('💀'.repeat(10));
        console.log(`Done`);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async rejectStory(user, storyId, rejectContent) {
        const success = await this.storyModeratorService.checkStoryAndReject(storyId, rejectContent, user);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success });
    }
    async removeStory(storyId) {
        const res = await this.storyModeratorService.removeStory(storyId);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, res);
    }
    async getWebStoryDetails(storyId, userLanguageId) {
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.WEB),
            this.languageService.getDefaultLanguage(),
        ]);
        const historicalContent = await this.storyHistoricalTranslationModeratorService.findHistoricaloriginalContentForStory(story);
        return (0, story_web_details_mapper_1.storyWebDetailsMapper)(story, historicalContent === null || historicalContent === void 0 ? void 0 : historicalContent.content, story.languageId, userLanguageId, defaultLanguage);
    }
    async getSMSStoryDetails(storyId, userLanguageId) {
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.SMS),
            this.languageService.getDefaultLanguage(),
        ]);
        const messages = await this.messageService.getSmsMessagesByConversationId(story.conversationId);
        const pinnedMessages = await this.storyTranslationModeratorService.concatenatePinnedMessages(story.id, story.channel);
        return (0, story_sms_details_mapper_1.storySMSDetailsMapper)(story, pinnedMessages, story.languageId, userLanguageId, defaultLanguage, messages);
    }
    async getMessengerStoryDetails(storyId, userLanguageId) {
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.MESSENGER),
            this.languageService.getDefaultLanguage(),
        ]);
        const messages = await this.messengerService.getMessengerMessagesByConversationId(story.conversationId);
        const pinnedMessages = await this.storyTranslationModeratorService.concatenatePinnedMessages(story.id, story.channel);
        return (0, story_messenger_details_mapper_1.storyMessengerDetailsMapper)(story, pinnedMessages, story.languageId, userLanguageId, defaultLanguage, messages);
    }
    async getWhatsAppStoryDetails(storyId, userLanguageId) {
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.WHATSAPP),
            this.languageService.getDefaultLanguage(),
        ]);
        const messages = await this.messengerService.getMessengerMessagesByConversationId(story.conversationId);
        const pinnedMessages = await this.storyTranslationModeratorService.concatenatePinnedMessages(story.id, story.channel);
        return (0, story_messenger_details_mapper_1.storyMessengerDetailsMapper)(story, pinnedMessages, story.languageId, userLanguageId, defaultLanguage, messages);
    }
    async getTelegramStoryDetails(storyId, userLanguageId) {
        const [story, defaultLanguage] = await Promise.all([
            this.storyModeratorService.getStoryDetailsByIdAndChannelOrFail(storyId, channel_constant_1.CHANNEL_CONSTANTS.TELEGRAM),
            this.languageService.getDefaultLanguage(),
        ]);
        const messages = await this.messengerService.getMessengerMessagesByConversationId(story.conversationId);
        const pinnedMessages = await this.storyTranslationModeratorService.concatenatePinnedMessages(story.id, story.channel);
        return (0, story_messenger_details_mapper_1.storyMessengerDetailsMapper)(story, pinnedMessages, story.languageId, userLanguageId, defaultLanguage, messages);
    }
    async rejectStories(user, rejections) {
        const rejectedStoryIds = [];
        const failedStoryIds = [];
        for (const rejection of rejections.storiesToReject) {
            try {
                const success = await this.storyModeratorService.checkStoryAndReject(rejection.storyId, rejection, user);
                if (success) {
                    rejectedStoryIds.push(rejection.storyId);
                }
                else {
                    failedStoryIds.push(rejection.storyId);
                }
            }
            catch (error) {
                failedStoryIds.push(rejection.storyId);
            }
        }
        return (0, class_transformer_1.plainToClass)(rejected_stories_ro_1.RejectedStoriesRO, {
            rejectedStoryIds,
            failedStoryIds,
        });
    }
    async bulkAssignStoriesToModerator(moderator_id, stories) {
        try {
            const result = await this.storyModeratorService.handleBulkAssignStories(stories, moderator_id);
            const moderator = await this.moderatorService.findModeratorById(moderator_id);
            if (!!result) {
                return (0, class_transformer_1.plainToClass)(assigned_stories_ro_1.AssignStoriesRO, {
                    assignedStoriesIds: stories.storyIds,
                    assignedModerator: moderator,
                });
            }
        }
        catch (error) {
            console.log('Error', error);
        }
    }
};
exports.StoryModeratorController = StoryModeratorController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get list of stories for admin to publish or reject',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_list_moderator_pagination_ro_1.StoryListModeratorPaginationRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/pending'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.STORY),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(story_pagination_with_order_and_filter_schema_1.storyPaginationWithOrderAndFilterSchema))),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [story_pagination_with_order_and_filter_dto_1.StoryPaginationWithOrderAndFilterDto, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getListOfPending", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Export sensitive story to AirTable' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Post)(':id/export'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, common_1.Body)(new shared_1.ValidationPipe(export_story_schema_1.exportStorySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, export_story_dto_1.ExportStoryDto]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "exportStoryToAirTable", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Stop completing story' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Post)(':id/stop-completing'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.STORY),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "stopCompletingStory", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Update story' }),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.UPDATE, permission_enum_1.CERBOS_RESOURCES.STORY),
    (0, common_1.Put)(':id'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, common_1.Body)(new shared_1.ValidationPipe(update_story_schema_1.updateStorySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, update_story_dto_1.UpdateStoryDto]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "updateStory", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Unpublish story' }),
    (0, common_1.Put)(':id/unpublish'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "unPublishStory", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Publish story' }),
    (0, common_1.Put)(':id/publish'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "publishStory", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Reject story' }),
    (0, common_1.Put)(':id/reject'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(2, (0, common_1.Body)(new shared_1.ValidationPipe(reject_content_schema_1.rejectContentSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity, String, reject_content_dto_1.RejectContentDto]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "rejectStory", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Remove story' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "removeStory", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular WEB story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_web_moderator_ro_1.StoryWebModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/web/:id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getWebStoryDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular SMS story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_sms_moderator_ro_1.StorySMSModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/sms/:id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getSMSStoryDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular Messenger story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_messenger_moderator_ro_1.StoryMessengerModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/messenger/:id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getMessengerStoryDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular WhatsApp story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_messenger_moderator_ro_1.StoryMessengerModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/whatsapp/:id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getWhatsAppStoryDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get details of particular Telegram story',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: story_messenger_moderator_ro_1.StoryMessengerModeratorRO,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'content-language',
        enum: languages_constants_1.LANGUAGES_CONSTANTS,
    }),
    (0, common_1.Get)('/telegram/:id'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, language_id_decorator_1.LanguageId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "getTelegramStoryDetails", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Reject stories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: rejected_stories_ro_1.RejectedStoriesRO }),
    (0, common_1.Post)('reject-stories'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(reject_content_schema_1.rejectStoriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        reject_content_dto_1.RejectStoriesDto]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "rejectStories", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Bulk assign stories to moderators' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: Boolean }),
    (0, common_1.Put)(':id/bulk_assign_stories'),
    __param(0, (0, common_1.Param)('id', new uuid_validation_pipe_1.UuidValidationPipe())),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(assign_stories_schema_1.assignStoriesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_stories_dto_1.AssignStoriesDTO]),
    __metadata("design:returntype", Promise)
], StoryModeratorController.prototype, "bulkAssignStoriesToModerator", null);
exports.StoryModeratorController = StoryModeratorController = StoryModeratorController_1 = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Story Moderator'),
    (0, common_1.Controller)('story/moderator'),
    __param(0, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(10, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        story_moderator_service_1.StoryModeratorService,
        story_service_1.StoryService,
        story_notification_service_1.StoryNotificationService,
        messenger_service_1.MessengerService,
        case_manager_service_1.CaseManagerService,
        story_translation_moderator_service_1.StoryTranslationModeratorService,
        story_historical_translation_moderator_service_1.StoryHistoricalTranslationModeratorService,
        ivrr_service_1.IvrrService,
        language_service_1.LanguageService,
        config_1.ConfigService,
        cerbos_service_1.CerbosService,
        message_service_1.MessageService,
        moderators_service_1.ModeratorService])
], StoryModeratorController);
//# sourceMappingURL=story-moderator.controller.js.map