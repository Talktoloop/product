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
exports.CommentVoteEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let CommentVoteEntity = class CommentVoteEntity {
};
exports.CommentVoteEntity = CommentVoteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], CommentVoteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hash', type: 'varchar' }),
    __metadata("design:type", String)
], CommentVoteEntity.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'comment_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentVoteEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => comment_entity_1.CommentEntity, (comments) => comments.votes),
    (0, typeorm_1.JoinColumn)({ name: 'comment_id' }),
    __metadata("design:type", comment_entity_1.CommentEntity)
], CommentVoteEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CommentVoteEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar' }),
    __metadata("design:type", String)
], CommentVoteEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.commentVotes),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentVoteEntity.prototype, "user", void 0);
exports.CommentVoteEntity = CommentVoteEntity = __decorate([
    (0, typeorm_1.Entity)('story_comment_vote')
], CommentVoteEntity);
//# sourceMappingURL=comment-vote.entity.js.map