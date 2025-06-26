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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("../../story/entity/story.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const comment_vote_entity_1 = require("./comment-vote.entity");
const comment_translation_entity_1 = require("./comment-translation.entity");
const channel_constant_1 = require("../../common/constant/channel.constant");
const language_entity_1 = require("../../language/entity/language.entity");
const comment_reject_reason_entity_1 = require("./comment-reject-reason.entity");
const comment_recipient_entity_1 = require("./comment-recipient.entity");
const thematic_entity_1 = require("../../lexicon/entity/thematic.entity");
let CommentEntity = class CommentEntity {
};
exports.CommentEntity = CommentEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'story_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "storyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.StoryEntity, (story) => story.comments),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], CommentEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'published_at' }),
    __metadata("design:type", Date)
], CommentEntity.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'solution_proposed', type: 'boolean' }),
    __metadata("design:type", Boolean)
], CommentEntity.prototype, "solution_proposed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 's3_file_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "s3FileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_comment_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "parentCommentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'channel', type: 'enum', enum: channel_constant_1.CHANNEL_CONSTANTS }),
    __metadata("design:type", String)
], CommentEntity.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "rejectReasonLanguageId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (lang) => lang.comments_lang),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], CommentEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_translation_entity_1.CommentTranslationEntity, (translation) => translation.comment, { cascade: ['insert', 'update'] }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "translations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CommentEntity, (comment) => comment.children, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_comment_id' }),
    __metadata("design:type", CommentEntity)
], CommentEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CommentEntity, (subComment) => subComment.parent),
    __metadata("design:type", Array)
], CommentEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_vote_entity_1.CommentVoteEntity, (vote) => vote.comment, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "votes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_reject_reason_entity_1.CommentRejectReasonEntity, (rejectReason) => rejectReason.comment, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "rejectReasons", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_rationale', type: 'text' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "rejectRationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recipient_id', type: 'int' }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "recipientId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => comment_recipient_entity_1.CommentRecipientEntity, (recipient) => recipient.comment),
    (0, typeorm_1.JoinColumn)({ name: 'recipient_id' }),
    __metadata("design:type", comment_recipient_entity_1.CommentRecipientEntity)
], CommentEntity.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => thematic_entity_1.ThematicEntity, { onDelete: 'CASCADE', cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'story_comment_thematic',
        joinColumns: [{ name: 'story_comment_id' }],
        inverseJoinColumns: [{ name: 'thematic_id' }],
    }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "thematics", void 0);
exports.CommentEntity = CommentEntity = __decorate([
    (0, typeorm_1.Entity)('story_comment')
], CommentEntity);
//# sourceMappingURL=comment.entity.js.map