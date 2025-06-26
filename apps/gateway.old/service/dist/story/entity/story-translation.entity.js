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
exports.StoryTranslationEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("./story.entity");
const language_entity_1 = require("../../language/entity/language.entity");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
const story_historical_translation_entity_1 = require("./story-historical-translation.entity");
let StoryTranslationEntity = class StoryTranslationEntity {
    constructor(data = {}) {
        this.storyId = data.storyId;
        this.languageId = data.languageId;
        this.content = data.content;
        this.language = data.language;
        this.numberOfWords = data.numberOfWords;
        this.status = data.status;
        this.type = data.type;
    }
};
exports.StoryTranslationEntity = StoryTranslationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryTranslationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'number_of_words', type: 'smallint' }),
    __metadata("design:type", Number)
], StoryTranslationEntity.prototype, "numberOfWords", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'language_id', type: 'smallint' }),
    __metadata("design:type", Number)
], StoryTranslationEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'story_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], StoryTranslationEntity.prototype, "storyId", void 0);
__decorate([
    (0, typeorm_1.Index)('IDX_FullText_Content', { fulltext: true }),
    (0, typeorm_1.Column)({ name: 'content', type: 'text' }),
    __metadata("design:type", String)
], StoryTranslationEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_original_content', type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryTranslationEntity.prototype, "isOriginalContent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], StoryTranslationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'updated_at', type: 'datetime' }),
    __metadata("design:type", Date)
], StoryTranslationEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'enum', enum: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS }),
    __metadata("design:type", String)
], StoryTranslationEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.StoryEntity, (story) => story.translations),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryTranslationEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_historical_translation_entity_1.StoryHistoricalTranslationEntity, (historicalTranslation) => historicalTranslation.translation),
    __metadata("design:type", Array)
], StoryTranslationEntity.prototype, "historicalTranslations", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity, (language) => language.stories),
    (0, typeorm_1.JoinColumn)({ name: 'language_id' }),
    __metadata("design:type", language_entity_1.LanguageEntity)
], StoryTranslationEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'int' }),
    __metadata("design:type", Number)
], StoryTranslationEntity.prototype, "status", void 0);
exports.StoryTranslationEntity = StoryTranslationEntity = __decorate([
    (0, typeorm_1.Entity)('story_translation'),
    __metadata("design:paramtypes", [Object])
], StoryTranslationEntity);
//# sourceMappingURL=story-translation.entity.js.map