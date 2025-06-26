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
exports.StoryRecipientEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("./story.entity");
let StoryRecipientEntity = class StoryRecipientEntity {
};
exports.StoryRecipientEntity = StoryRecipientEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryRecipientEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender_by_user', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "genderByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender_by_moderator', type: 'tinyint' }),
    __metadata("design:type", Number)
], StoryRecipientEntity.prototype, "genderByModerator", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'age_by_user', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "ageByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'age_by_moderator', type: 'tinyint' }),
    __metadata("design:type", Number)
], StoryRecipientEntity.prototype, "ageByModerator", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'difficulty_by_user', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "difficultyByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'difficulty_by_moderator', type: 'tinyint' }),
    __metadata("design:type", Number)
], StoryRecipientEntity.prototype, "difficultyByModerator", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_minority_by_moderator',
        type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], StoryRecipientEntity.prototype, "isMinority", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'communicator_id', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRecipientEntity.prototype, "communicatorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_want_contact', type: 'boolean' }),
    __metadata("design:type", Boolean)
], StoryRecipientEntity.prototype, "userWantContact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StoryRecipientEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StoryRecipientEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => story_entity_1.StoryEntity, (story) => story.recipient),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryRecipientEntity.prototype, "story", void 0);
exports.StoryRecipientEntity = StoryRecipientEntity = __decorate([
    (0, typeorm_1.Entity)('story_recipient')
], StoryRecipientEntity);
//# sourceMappingURL=story-recipient.entity.js.map