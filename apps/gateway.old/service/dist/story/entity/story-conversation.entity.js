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
var StoryConversationEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryConversationEntity = void 0;
const typeorm_1 = require("typeorm");
const message_entity_1 = require("../../sms/entity/message.entity");
const messenger_message_entity_1 = require("../../messenger/entity/messenger-message.entity");
const ivrr_call_entity_1 = require("../../ivrr/entity/ivrr-call.entity");
const story_entity_1 = require("./story.entity");
const language_entity_1 = require("../../language/entity/language.entity");
let StoryConversationEntity = StoryConversationEntity_1 = class StoryConversationEntity {
    static saveMessengerConversation(payload) {
        var _a;
        return Object.assign(new messenger_message_entity_1.MessengerMessageEntity(), Object.assign(Object.assign({}, payload), { conversationId: payload.conversation.id, userId: (_a = payload === null || payload === void 0 ? void 0 : payload.user) === null || _a === void 0 ? void 0 : _a.id }));
    }
    static saveIvrrConversation(payload) {
        var _a;
        const payloadFiltered = Object.assign({}, payload);
        delete payloadFiltered.calls;
        const ivrrConversationEntity = Object.assign(new StoryConversationEntity_1(), Object.assign(Object.assign({}, payloadFiltered), { languageId: (_a = payload.language) === null || _a === void 0 ? void 0 : _a.id }));
        return ivrrConversationEntity;
    }
};
exports.StoryConversationEntity = StoryConversationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryConversationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], StoryConversationEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (lang) => lang.stories_lang),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], StoryConversationEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], StoryConversationEntity.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'service_number', type: 'varchar' }),
    __metadata("design:type", String)
], StoryConversationEntity.prototype, "serviceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'story_id', type: 'varchar' }),
    __metadata("design:type", String)
], StoryConversationEntity.prototype, "storyId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => story_entity_1.StoryEntity, (story) => story.conversation),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryConversationEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], StoryConversationEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'additional_info', type: 'varchar' }),
    __metadata("design:type", String)
], StoryConversationEntity.prototype, "additionalInfo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'started_at', type: 'datetime' }),
    __metadata("design:type", Date)
], StoryConversationEntity.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], StoryConversationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, (message) => message.conversation),
    __metadata("design:type", Array)
], StoryConversationEntity.prototype, "smsMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => messenger_message_entity_1.MessengerMessageEntity, (message) => message.conversation),
    __metadata("design:type", Array)
], StoryConversationEntity.prototype, "messengerMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ivrr_call_entity_1.IvrrCallEntity, (message) => message.conversation),
    __metadata("design:type", Array)
], StoryConversationEntity.prototype, "ivrrMessages", void 0);
exports.StoryConversationEntity = StoryConversationEntity = StoryConversationEntity_1 = __decorate([
    (0, typeorm_1.Entity)('story_communicator_conversation')
], StoryConversationEntity);
//# sourceMappingURL=story-conversation.entity.js.map