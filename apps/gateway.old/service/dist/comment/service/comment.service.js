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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_repository_1 = require("../repository/comment.repository");
const uuid_1 = require("uuid");
const shared_1 = require("@ourloop/shared");
const comment_vote_repository_1 = require("../repository/comment-vote.repository");
const language_service_1 = require("../../language/language.service");
const source_type_constants_1 = require("../../common/constant/source-type.constants");
const channel_constant_1 = require("../../common/constant/channel.constant");
const comment_recipient_repository_1 = require("../repository/comment-recipient.repository");
let CommentService = class CommentService {
    constructor(commentRepository, commentVoteRepository, languageService, commentRecipientRepository) {
        this.commentRepository = commentRepository;
        this.commentVoteRepository = commentVoteRepository;
        this.languageService = languageService;
        this.commentRecipientRepository = commentRecipientRepository;
    }
    findComment(id, relations) {
        return this.commentRepository
            .findOneOrFail({ where: { id }, relations: relations !== null && relations !== void 0 ? relations : [] })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
    }
    async addComment(languageId, story, data, user, channel = channel_constant_1.CHANNEL_CONSTANTS.WEB) {
        var _a;
        try {
            if (story.status !== shared_1.STORY_STATUS.PUBLISHED) {
                throw new shared_1.CustomError(shared_1.COMMENT_ADD_ERROR_NOT_PUBLISHED_STORY, {
                    error: 'Only for published story the comment can be added - addComment',
                });
            }
            let subComment;
            if (data.parentCommentId) {
                subComment = await this.commentRepository.findByIdOrFail(data.parentCommentId);
                if (subComment.parentCommentId) {
                    throw new shared_1.CustomError(shared_1.COMMENT_ADD_ERROR_ONLY_ONE_NEST, {
                        error: 'Only one nest can be added to comment - addComment',
                    });
                }
                if (![
                    shared_1.COMMENT_STATUS.PUBLISHED,
                    shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
                ].includes(subComment.status)) {
                    throw new shared_1.CustomError(shared_1.COMMENT_ADD_ERROR_NOT_PUBLISHED_COMMENT, {
                        error: 'Only for published comment the comment can be added- addComment',
                    });
                }
            }
            const authorNickname = (_a = data.nickname) !== null && _a !== void 0 ? _a : user === null || user === void 0 ? void 0 : user.nickname;
            const recipient = await this.commentRecipientRepository.save({
                email: data.email,
                phone: data.phone,
                nickname: authorNickname,
            });
            const newComment = await this.commentRepository.save({
                id: (0, uuid_1.v4)(),
                recipientId: recipient.id,
                story,
                status: shared_1.COMMENT_STATUS.PENDING_REVIEW,
                user: user !== null && user !== void 0 ? user : null,
                parent: subComment,
                languageId,
                channel,
                s3FileId: data.s3FileId,
                translations: [
                    {
                        languageId,
                        content: data.content,
                    },
                ],
            });
            const language = await this.languageService.getLanguageById(languageId);
            if (language.provider) {
                this.languageService.invokeTranslation(newComment.id, data.content, languageId, source_type_constants_1.SOURCE_TYPE.COMMENT);
            }
            return newComment;
        }
        catch (error) {
            throw new shared_1.CustomError(shared_1.COMMENT_ADD_ERROR, error);
        }
    }
    findAllByStoryId(id) {
        return this.commentRepository.findAll(id);
    }
    async findCommentIdsByCountryAndStatus(countryId, status) {
        return this.commentRepository.findCommentIdsByCountryAndStatus(countryId, status);
    }
    async addNewVote(id, hash, user) {
        const comment = await this.commentRepository.findByIdOrFail(id);
        return await this.commentVoteRepository.saveVoteIfNotExits(comment, hash, user);
    }
    async removeVote(id, hash, user) {
        const comment = await this.commentRepository.findByIdOrFail(id);
        return await this.commentVoteRepository.removeVoteIfNotExits(comment, hash, user);
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => language_service_1.LanguageService))),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        comment_vote_repository_1.CommentVoteRepository,
        language_service_1.LanguageService,
        comment_recipient_repository_1.CommentRecipientRepository])
], CommentService);
//# sourceMappingURL=comment.service.js.map