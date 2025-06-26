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
exports.StoryRejectReasonEntity = void 0;
const typeorm_1 = require("typeorm");
const story_entity_1 = require("./story.entity");
const reject_reason_entity_1 = require("../../lexicon/entity/reject-reason.entity");
let StoryRejectReasonEntity = class StoryRejectReasonEntity {
};
exports.StoryRejectReasonEntity = StoryRejectReasonEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], StoryRejectReasonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'story_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], StoryRejectReasonEntity.prototype, "storyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_id', type: 'int' }),
    __metadata("design:type", Number)
], StoryRejectReasonEntity.prototype, "rejectReasonId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_text', type: 'varchar' }),
    __metadata("design:type", String)
], StoryRejectReasonEntity.prototype, "rejectReasonText", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_entity_1.StoryEntity, (story) => story.rejectReasons),
    (0, typeorm_1.JoinColumn)({ name: 'story_id' }),
    __metadata("design:type", story_entity_1.StoryEntity)
], StoryRejectReasonEntity.prototype, "story", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reject_reason_entity_1.RejectReasonEntity, (rejectReason) => rejectReason.storyRejectReasons),
    (0, typeorm_1.JoinColumn)({ name: 'reject_reason_id' }),
    __metadata("design:type", reject_reason_entity_1.RejectReasonEntity)
], StoryRejectReasonEntity.prototype, "rejectReason", void 0);
exports.StoryRejectReasonEntity = StoryRejectReasonEntity = __decorate([
    (0, typeorm_1.Entity)('story_reject_reason')
], StoryRejectReasonEntity);
//# sourceMappingURL=story-reject-reason.entity.js.map