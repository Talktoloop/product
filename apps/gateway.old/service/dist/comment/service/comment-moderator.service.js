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
var CommentModeratorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModeratorService = void 0;
const common_1 = require("@nestjs/common");
const comment_repository_1 = require("../repository/comment.repository");
const channel_constant_1 = require("../../common/constant/channel.constant");
const shared_1 = require("@ourloop/shared");
const language_repository_1 = require("../../language/language.repository");
const helpers_1 = require("../../common/helpers");
const language_service_1 = require("../../language/language.service");
const comment_translation_entity_1 = require("../entity/comment-translation.entity");
const source_type_constants_1 = require("../../common/constant/source-type.constants");
const thematic_service_1 = require("../../lexicon/service/thematic.service");
let CommentModeratorService = CommentModeratorService_1 = class CommentModeratorService {
    constructor(commentRepository, languageRepository, languageService, thematicService) {
        this.commentRepository = commentRepository;
        this.languageRepository = languageRepository;
        this.languageService = languageService;
        this.thematicService = thematicService;
        this.logger = new common_1.Logger(CommentModeratorService_1.name);
    }
    async changeOriginLanguage(comment, language) {
        const { translations, contentUpdated, oldOriginalContent } = await this.languageService.changeOriginLanguage(comment.translations, language, comment.languageId);
        comment.translations = translations;
        if (!contentUpdated) {
            const newTranslation = new comment_translation_entity_1.CommentTranslationEntity({
                commentId: comment.id,
                languageId: language.id,
                content: oldOriginalContent,
            });
            newTranslation.language = language;
            comment.translations.push(newTranslation);
        }
        return comment;
    }
    async updateComment(comment, data) {
        var _a;
        const language = await this.languageService.checkOriginLanguage(data.language);
        const thematics = await this.thematicService.findByIds(data.thematics);
        if ((language === null || language === void 0 ? void 0 : language.id) !== comment.languageId) {
            comment = await this.changeOriginLanguage(comment, language);
        }
        const updatedComment = await this.commentRepository
            .save(Object.assign(Object.assign({}, comment), { languageId: (_a = language === null || language === void 0 ? void 0 : language.id) !== null && _a !== void 0 ? _a : comment.languageId, thematics: thematics, solution_proposed: data.solution_proposed }))
            .catch((error) => {
            this.logger.error(error);
            throw new shared_1.CustomError(shared_1.COMMENT_UPDATE_ERROR, {
                error: 'comment update error - function updateComment',
            });
        });
        if (comment.languageId !== updatedComment.languageId && language.provider) {
            this.languageService.invokeTranslation(comment.id, comment.translations.find((translation) => translation.language.code === language.code).content, updatedComment.languageId, source_type_constants_1.SOURCE_TYPE.COMMENT);
        }
        return updatedComment;
    }
    async removeComment(id) {
        const comment = await this.commentRepository
            .findOneOrFail({ where: { id } })
            .catch((error) => {
            throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                error: error === null || error === void 0 ? void 0 : error.message,
            });
        });
        return this.commentRepository.remove(comment);
    }
    async getPendingComments(params) {
        return this.commentRepository.findPendingComments(params);
    }
    async getCommentsByStatus(params, status, withDetails = false) {
        return this.commentRepository.findCommentsByStatus(params, status, withDetails);
    }
    async rejectComment(comment, rejectContent, rejectReasons) {
        if (comment.status === shared_1.COMMENT_STATUS.REJECTED) {
            throw new shared_1.CustomError(shared_1.COMMENT_INCORRECT_STATUS, {
                error: 'comment incorrect status - function rejectComment',
            });
        }
        comment.status = shared_1.COMMENT_STATUS.REJECTED;
        comment.rejectRationale = rejectContent.rationale;
        if ((rejectReasons === null || rejectReasons === void 0 ? void 0 : rejectReasons.length) > 0) {
            comment.rejectReasons = rejectReasons.map((rejectReason, key) => ({
                rejectReasonId: rejectReason.id,
                rejectReasonText: rejectContent.reasonTexts[key],
                commentId: comment.id,
            }));
            const language = await this.languageRepository.findOne({
                where: { code: rejectContent.notificationLanguage },
            });
            comment.rejectReasonLanguageId = language ? language.id : null;
        }
        return this.commentRepository.save(comment);
    }
    async unPublishComment(comment) {
        if (![
            shared_1.COMMENT_STATUS.PUBLISHED,
            shared_1.COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
        ].includes(comment.status)) {
            throw new shared_1.CustomError(shared_1.COMMENT_INCORRECT_STATUS, {
                error: 'comment incorrect status - function unPublishComment',
            });
        }
        return this.commentRepository
            .update(comment.id, {
            status: shared_1.COMMENT_STATUS.PENDING_REVIEW,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.COMMENT_UPDATE_ERROR, {
                error: 'comment not unpublished - function unPublishComment',
            });
        });
    }
    async setCommentS3FileId(comment, s3FileId) {
        comment.s3FileId = s3FileId;
        return this.commentRepository.save(comment);
    }
    async setCommentStatus(comment, status, restrictedStatuses = []) {
        if (restrictedStatuses.includes(comment.status)) {
            throw new shared_1.CustomError(shared_1.COMMENT_INCORRECT_STATUS, {
                error: 'comment incorrect status - function publishComment',
            });
        }
        comment.status = status;
        return this.commentRepository.save(comment);
    }
    async publishComment(comment) {
        if ([shared_1.COMMENT_STATUS.PUBLISHED, shared_1.COMMENT_STATUS.PENDING_RECORDING].includes(comment.status)) {
            throw new shared_1.CustomError(shared_1.COMMENT_INCORRECT_STATUS, {
                error: 'comment incorrect status - function publishComment',
            });
        }
        if (comment.story.channel === channel_constant_1.CHANNEL_CONSTANTS.IVRR &&
            comment.channel !== channel_constant_1.CHANNEL_CONSTANTS.IVRR) {
            throw new shared_1.CustomError(shared_1.COMMENT_INCORRECT_STATUS, {
                error: 'comment incorrect status - function publishComment',
            });
        }
        if (!(0, helpers_1.includesTranslatableContent)(comment.translations)) {
            throw new shared_1.CustomError(shared_1.TRANSLATIONS_ARE_NEEDED, {
                error: 'machine-translated content id needed - function publishComment',
            });
        }
        return this.commentRepository
            .update(comment.id, {
            status: shared_1.COMMENT_STATUS.PUBLISHED,
            publishedAt: !comment.publishedAt ? new Date() : comment.publishedAt,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.COMMENT_UPDATE_ERROR, {
                error: 'comment not published - function publishComment',
            });
        });
    }
    async getCommentDetailsByIdOrFail(id) {
        return this.commentRepository.findCommentDetailsById(id).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                    error: 'Comment ID does not exist',
                });
            }
            return data;
        });
    }
};
exports.CommentModeratorService = CommentModeratorService;
exports.CommentModeratorService = CommentModeratorService = CommentModeratorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        language_repository_1.LanguageRepository,
        language_service_1.LanguageService,
        thematic_service_1.ThematicService])
], CommentModeratorService);
//# sourceMappingURL=comment-moderator.service.js.map