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
exports.FacebookMessengerController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const messenger_flow_schema_1 = require("../request/schema/messenger-flow.schema");
const messenger_service_1 = require("../service/messenger.service");
const shared_1 = require("@ourloop/shared");
const messenger_flow_dto_1 = require("../request/dto/messenger-flow.dto");
const swagger_1 = require("@nestjs/swagger");
const success_ro_1 = require("../../common/response/success.ro");
const user_response_dto_1 = require("../request/dto/user-response.dto");
const passport_1 = require("@nestjs/passport");
const send_message_schema_1 = require("../../sms/request/schema/send-message-schema");
const send_message_dto_1 = require("../../sms/request/dto/send-message.dto");
const swagger_2 = require("@nestjs/swagger");
const channel_constant_1 = require("../../common/constant/channel.constant");
const messenger_availability_ro_1 = require("../response/messenger-availability.ro");
const uuid_validation_pipe_1 = require("../../common/pipe/uuid-validation.pipe");
const messenger_user_data_mapper_1 = require("../mapper/messenger-user-data.mapper");
const story_service_1 = require("../../story/service/story.service");
const permission_decorator_1 = require("../../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../../auth/cerbos/permission.enum");
const permission_guard_1 = require("../../auth/cerbos/permission.guard");
let FacebookMessengerController = class FacebookMessengerController {
    constructor(messengerService, storyService) {
        this.messengerService = messengerService;
        this.storyService = storyService;
    }
    async saveMessengerFlowRecord(data) {
        return await this.messengerService.saveMessengerFlow(data, channel_constant_1.CHANNEL_CONSTANTS.MESSENGER);
    }
    async testInternal() {
        const result = await this.messengerService.testExternal();
        return { success: result };
    }
    async sendMessengerMessage(data) {
        await this.storyService.checkIfModeratorMessageCanBeSent(data.storyId);
        return this.messengerService.sendMessengerChatMessage(data, 'sendMessageToFacebookChat', channel_constant_1.CHANNEL_CONSTANTS.MESSENGER);
    }
    async saveMessengerResponse(data) {
        return await this.messengerService.saveMessengerResponse(data, channel_constant_1.CHANNEL_CONSTANTS.MESSENGER);
    }
    async findMessengerUserDetails(data) {
        const conversation = await this.messengerService.findLastConversationByCommunicatorId(data.senderId);
        return (0, messenger_user_data_mapper_1.messengerUserDataMapper)(conversation);
    }
    async checkMessengerAvailability(storyId) {
        return this.messengerService.checkMessengerAvailability(storyId, 'checkFacebookConversationAvailability', channel_constant_1.CHANNEL_CONSTANTS.MESSENGER);
    }
};
exports.FacebookMessengerController = FacebookMessengerController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveFacebookStory' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(messenger_flow_schema_1.messengerFlowDtoSChema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messenger_flow_dto_1.MessengerFlowRequestDto]),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "saveMessengerFlowRecord", null);
__decorate([
    (0, common_1.Get)('test-external'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "testInternal", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Send Facebook Messenger Message' }),
    (0, common_1.Post)('message'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.CREATE, permission_enum_1.CERBOS_RESOURCES.SOCIAL_MESSAGE),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(send_message_schema_1.sendMessageSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "sendMessengerMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveFacebookMessage' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_response_dto_1.UserResponseDto]),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "saveMessengerResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'findCommunicatorUserDetails' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "findMessengerUserDetails", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito'])),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: messenger_availability_ro_1.MessengerAvailabilityRO,
    }),
    (0, common_1.Get)('is-conversation-available/:storyId'),
    __param(0, (0, common_1.Param)('storyId', new uuid_validation_pipe_1.UuidValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacebookMessengerController.prototype, "checkMessengerAvailability", null);
exports.FacebookMessengerController = FacebookMessengerController = __decorate([
    (0, swagger_2.ApiTags)('Messenger'),
    (0, common_1.Controller)('messenger/facebook'),
    __metadata("design:paramtypes", [messenger_service_1.MessengerService,
        story_service_1.StoryService])
], FacebookMessengerController);
//# sourceMappingURL=facebook.controller.js.map