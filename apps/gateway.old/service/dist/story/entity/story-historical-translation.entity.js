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
exports.StoryHistoricalTranslationEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entity/user.entity");
const story_translation_entity_1 = require("./story-translation.entity");
let StoryHistoricalTranslationEntity = class StoryHistoricalTranslationEntity {
};
exports.StoryHistoricalTranslationEntity = StoryHistoricalTranslationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryHistoricalTranslationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'translation_id', type: 'int' }),
    __metadata("design:type", Number)
], StoryHistoricalTranslationEntity.prototype, "translationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_recoverable', type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryHistoricalTranslationEntity.prototype, "isRecoverable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'moderator_id', type: 'string' }),
    __metadata("design:type", String)
], StoryHistoricalTranslationEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content', type: 'text' }),
    __metadata("design:type", String)
], StoryHistoricalTranslationEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Date)
], StoryHistoricalTranslationEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.historicalTranslations),
    (0, typeorm_1.JoinColumn)({ name: 'moderator_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryHistoricalTranslationEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_translation_entity_1.StoryTranslationEntity, (translation) => translation.historicalTranslations),
    (0, typeorm_1.JoinColumn)({ name: 'translation_id' }),
    __metadata("design:type", story_translation_entity_1.StoryTranslationEntity)
], StoryHistoricalTranslationEntity.prototype, "translation", void 0);
exports.StoryHistoricalTranslationEntity = StoryHistoricalTranslationEntity = __decorate([
    (0, typeorm_1.Entity)('story_translation_history')
], StoryHistoricalTranslationEntity);
//# sourceMappingURL=story-historical-translation.entity.js.map