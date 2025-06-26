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
exports.MessengerService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("@ourloop/shared");
const channel_constant_1 = require("../../common/constant/channel.constant");
const helpers_1 = require("../../common/helpers");
const country_repository_1 = require("../../country/repository/country.repository");
const language_repository_1 = require("../../language/language.repository");
const story_service_1 = require("../../story/service/story.service");
const messenger_message_repository_1 = require("../repository/messenger-message.repository");
const operators_1 = require("rxjs/operators");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const microservices_2 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const helpers_2 = require("../../common/helpers");
const story_conversation_service_1 = require("../../story/service/story-conversation.service");
const story_recipient_service_1 = require("../../story/service/story-recipient.service");
let MessengerService = class MessengerService {
    constructor(languageEntityRepository, countryEntityRepository, storyConversationService, storyRecipientService, messengerMessageRepository, storyService, clientProxy, config) {
        this.languageEntityRepository = languageEntityRepository;
        this.countryEntityRepository = countryEntityRepository;
        this.storyConversationService = storyConversationService;
        this.storyRecipientService = storyRecipientService;
        this.messengerMessageRepository = messengerMessageRepository;
        this.storyService = storyService;
        this.clientProxy = clientProxy;
        this.config = config;
    }
    async testExternal() {
        console.log('send message testInternal');
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: 'testFacebookInternal' }, {})
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then((data) => !!data.success)
            .catch((error) => {
            console.log(`Could not send story, error: ${JSON.stringify(error)}`);
            return error;
        });
    }
    async saveMessengerFlow(data, channel) {
        var _a, _b, _c, _d, _e, _f;
        const languageEntity = await this.fetchFlowLanguage(data.lang);
        let conversation = await this.storyConversationService.findByUUID(data.storyUuid);
        if (conversation) {
            return conversation;
        }
        conversation = await this.storyConversationService.saveConversation({
            uuid: data.storyUuid,
            languageId: languageEntity.id,
            serviceNumber: data.pageId,
            additionalInfo: data.additionalInfo,
            startedAt: data.flowStartedAt,
        });
        for (const item of data.flowResponses) {
            await this.messengerMessageRepository.save({
                content: item.content,
                type: item.type,
                messageCreatedAt: item.createdAt,
                isStory: item.isStory,
                conversationId: conversation.id,
            });
        }
        const content = (_a = data.flowResponses.find((item) => item.isStory)) === null || _a === void 0 ? void 0 : _a.content;
        const story = await this.storyService.addStory(conversation.languageId, {
            content,
            country: data.user.country,
            channel,
            isSensitive: false,
            messengerConversationId: conversation.id,
            authorNickname: this.getNickname(data),
            communicatorId: data.senderId,
            firstName: (_b = data.user) === null || _b === void 0 ? void 0 : _b.firstName,
            lastName: (_c = data.user) === null || _c === void 0 ? void 0 : _c.lastName,
            ageByUser: (_d = data.user) === null || _d === void 0 ? void 0 : _d.age,
            genderByUser: (_e = data.user) === null || _e === void 0 ? void 0 : _e.gender,
            difficultyByUser: (_f = data.user) === null || _f === void 0 ? void 0 : _f.disability,
            userWantContact: data.shareUserInfo,
            conversationId: conversation.id,
        });
        conversation.storyId = story.id;
        await this.storyConversationService.setStoryId(conversation.id, story.id);
        return this.storyConversationService.findById(conversation.id);
    }
    async fetchFlowLanguage(lang) {
        if (!lang)
            return;
        return await this.languageEntityRepository.findOne({
            where: {
                code: lang,
            },
        });
    }
    getNickname(data) {
        if (data.shareUserInfo) {
            let nickname = data.user.firstName;
            if (data.user.lastName)
                nickname += ` ${data.user.lastName}`;
            return nickname;
        }
        return null;
    }
    async checkMessengerAvailability(storyId, commandName, channel) {
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'checkMessengerAvailability', ['conversation', 'recipient']);
        if ((story === null || story === void 0 ? void 0 : story.channel) !== channel) {
            throw new common_1.BadRequestException(shared_1.NO_STORY);
        }
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: commandName }, {
            senderId: story.recipient.communicatorId,
            storyId: story.id,
            pageId: story.conversation.serviceNumber,
        })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async sendMessengerChatMessage(dto, commandName, channel) {
        var _a, _b, _c, _d, _e, _f;
        const story = await this.storyService.checkThatStoryExist({ id: dto.storyId }, 'sendMessengerMessage', [
            'conversation',
            'conversation.language',
            'conversation.messengerMessages',
            'recipient',
        ]);
        if ((story === null || story === void 0 ? void 0 : story.channel) !== channel) {
            throw new common_1.BadRequestException(shared_1.NO_STORY);
        }
        console.log('--- commandName ---', commandName);
        console.log('--- data ---', JSON.stringify({
            senderId: story.recipient.communicatorId,
            message: dto.content,
            introduction: dto === null || dto === void 0 ? void 0 : dto.introduction,
            storyId: story.id,
            story: (_b = (_a = story.conversation) === null || _a === void 0 ? void 0 : _a.messengerMessages) === null || _b === void 0 ? void 0 : _b.find((message) => message.isStory).content,
            messengerConversationId: story.conversationId,
            language: (_c = story.conversation.language) === null || _c === void 0 ? void 0 : _c.code,
            pageId: story.conversation.serviceNumber,
        }));
        const response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: commandName }, {
            senderId: story.recipient.communicatorId,
            message: dto.content,
            introduction: dto === null || dto === void 0 ? void 0 : dto.introduction,
            storyId: story.id,
            story: (_e = (_d = story.conversation) === null || _d === void 0 ? void 0 : _d.messengerMessages) === null || _e === void 0 ? void 0 : _e.find((message) => message.isStory).content,
            messengerConversationId: story.conversationId,
            language: (_f = story.conversation.language) === null || _f === void 0 ? void 0 : _f.code,
            pageId: story.conversation.serviceNumber,
        })
            .pipe((0, operators_1.timeout)(60000))).catch((error) => {
            console.log('sendMessengerMessage', error);
            if (error.error) {
                throw new shared_1.CustomError(error === null || error === void 0 ? void 0 : error.message, error.error);
            }
        });
        if (Array.isArray(response)) {
            console.log('sendMessengerChatMessage - response', response);
            await Promise.all(response.map((item) => this.messengerMessageRepository.save({
                content: item.content,
                type: item.type,
                messageCreatedAt: item.createdAt,
                isStory: item.isStory,
                conversationId: story.conversationId,
                userId: story.userId,
            })));
            return { success: true };
        }
        else {
            return { success: false, status: response === null || response === void 0 ? void 0 : response.status };
        }
    }
    async saveMessengerResponse(data, channel) {
        var _a;
        const messengerConversation = await this.storyConversationService.findById(data.messengerConversationId, ['story']);
        if (((_a = messengerConversation === null || messengerConversation === void 0 ? void 0 : messengerConversation.story) === null || _a === void 0 ? void 0 : _a.channel) !== channel) {
            throw new microservices_2.RpcException(shared_1.CONVERSATION_NOT_FOUND);
        }
        await Promise.all(data.messages.map((message) => this.messengerMessageRepository.save({
            content: message.content,
            type: message.type,
            messageCreatedAt: message.createdAt,
            conversationId: messengerConversation.id,
            isStory: message.isStory,
        })));
        return {
            success: true,
        };
    }
    async findLastConversationByCommunicatorId(communicatorId) {
        return this.storyRecipientService.findLastEntryByCommunicatorId(communicatorId);
    }
    prepareNotificatonReasonText(data) {
        const reasonTexts = data.reasonTexts.join(', ');
        const { rationale } = data;
        return `${rationale ? reasonTexts : (0, helpers_2.removeLastDot)(reasonTexts)}${rationale ? '\n' : ''}${rationale ? `${(0, helpers_2.removeLastDot)(rationale)}` : ''}`;
    }
    async sendStoryStatus(story, messageType, reasonText) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.config.get('application.disableNotifications') ||
            (story.edited &&
                this.config.get('application.disableNotificationsAfterEdit')))
            return false;
        const messengerConversation = await this.storyConversationService.findById(story.conversationId, ['language']);
        const messengerType = story.channel === channel_constant_1.CHANNEL_CONSTANTS.MESSENGER
            ? 'Facebook'
            : (0, helpers_1.upperCaseFirst)(story.channel);
        console.log('cmd', `sendStoryStatus${messengerType}Notification`);
        await (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: `sendStoryStatus${messengerType}Notification` }, {
            language: (_c = (_b = (_a = story.conversation) === null || _a === void 0 ? void 0 : _a.language) === null || _b === void 0 ? void 0 : _b.code) !== null && _c !== void 0 ? _c : (_d = messengerConversation === null || messengerConversation === void 0 ? void 0 : messengerConversation.language) === null || _d === void 0 ? void 0 : _d.code,
            senderId: (_e = story.recipient) === null || _e === void 0 ? void 0 : _e.communicatorId,
            messageType,
            story: (_g = (_f = story.conversation) === null || _f === void 0 ? void 0 : _f.messengerMessages) === null || _g === void 0 ? void 0 : _g.find((message) => message.isStory).content,
            messengerConversationId: story.conversationId,
            reasonText,
            pageId: (_h = story.conversation) === null || _h === void 0 ? void 0 : _h.serviceNumber,
        })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout'))))
            .then(async (result) => {
            var _a;
            console.log(`result sendStoryStatus${messengerType}Notification`);
            await Promise.all((_a = result === null || result === void 0 ? void 0 : result.messages) === null || _a === void 0 ? void 0 : _a.map((message) => this.messengerMessageRepository.save({
                content: message.content,
                type: message.type,
                messageCreatedAt: message.createdAt,
                conversationId: messengerConversation.id,
                isStory: message.isStory,
            })));
        })
            .catch((error) => {
            console.log(`error sendStoryStatus${messengerType}Notification`, JSON.stringify(error));
        });
        return {
            success: true,
        };
    }
    async sendCommentNotificationToMessenger(comment, commandName) {
        var _a, _b;
        if (this.config.get('application.disableNotifications'))
            return false;
        const { language, conversation, recipient } = comment.story;
        if (!language || !conversation) {
            return;
        }
        const response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: commandName }, {
            language: language === null || language === void 0 ? void 0 : language.code,
            senderId: recipient.communicatorId,
            pageId: conversation.serviceNumber,
            organization: (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.user) === null || _a === void 0 ? void 0 : _a.organisation) === null || _b === void 0 ? void 0 : _b.name,
            reply: (0, helpers_1.prepareURL)(this.config.get('frontend.url'), 'story/details', comment.storyId),
        })
            .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
        await this.messengerMessageRepository.save({
            content: response.messages.content,
            type: response.messages.type,
            messageCreatedAt: response.messages.createdAt,
            conversationId: conversation.id,
            isStory: response.messages.isStory,
        });
    }
    async getMessengerMessagesByConversationId(conversationId) {
        const messages = await this.messengerMessageRepository.find({
            where: {
                conversationId: conversationId,
            },
            order: { id: 'ASC' },
        });
        return messages;
    }
};
exports.MessengerService = MessengerService;
exports.MessengerService = MessengerService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(6, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(7, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [language_repository_1.LanguageRepository,
        country_repository_1.CountryRepository,
        story_conversation_service_1.StoryConversationService,
        story_recipient_service_1.StoryRecipientService,
        messenger_message_repository_1.MessengerMessageRepository,
        story_service_1.StoryService,
        microservices_1.ClientProxy,
        config_1.ConfigService])
], MessengerService);
//# sourceMappingURL=messenger.service.js.map