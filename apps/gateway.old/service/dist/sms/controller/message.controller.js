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
var MessageController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("../service/message.service");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const success_ro_1 = require("../../common/response/success.ro");
const send_message_schema_1 = require("../request/schema/send-message-schema");
const send_message_dto_1 = require("../request/dto/send-message.dto");
const story_service_1 = require("../../story/service/story.service");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const passport_1 = require("@nestjs/passport");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("@ourloop/shared");
const save_messages_schema_1 = require("../request/schema/save-messages-schema");
const phone_availability_ro_1 = require("../response/phone-availability.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const channel_constant_1 = require("../../common/constant/channel.constant");
const operators_1 = require("rxjs/operators");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const textit_outgoing_message_dto_1 = require("../request/dto/textit-outgoing-message.dto");
const textit_outgoing_message_schema_1 = require("../request/schema/textit-outgoing-message-schema");
const textit_ingoing_message_schema_1 = require("../request/schema/textit-ingoing-message-schema");
const textit_ingoing_message_dto_1 = require("../request/dto/textit-ingoing-message.dto");
const textit_provider_1 = require("../../common/provider/textit-provider");
const finished_textit_flow_schema_1 = require("../request/schema/finished-textit-flow-schema");
const finished_textit_flow_dto_1 = require("../request/dto/finished-textit-flow.dto");
const shared_2 = require("@ourloop/shared");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
let MessageController = MessageController_1 = class MessageController {
    constructor(messageService, storyService, clientProxy, config, textItProvider) {
        this.messageService = messageService;
        this.storyService = storyService;
        this.clientProxy = clientProxy;
        this.config = config;
        this.textItProvider = textItProvider;
        this.logger = new common_1.Logger(MessageController_1.name);
    }
    async sendSMSMessage(user, data) {
        var _a, _b;
        await this.storyService.checkIfModeratorMessageCanBeSent(data.storyId);
        const story = await this.storyService.checkThatStoryExist({ id: data.storyId }, 'sendSMSToUser', [
            'recipient',
            'translations',
            'conversation',
            'country',
            'conversation.smsMessages',
        ]);
        if (!story.conversation) {
            throw new common_1.BadRequestException(shared_1.CONVERSATION_NOT_FOUND);
        }
        if (story.recipient.userWantContact === false) {
            throw new common_1.BadRequestException(shared_1.USER_HAS_NOT_ALLOWED_CONTACT_PERMISSION_ERROR);
        }
        const messages = this.messageService.prepareMessages(story, data);
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
                .send({ cmd: `${story.conversation.provider}_sendChatSMS` }, {
                moderatorId: user.id,
                clientPhone: (_a = story.recipient) === null || _a === void 0 ? void 0 : _a.phone,
                providerPhone: story.conversation.serviceNumber,
                provider: story.conversation.provider,
                messages,
                country: (_b = story.country) === null || _b === void 0 ? void 0 : _b.code,
                storyId: story.id,
            })
                .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                throw new shared_1.CustomError(error.message, error.error);
            });
            return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: !!(response === null || response === void 0 ? void 0 : response.success) });
        }
        catch (error) {
            throw error;
        }
    }
    async saveMessages(data) {
        const story = await this.storyService.checkThatStoryExist({ id: data.storyId }, 'saveMessages', [
            'translations',
            'conversation',
            'conversation.story',
            'conversation.smsMessages',
            'conversation.language',
            'recipient',
        ]);
        if (!story.conversation) {
            throw new common_1.BadRequestException(shared_1.CONVERSATION_NOT_FOUND);
        }
        await this.messageService.saveMessages(story.conversation, data, story.conversation.languageId);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: true });
    }
    async checkPhoneAvailability(storyId) {
        var _a, _b;
        const story = await this.storyService.checkThatStoryExist({ id: storyId }, 'checkPhoneAvailability', ['conversation', 'conversation.smsMessages', 'country', 'recipient']);
        if (!story || story.channel !== channel_constant_1.CHANNEL_CONSTANTS.SMS) {
            throw new shared_1.CustomError(shared_1.NO_STORY, {
                error: 'Story ID does not exist',
            });
        }
        if (((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.userWantContact) === false) {
            return { type: shared_1.PHONE_BLOCKERS_TYPE.NO_CONTACT, storyId: null };
        }
        const provider = (_b = story.conversation) === null || _b === void 0 ? void 0 : _b.provider;
        if (!provider) {
            throw new shared_1.CustomError(shared_1.PROVIDER_NOT_FOUND, {
                error: 'No provider for removeMessagesFromProviderAndCache',
            });
        }
        return this.messageService.checkPhoneAvailability(provider, story);
    }
    async finishedTextItFLow(data) {
        await (0, shared_2.setDelay)(60000);
        const details = await this.messageService.checkCountryCodeAndProvider(data.to.split('tel:')[1]);
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.clientProxy
                .send({ cmd: `${details.provider}_removeTextItFlow` }, {
                clientPhone: details.phone,
                providerPhone: this.messageService.clearPhone(data.from),
                provider: details.provider,
                country: details.countryCode,
            })
                .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                throw new shared_1.CustomError(error.message, error.error);
            });
            return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, response);
        }
        catch (error) {
            throw error;
        }
    }
    async sendTextItMessage(data) {
        this.logger.debug('sendTextItMessage - data', JSON.stringify(data));
        const details = await this.messageService.checkCountryCodeAndProvider(data.to);
        try {
            const result = await (0, rxjs_1.lastValueFrom)(this.clientProxy
                .send({ cmd: `${details.provider}_sendTextItMessage` }, {
                clientPhone: details.phone,
                providerPhone: this.messageService.clearPhone(data.from),
                provider: details.provider,
                message: data.text,
                country: details.countryCode,
            })
                .pipe((0, operators_1.timeout)(this.config.get('application.communicationTimeout')))).catch((error) => {
                this.logger.debug('sendTextItMessage - error', error);
            });
            this.logger.debug('sendTextItMessage - result', result);
            return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, { success: true });
        }
        catch (error) {
            throw error;
        }
    }
    async notifyTextItAboutNewMessage(data) {
        this.logger.debug('notifyTextItAboutNewMessage', JSON.stringify(data));
        await this.textItProvider.sendUserMessage(data);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: true,
        });
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Send SMS Message' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.CREATE, permission_enum_1.CERBOS_RESOURCES.SOCIAL_MESSAGE),
    (0, common_1.Post)('message'),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(send_message_schema_1.sendMessageSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendSMSMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveMessages' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(save_messages_schema_1.saveMessagesSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.SMSConversationModel]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "saveMessages", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito'])),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: phone_availability_ro_1.PhoneAvailabilityRO,
    }),
    (0, common_1.Get)('is-phone-available/:storyId'),
    __param(0, (0, common_1.Param)('storyId', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "checkPhoneAvailability", null);
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Post)('textit-finished-flow'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(finished_textit_flow_schema_1.finishedTextItFlowSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [finished_textit_flow_dto_1.FinishedTextItFlowDTO]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "finishedTextItFLow", null);
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, common_1.Post)('textit-message'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(textit_outgoing_message_schema_1.TestItOutgoingMessageSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [textit_outgoing_message_dto_1.TextItOutgoingMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendTextItMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'notifyTextItAboutNewMessage' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(textit_ingoing_message_schema_1.testItIngoingMessageSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [textit_ingoing_message_dto_1.TextItIngoingMessageDTO]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "notifyTextItAboutNewMessage", null);
exports.MessageController = MessageController = MessageController_1 = __decorate([
    (0, swagger_1.ApiTags)('SMS'),
    (0, common_1.Controller)('sms'),
    __param(2, (0, common_1.Inject)(shared_1.DI_CONSTANTS.CLIENT_PROXY)),
    __param(3, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __param(4, (0, common_1.Inject)(shared_1.DI_CONSTANTS.TEXTIT)),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        story_service_1.StoryService,
        microservices_1.ClientProxy,
        config_1.ConfigService,
        textit_provider_1.TextIt])
], MessageController);
//# sourceMappingURL=message.controller.js.map