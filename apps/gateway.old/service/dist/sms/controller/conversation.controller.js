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
exports.ConversationController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const story_conversation_service_1 = require("../../story/service/story-conversation.service");
const message_service_1 = require("../service/message.service");
const microservices_1 = require("@nestjs/microservices");
const save_conversation_schema_1 = require("../request/schema/save-conversation-schema");
const conversation_ro_1 = require("../../common/response/conversation.ro");
const class_transformer_1 = require("class-transformer");
const story_moderator_service_1 = require("../../story/service/story-moderator.service");
const language_service_1 = require("../../language/language.service");
let ConversationController = class ConversationController {
    constructor(storyConversationService, messageService, storyModeratorService, languageService) {
        this.storyConversationService = storyConversationService;
        this.messageService = messageService;
        this.storyModeratorService = storyModeratorService;
        this.languageService = languageService;
    }
    async saveMessages(data) {
        var _a, _b, _c;
        let conversation;
        if (data.uuid) {
            conversation = await this.storyConversationService.findByUUID(data.uuid);
        }
        if (conversation) {
            return (0, class_transformer_1.plainToClass)(conversation_ro_1.ConversationRO, conversation);
        }
        await this.storyModeratorService.changeStoryStatus(shared_1.STORY_STATUS.AWAITING_REPLAY, shared_1.STORY_STATUS.ISSUER_DID_NOT_REPLIED);
        const language = await this.languageService.getLanguageByCode((_a = data.messages[0]) === null || _a === void 0 ? void 0 : _a.language);
        conversation = await this.storyConversationService.saveConversation({
            serviceNumber: data.loopPhoneNumber,
            createdAt: new Date((_b = data.messages[0]) === null || _b === void 0 ? void 0 : _b.timestamp),
            storyId: data.storyId,
            provider: (_c = data.messages[0]) === null || _c === void 0 ? void 0 : _c.provider,
            languageId: language === null || language === void 0 ? void 0 : language.id,
            uuid: data.uuid,
        });
        const { story } = await this.messageService.saveMessages(conversation, data);
        await this.storyConversationService.setStoryId(conversation.id, story === null || story === void 0 ? void 0 : story.id);
        return (0, class_transformer_1.plainToClass)(conversation_ro_1.ConversationRO, conversation);
    }
};
exports.ConversationController = ConversationController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'saveConversation' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(save_conversation_schema_1.saveConversationSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_1.SMSConversationModel]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "saveMessages", null);
exports.ConversationController = ConversationController = __decorate([
    (0, common_1.Controller)('conversation'),
    __metadata("design:paramtypes", [story_conversation_service_1.StoryConversationService,
        message_service_1.MessageService,
        story_moderator_service_1.StoryModeratorService,
        language_service_1.LanguageService])
], ConversationController);
//# sourceMappingURL=conversation.controller.js.map