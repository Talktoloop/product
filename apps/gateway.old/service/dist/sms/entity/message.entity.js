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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEntity = exports.MESSAGE_MAX_LENGTH = void 0;
const typeorm_1 = require("typeorm");
const story_conversation_entity_1 = require("../../story/entity/story-conversation.entity");
const user_entity_1 = require("../../user/entity/user.entity");
exports.MESSAGE_MAX_LENGTH = 640;
let MessageEntity = class MessageEntity {
    constructor(data = {}) {
        this.content = data.content;
        this.isPinned = data.isPinned;
        this.isStory = data.isStory;
        this.conversationId = data.conversationId;
        this.isUser = data.isUser;
        this.userId = data.userId;
        this.createdAt = data.createdAt;
    }
};
exports.MessageEntity = MessageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], MessageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_user', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "isUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conversation_id', type: 'int' }),
    __metadata("design:type", Number)
], MessageEntity.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_conversation_entity_1.StoryConversationEntity, (conversation) => conversation.smsMessages),
    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),
    __metadata("design:type", story_conversation_entity_1.StoryConversationEntity)
], MessageEntity.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: exports.MESSAGE_MAX_LENGTH }),
    __metadata("design:type", String)
], MessageEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        name: 'is_pinned',
        default: false,
    }),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "isPinned", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'string' }),
    __metadata("design:type", String)
], MessageEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.messages),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], MessageEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        name: 'is_story',
        default: false,
    }),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "isStory", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], MessageEntity.prototype, "createdAt", void 0);
exports.MessageEntity = MessageEntity = __decorate([
    (0, typeorm_1.Entity)('message'),
    __metadata("design:paramtypes", [Object])
], MessageEntity);
//# sourceMappingURL=message.entity.js.map