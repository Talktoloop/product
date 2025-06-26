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
var IvrrCallEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvrrCallEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entity/user.entity");
const story_conversation_entity_1 = require("../../story/entity/story-conversation.entity");
let IvrrCallEntity = IvrrCallEntity_1 = class IvrrCallEntity {
    static createFrom(payload) {
        var _a;
        return Object.assign(new IvrrCallEntity_1(), Object.assign(Object.assign({}, payload), { conversationId: payload.conversation.id, userId: (_a = payload === null || payload === void 0 ? void 0 : payload.user) === null || _a === void 0 ? void 0 : _a.id }));
    }
};
exports.IvrrCallEntity = IvrrCallEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], IvrrCallEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'twilio_call_sid',
    }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "twilioCallSid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        name: 's3_file_id',
    }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "s3FileId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'percentage_level_of_listening_call',
        default: 0,
    }),
    __metadata("design:type", Number)
], IvrrCallEntity.prototype, "percentageLevelOfListeningCall", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'twilio_flow_xml',
    }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "twilioFlowXml", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'content',
    }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'comment_id',
    }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'transcription_status',
    }),
    __metadata("design:type", Number)
], IvrrCallEntity.prototype, "transcriptionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'conversation_id',
    }),
    __metadata("design:type", Number)
], IvrrCallEntity.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        name: 'is_story',
        default: false,
    }),
    __metadata("design:type", Boolean)
], IvrrCallEntity.prototype, "isStory", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        name: 'is_moderator_call',
        default: false,
    }),
    __metadata("design:type", Boolean)
], IvrrCallEntity.prototype, "isModeratorCall", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        name: 'call_date',
    }),
    __metadata("design:type", Date)
], IvrrCallEntity.prototype, "callDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'recording_duration',
    }),
    __metadata("design:type", Number)
], IvrrCallEntity.prototype, "recordingDuration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], IvrrCallEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_conversation_entity_1.StoryConversationEntity, (entity) => entity.ivrrMessages),
    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),
    __metadata("design:type", story_conversation_entity_1.StoryConversationEntity)
], IvrrCallEntity.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'string' }),
    __metadata("design:type", String)
], IvrrCallEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.messages),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], IvrrCallEntity.prototype, "user", void 0);
exports.IvrrCallEntity = IvrrCallEntity = IvrrCallEntity_1 = __decorate([
    (0, typeorm_1.Entity)('ivrr_call')
], IvrrCallEntity);
//# sourceMappingURL=ivrr-call.entity.js.map