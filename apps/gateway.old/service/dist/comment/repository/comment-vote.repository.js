"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentVoteRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const shared_1 = require("@ourloop/shared");
const comment_vote_entity_1 = require("../entity/comment-vote.entity");
let CommentVoteRepository = class CommentVoteRepository extends typeorm_1.Repository {
    async saveVoteIfNotExits(comment, hash, user) {
        if (!(comment === null || comment === void 0 ? void 0 : comment.id))
            return false;
        const exist = await this.findOne({
            where: [{ commentId: comment.id, hash }],
        });
        if (!exist) {
            try {
                const entity = new comment_vote_entity_1.CommentVoteEntity();
                entity.hash = hash;
                entity.comment = comment;
                if (user) {
                    entity.user = user;
                }
                await this.save(entity);
                return true;
            }
            catch (err) {
                throw new shared_1.CustomError(shared_1.ADD_VOTE_ERROR, err);
            }
        }
        return false;
    }
    async removeVoteIfNotExits(comment, hash, user) {
        let where = { commentId: comment.id };
        if (user) {
            where = Object.assign(Object.assign({}, where), { userId: user.id });
        }
        else {
            where = Object.assign(Object.assign({}, where), { hash });
        }
        try {
            const vote = await this.findOne({ where });
            if (vote) {
                await this.remove(vote);
                return true;
            }
        }
        catch (err) {
            throw new shared_1.CustomError(shared_1.REMOVE_VOTE_COMMENT_ERROR, err);
        }
        return false;
    }
};
exports.CommentVoteRepository = CommentVoteRepository;
exports.CommentVoteRepository = CommentVoteRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(comment_vote_entity_1.CommentVoteEntity)
], CommentVoteRepository);
//# sourceMappingURL=comment-vote.repository.js.map