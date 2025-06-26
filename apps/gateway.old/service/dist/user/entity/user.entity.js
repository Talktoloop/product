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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const organisation_entity_1 = require("../../organisation/entity/organisation.entity");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const story_entity_1 = require("../../story/entity/story.entity");
const comment_vote_entity_1 = require("../../comment/entity/comment-vote.entity");
const story_vote_entity_1 = require("../../story/entity/story-vote.entity");
const language_entity_1 = require("../../language/entity/language.entity");
const message_entity_1 = require("../../sms/entity/message.entity");
const story_historical_translation_entity_1 = require("../../story/entity/story-historical-translation.entity");
const organisation_application_entity_1 = require("./organisation-application.entity");
const user_token_entity_1 = require("../../subscription/entity/user-token.entity");
const user_export_csv_activity_entity_1 = require("./user-export-csv-activity.entity");
const subscription_application_entity_1 = require("../../subscription/entity/subscription-application.entity");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 100 }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nickname', type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_enabled', type: 'boolean' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isEnabled", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'notifications', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "reminders", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hide_last_name', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "hideLastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'organisation_id', type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "organisation_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'optin_marketing', type: 'boolean', default: 'false' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "optin_marketing", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'terms_of_service_id', type: 'smallint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "termsOfServiceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'community_guidelines_id', type: 'smallint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "communityGuidelinesId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'privacy_policy_id', type: 'smallint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "privacyPolicyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'consents_date' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "consentsDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'account_status', type: 'varchar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "accountStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_activity', type: 'datetime' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "lastActivity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'invitation_date', type: 'datetime' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "invitationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'planned_deletion_date' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "plannedDeletionDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity, (user) => user.invitations),
    (0, typeorm_1.JoinColumn)({ name: 'invited_by' }),
    __metadata("design:type", UserEntity)
], UserEntity.prototype, "invitedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.assignedModerator),
    __metadata("design:type", Array)
], UserEntity.prototype, "stories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserEntity, (user) => user.invitedBy),
    __metadata("design:type", Array)
], UserEntity.prototype, "invitations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registration_date', type: 'datetime' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "registrationDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organisation_entity_1.OrganisationEntity, (organisation) => organisation.users),
    (0, typeorm_1.JoinColumn)({ name: 'organisation_id' }),
    __metadata("design:type", organisation_entity_1.OrganisationEntity)
], UserEntity.prototype, "organisation", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organisation_application_entity_1.OrganisationApplicationEntity, (organisationApplication) => organisationApplication.user),
    __metadata("design:type", organisation_application_entity_1.OrganisationApplicationEntity)
], UserEntity.prototype, "organisationApplication", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, (message) => message.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "story_users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_historical_translation_entity_1.StoryHistoricalTranslationEntity, (historicalTranslation) => historicalTranslation.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "historicalTranslations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_vote_entity_1.CommentVoteEntity, (commentVote) => commentVote.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "commentVotes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_vote_entity_1.StoryVoteEntity, (storyVote) => storyVote.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "storyVotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', type: 'int' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (language) => language.users),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], UserEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.markedAsSensitiveBy),
    __metadata("design:type", Array)
], UserEntity.prototype, "markedAsSensitiveBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.statusChangedBy),
    __metadata("design:type", Array)
], UserEntity.prototype, "storiesStatusChangedBy", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_token_entity_1.UserTokenEntity, (userToken) => userToken.user),
    __metadata("design:type", user_token_entity_1.UserTokenEntity)
], UserEntity.prototype, "subscriptionToken", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_export_csv_activity_entity_1.UserExportCsvActivityEntity, (exportCsvActivity) => exportCsvActivity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "exportCsvActivities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_application_entity_1.SubscriptionApplicationEntity, (subscriptionApplication) => subscriptionApplication.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriptionApplication", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map