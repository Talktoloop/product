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
exports.CommentTranslationEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const language_entity_1 = require("../../language/entity/language.entity");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
let CommentTranslationEntity = class CommentTranslationEntity {
    constructor(data = {}) {
        this.commentId = data.commentId;
        this.languageId = data.languageId;
        this.content = data.content;
    }
};
exports.CommentTranslationEntity = CommentTranslationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CommentTranslationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], CommentTranslationEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comment_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CommentTranslationEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.Index)('IDX_FullText_Content', { fulltext: true }),
    (0, typeorm_1.Column)({ name: 'content', type: 'text' }),
    __metadata("design:type", String)
], CommentTranslationEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], CommentTranslationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'updated_at', type: 'datetime' }),
    __metadata("design:type", Date)
], CommentTranslationEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'enum', enum: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS }),
    __metadata("design:type", String)
], CommentTranslationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => comment_entity_1.CommentEntity, (comment) => comment.translations),
    (0, typeorm_1.JoinColumn)({ name: 'comment_id' }),
    __metadata("design:type", comment_entity_1.CommentEntity)
], CommentTranslationEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (language) => language.comments),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], CommentTranslationEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'int' }),
    __metadata("design:type", Number)
], CommentTranslationEntity.prototype, "status", void 0);
exports.CommentTranslationEntity = CommentTranslationEntity = __decorate([
    (0, typeorm_1.Entity)('story_comment_translation'),
    __metadata("design:paramtypes", [Object])
], CommentTranslationEntity);
//# sourceMappingURL=comment-translation.entity.js.map