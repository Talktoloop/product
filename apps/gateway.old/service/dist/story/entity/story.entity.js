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
exports.StoryEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../category/entity/category.entity");
const difficulty_entity_1 = require("../../lexicon/entity/difficulty.entity");
const organisation_entity_1 = require("../../organisation/entity/organisation.entity");
const thematic_entity_1 = require("../../lexicon/entity/thematic.entity");
const maternity_status_entity_1 = require("../../lexicon/entity/maternity-status.entity");
const story_view_entity_1 = require("./story-view.entity");
const story_vote_entity_1 = require("./story-vote.entity");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const story_translation_entity_1 = require("./story-translation.entity");
const language_entity_1 = require("../../language/entity/language.entity");
const channel_constant_1 = require("../../common/constant/channel.constant");
const story_conversation_entity_1 = require("./story-conversation.entity");
const marked_as_sensitive_constant_1 = require("../../common/constant/marked-as-sensitive.constant");
const country_entity_1 = require("../../country/entity/country.entity");
const story_reject_reason_entity_1 = require("./story-reject-reason.entity");
const story_recipient_entity_1 = require("./story-recipient.entity");
const story_administrative_data_entity_1 = require("./story-administrative-data.entity");
const shared_1 = require("@ourloop/shared");
let StoryEntity = class StoryEntity {
};
exports.StoryEntity = StoryEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], StoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (lang) => lang.stories_lang),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], StoryEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status_changed_by', type: 'varchar' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "statusChangedByUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'place', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], StoryEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'string' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'varchar' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'country_id', type: 'int' }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "rejectReasonLanguageId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StoryEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'published_at' }),
    __metadata("design:type", Date)
], StoryEntity.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'conversation_id', type: 'int' }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "conversationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_manager_note', type: 'varchar' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "caseManagerNote", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'recipient_id', type: 'integer' }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "recipientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'assigned_moderator_id', type: 'varchar' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "assigned_moderator_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'case_manager_returned_at' }),
    __metadata("design:type", Date)
], StoryEntity.prototype, "caseManagerReturnedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'edited', type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryEntity.prototype, "edited", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.CountryEntity, (country) => country.stories),
    (0, typeorm_1.JoinColumn)({ name: 'country_id' }),
    __metadata("design:type", country_entity_1.CountryEntity)
], StoryEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => story_conversation_entity_1.StoryConversationEntity, (conversation) => conversation.story),
    (0, typeorm_1.JoinColumn)({ name: 'conversation_id' }),
    __metadata("design:type", story_conversation_entity_1.StoryConversationEntity)
], StoryEntity.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => story_recipient_entity_1.StoryRecipientEntity, (recipient) => recipient.story),
    (0, typeorm_1.JoinColumn)({ name: 'recipient_id' }),
    __metadata("design:type", story_recipient_entity_1.StoryRecipientEntity)
], StoryEntity.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.stories, { onDelete: 'SET NULL', eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'assigned_moderator_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryEntity.prototype, "assignedModerator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_translation_entity_1.StoryTranslationEntity, (translation) => translation.story, {
        cascade: ['insert', 'update'],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "translations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_administrative_data_entity_1.StoryAdministrativeDataEntity, (administrativeArea) => administrativeArea.story, {
        cascade: ['insert', 'update'],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "storyAdministrativeData", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.CategoryEntity, { onDelete: 'CASCADE', cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'story_category',
        joinColumns: [{ name: 'story_id' }],
        inverseJoinColumns: [{ name: 'category_id' }],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => difficulty_entity_1.DifficultyEntity, { onDelete: 'CASCADE', cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'story_difficulty',
        joinColumns: [{ name: 'story_id' }],
        inverseJoinColumns: [{ name: 'difficulty_id' }],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "difficulties", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => organisation_entity_1.OrganisationEntity, { onDelete: 'CASCADE', cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'story_organisation',
        joinColumns: [{ name: 'story_id' }],
        inverseJoinColumns: [{ name: 'organisation_id' }],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "organisations", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => thematic_entity_1.ThematicEntity, { onDelete: 'CASCADE', cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'story_thematic',
        joinColumns: [{ name: 'story_id' }],
        inverseJoinColumns: [{ name: 'thematic_id' }],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "thematics", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => maternity_status_entity_1.MaternityStatusEntity, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'story_pregnancy_status',
        joinColumns: [{ name: 'story_id' }],
        inverseJoinColumns: [{ name: 'pregnancy_status_id' }],
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "maternityStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_view_entity_1.StoryViewEntity, (view) => view.story, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_vote_entity_1.StoryVoteEntity, (vote) => vote.story, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "votes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.story, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "commentsRel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', select: false, insert: false, readonly: true }),
    __metadata("design:type", Number)
], StoryEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.story_users),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_rationale', type: 'text' }),
    __metadata("design:type", String)
], StoryEntity.prototype, "rejectRationale", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isSensitive', type: 'tinyint' }),
    __metadata("design:type", Boolean)
], StoryEntity.prototype, "isSensitive", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_urgent', type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryEntity.prototype, "isUrgent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'marked_as_sensitive_by_role',
        type: 'enum',
        enum: marked_as_sensitive_constant_1.MARKED_AS_SENSITIVE_BY,
    }),
    __metadata("design:type", String)
], StoryEntity.prototype, "markedAsSensitiveByRole", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'marked_as_sensitive_by_user_id',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], StoryEntity.prototype, "markedAsSensitiveByUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'channel', type: 'enum', enum: channel_constant_1.CHANNEL_CONSTANTS }),
    __metadata("design:type", String)
], StoryEntity.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_reject_reason_entity_1.StoryRejectReasonEntity, (rejectReason) => rejectReason.story, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], StoryEntity.prototype, "rejectReasons", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({
        name: 'marked_as_sensitive_by_user_id',
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.markedAsSensitiveBy),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryEntity.prototype, "markedAsSensitiveBy", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({
        name: 'status_changed_by',
    }),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.storiesStatusChangedBy),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryEntity.prototype, "statusChangedBy", void 0);
exports.StoryEntity = StoryEntity = __decorate([
    (0, typeorm_1.Entity)('story')
], StoryEntity);
//# sourceMappingURL=story.entity.js.map