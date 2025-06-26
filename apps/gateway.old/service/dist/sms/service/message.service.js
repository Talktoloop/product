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
var MessageService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const message_repository_1 = require("../repository/message.repository");
const message_entity_1 = require("../entity/message.entity");
const shared_1 = require("@ourloop/shared");
const language_repository_1 = require("../../language/language.repository");
const story_service_1 = require("../../story/service/story.service");
const channel_constant_1 = require("../../common/constant/channel.constant");
const smsSplitter = __importStar(require("split-sms"));
const config_1 = require("@nestjs/config");
const story_moderator_service_1 = require("../../story/service/story-moderator.service");
const di_constant_1 = require("../../common/constant/di.constant");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const default_1 = require("../../config/default");
const twilio = __importStar(require("twilio"));
const helpers_1 = require("../../common/helpers");
const country_constant_1 = require("../../common/constant/country.constant");
let MessageService = MessageService_1 = class MessageService {
    constructor(config, messageRepository, languageRepository, storyService, storyModeratorService, clientProxy, twilio) {
        this.config = config;
        this.messageRepository = messageRepository;
        this.languageRepository = languageRepository;
        this.storyService = storyService;
        this.storyModeratorService = storyModeratorService;
        this.clientProxy = clientProxy;
        this.twilio = twilio;
        this.logger = new common_1.Logger(MessageService_1.name);
    }
    static shortenContent(content, maxLength) {
        if (content.length <= maxLength) {
            return content;
        }
        const dotsSlot = 5;
        maxLength -= dotsSlot;
        const regex = new RegExp(`^(.{${maxLength}}[^\\s]*).*`, 'i');
        const short = content.replace(regex, '$1');
        if (short.length <= maxLength) {
            return `${short}...`;
        }
        const shortAsArray = short.split(' ');
        shortAsArray.pop();
        return `${shortAsArray.join(' ')}...`;
    }
    validateMessageLength(details, numberOfMessages, key) {
        if (details.parts.length > numberOfMessages) {
            throw new shared_1.CustomError(shared_1.SMS_MESSAGE_IS_TOO_LONG_ERROR, {
                error: `Message is to long for chareter set "${details.characterSet}"`,
                key,
                maxLength: details.parts[0].length,
            });
        }
    }
    prepareListOfMessages(messages, data) {
        for (const part of data.parts) {
            messages.push(part.content.trim());
        }
        return messages;
    }
    prepareMessages(story, data) {
        var _a;
        const originalContent = (_a = story.translations.find((translation) => translation.languageId === story.languageId)) === null || _a === void 0 ? void 0 : _a.content;
        let details;
        let messages = [];
        if (data.introduction && originalContent) {
            const storyLength = default_1.staticConfig.smsMessageLength - data.introduction.length;
            let short;
            let introduction = data.introduction;
            if (storyLength > 0) {
                short = MessageService_1.shortenContent(originalContent, storyLength);
                introduction += `: ${short}`;
            }
            details = smsSplitter.split(introduction);
            this.validateMessageLength(details, 1, 'introduction');
            messages = this.prepareListOfMessages(messages, details);
        }
        details = smsSplitter.split(data.content);
        this.validateMessageLength(details, 2, 'content');
        return this.prepareListOfMessages(messages, details);
    }
    async checkPhoneAvailability(provider, story) {
        var _a, _b, _c;
        return (0, rxjs_1.lastValueFrom)(this.clientProxy
            .send({ cmd: `${provider}_checkPhoneAvailability` }, {
            phone: (_a = story.recipient) === null || _a === void 0 ? void 0 : _a.phone,
            phoneStoryId: story.id,
            loopPhone: (_b = story.conversation) === null || _b === void 0 ? void 0 : _b.serviceNumber,
            country: (_c = story.country) === null || _c === void 0 ? void 0 : _c.code,
        })
            .pipe((0, rxjs_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
            throw new shared_1.CustomError(error.message, error.error);
        });
    }
    async saveMessages(conversation, data, languageId) {
        const messages = [];
        let languageOfMessage;
        let story;
        if (languageId) {
            languageOfMessage = await this.languageRepository.findOne({
                where: { id: languageId },
            });
        }
        for (const message of data.messages) {
            if (message.language && !languageOfMessage) {
                languageOfMessage = await this.languageRepository.findOne({
                    where: { code: message.language },
                });
            }
            if (!!message.isStory) {
                story = await this.storyService.addStory(languageOfMessage.id, {
                    isSensitive: data.isSensitive,
                    content: message.content,
                    country: data.country,
                    channel: channel_constant_1.CHANNEL_CONSTANTS.SMS,
                    phone: data.userPhoneNumber,
                    conversationId: conversation.id,
                    userWantContact: data.contactAccepted,
                });
            }
            messages.push(new message_entity_1.MessageEntity({
                conversationId: conversation.id,
                isUser: message.sender === shared_1.SENDER_TYPE_CONSTANT.USER ||
                    data.moderatorId !== undefined,
                createdAt: new Date(message.timestamp),
                content: MessageService_1.shortenContent(message.content, message_entity_1.MESSAGE_MAX_LENGTH),
                isStory: !!message.isStory,
                userId: data.moderatorId && message.sender === shared_1.SENDER_TYPE_CONSTANT.LOOP
                    ? data.moderatorId
                    : null,
            }));
        }
        if (data.moderatorId) {
            await this.storyModeratorService.setStoryStatus(data.moderatorId, conversation.story.id, this.selectStoryStatus(conversation.story.status, data.messages.pop()));
        }
        const result = await this.messageRepository.save(messages);
        return { messages: result, story };
    }
    selectStoryStatus(status, message) {
        if (!message && status === shared_1.STORY_STATUS.AWAITING_REPLAY) {
            return shared_1.STORY_STATUS.ISSUER_DID_NOT_REPLIED;
        }
        return (message === null || message === void 0 ? void 0 : message.sender) === shared_1.SENDER_TYPE_CONSTANT.USER
            ? shared_1.STORY_STATUS.ISSUER_REPLIED
            : shared_1.STORY_STATUS.AWAITING_REPLAY;
    }
    async getSmsMessagesByConversationId(conversationId) {
        const messages = await this.messageRepository.find({
            where: {
                conversationId: conversationId,
            },
            relations: ['user'],
            order: { id: 'ASC' },
        });
        return messages;
    }
    clearPhone(phone) {
        return (0, helpers_1.replaceArray)(phone, [' ', '-'], '');
    }
    async checkCountryCodeAndProvider(phone) {
        phone = this.clearPhone(phone);
        let provider;
        let countryCode;
        switch (phone.replace('+', '').substring(0, 5)) {
            case `${shared_1.COUNTRY_PREFIX.zm}96`:
            case `${shared_1.COUNTRY_PREFIX.zm}76`:
                provider = shared_1.MESSAGE_PROVIDER_CONSTANT.MTN;
                countryCode = country_constant_1.COUNTRY.ZAMBIA.toLowerCase();
                break;
            case `${shared_1.COUNTRY_PREFIX.zm}97`:
            case `${shared_1.COUNTRY_PREFIX.zm}77`:
                provider = shared_1.MESSAGE_PROVIDER_CONSTANT.AIRTEL;
                countryCode = country_constant_1.COUNTRY.ZAMBIA.toLowerCase();
                break;
            case `${shared_1.COUNTRY_PREFIX.zm}75`:
            case `${shared_1.COUNTRY_PREFIX.zm}95`:
                provider = shared_1.MESSAGE_PROVIDER_CONSTANT.ZAMTEL;
                countryCode = country_constant_1.COUNTRY.ZAMBIA.toLowerCase();
                break;
            default:
                if (phone.replace('+', '').substring(0, 2) === shared_1.COUNTRY_PREFIX.ph) {
                    provider = shared_1.MESSAGE_PROVIDER_CONSTANT.GLOBE;
                    countryCode = country_constant_1.COUNTRY.PHILIPPINES.toLowerCase();
                }
                else {
                    provider = shared_1.MESSAGE_PROVIDER_CONSTANT.TWILIO;
                }
                break;
        }
        if (!countryCode) {
            const phoneDetails = await this.twilio.lookups.v1
                .phoneNumbers(phone)
                .fetch()
                .catch((error) => {
                this.logger.error(error);
                throw new common_1.BadRequestException(error === null || error === void 0 ? void 0 : error.message);
            });
            countryCode = phoneDetails.countryCode.toLowerCase();
        }
        return { phone, provider, countryCode };
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = MessageService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => story_service_1.StoryService))),
    __param(5, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(6, (0, common_1.Inject)(twilio.Twilio)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        message_repository_1.MessageRepository,
        language_repository_1.LanguageRepository,
        story_service_1.StoryService,
        story_moderator_service_1.StoryModeratorService,
        microservices_1.ClientProxy, twilio.Twilio])
], MessageService);
//# sourceMappingURL=message.service.js.map