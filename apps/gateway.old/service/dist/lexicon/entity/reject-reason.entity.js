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
exports.RejectReasonEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_reject_reason_entity_1 = require("../../comment/entity/comment-reject-reason.entity");
const story_reject_reason_entity_1 = require("../../story/entity/story-reject-reason.entity");
let RejectReasonEntity = class RejectReasonEntity {
};
exports.RejectReasonEntity = RejectReasonEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], RejectReasonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], RejectReasonEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_reject_reason_entity_1.CommentRejectReasonEntity, (commentRejectReason) => commentRejectReason.rejectReason),
    __metadata("design:type", Array)
], RejectReasonEntity.prototype, "commentRejectReasons", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => story_reject_reason_entity_1.StoryRejectReasonEntity, (commentRejectReason) => commentRejectReason.rejectReason),
    __metadata("design:type", Array)
], RejectReasonEntity.prototype, "storyRejectReasons", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RejectReasonEntity, (rejection) => rejection.children, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_rejection_id' }),
    __metadata("design:type", RejectReasonEntity)
], RejectReasonEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RejectReasonEntity, (subReason) => subReason.parent),
    __metadata("design:type", Array)
], RejectReasonEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_top_level', default: false }),
    __metadata("design:type", Boolean)
], RejectReasonEntity.prototype, "isTopLevel", void 0);
exports.RejectReasonEntity = RejectReasonEntity = __decorate([
    (0, typeorm_1.Entity)('reject_reason')
], RejectReasonEntity);
//# sourceMappingURL=reject-reason.entity.js.map