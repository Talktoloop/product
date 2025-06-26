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
exports.CommentRejectReasonEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const reject_reason_entity_1 = require("../../lexicon/entity/reject-reason.entity");
let CommentRejectReasonEntity = class CommentRejectReasonEntity {
};
exports.CommentRejectReasonEntity = CommentRejectReasonEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CommentRejectReasonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comment_id', type: 'varchar', length: 36 }),
    __metadata("design:type", String)
], CommentRejectReasonEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_id', type: 'int' }),
    __metadata("design:type", Number)
], CommentRejectReasonEntity.prototype, "rejectReasonId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject_reason_text', type: 'varchar' }),
    __metadata("design:type", String)
], CommentRejectReasonEntity.prototype, "rejectReasonText", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => comment_entity_1.CommentEntity, (comment) => comment.rejectReasons),
    (0, typeorm_1.JoinColumn)({ name: 'comment_id' }),
    __metadata("design:type", comment_entity_1.CommentEntity)
], CommentRejectReasonEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => reject_reason_entity_1.RejectReasonEntity, (rejectReason) => rejectReason.commentRejectReasons),
    (0, typeorm_1.JoinColumn)({ name: 'reject_reason_id' }),
    __metadata("design:type", reject_reason_entity_1.RejectReasonEntity)
], CommentRejectReasonEntity.prototype, "rejectReason", void 0);
exports.CommentRejectReasonEntity = CommentRejectReasonEntity = __decorate([
    (0, typeorm_1.Entity)('story_comment_reject_reason')
], CommentRejectReasonEntity);
//# sourceMappingURL=comment-reject-reason.entity.js.map