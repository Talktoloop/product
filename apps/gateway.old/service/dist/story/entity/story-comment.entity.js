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
exports.StoryCommentEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("./story.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let StoryCommentEntity = class StoryCommentEntity {
};
exports.StoryCommentEntity = StoryCommentEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], StoryCommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.StoryEntity, (story) => story.comments),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryCommentEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StoryCommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StoryCommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'published_at' }),
    __metadata("design:type", Date)
], StoryCommentEntity.prototype, "publishedAt", void 0);
exports.StoryCommentEntity = StoryCommentEntity = __decorate([
    (0, typeorm_1.Entity)('story_comment')
], StoryCommentEntity);
//# sourceMappingURL=story-comment.entity.js.map