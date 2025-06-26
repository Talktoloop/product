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
exports.LanguageEntity = void 0;
const typeorm_1 = require("typeorm");
const story_translation_entity_1 = require("../../story/entity/story-translation.entity");
const comment_translation_entity_1 = require("../../comment/entity/comment-translation.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const story_entity_1 = require("../../story/entity/story.entity");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const provider_enum_1 = require("../interface/provider.enum");
const case_manager_language_entity_1 = require("../../case-manager/entity/case-manager-language.entity");
const story_conversation_entity_1 = require("../../story/entity/story-conversation.entity");
const country_entity_1 = require("../../country/entity/country.entity");
let LanguageEntity = class LanguageEntity {
};
exports.LanguageEntity = LanguageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], LanguageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_default', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], LanguageEntity.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], LanguageEntity.prototype, "visible", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider', type: 'varchar' }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alternative_provider', type: 'varchar' }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "alternativeProvider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code', type: 'varchar', length: 2 }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transcribe_lang', type: 'varchar', length: 2 }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "transcribeLang", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dialect', type: 'varchar', length: 2, nullable: true }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "dialect", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_translation_entity_1.StoryTranslationEntity, (translation) => translation.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "stories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => country_entity_1.CountryEntity, (country) => country.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "countries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_translation_entity_1.CommentTranslationEntity, (translation) => translation.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.UserEntity, (user) => user.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_entity_1.StoryEntity, (story) => story.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "stories_lang", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "comments_lang", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => case_manager_language_entity_1.CaseManagerLanguageEntity, (caseManager) => caseManager.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "caseManagers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_conversation_entity_1.StoryConversationEntity, (conversation) => conversation.language),
    __metadata("design:type", Array)
], LanguageEntity.prototype, "conversations", void 0);
exports.LanguageEntity = LanguageEntity = __decorate([
    (0, typeorm_1.Entity)('language')
], LanguageEntity);
//# sourceMappingURL=language.entity.js.map