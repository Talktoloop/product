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
exports.CommentTranslationModeratorService = void 0;
const common_1 = require("@nestjs/common");
const comment_repository_1 = require("../repository/comment.repository");
const comment_translation_repository_1 = require("../repository/comment-translation.repository");
const shared_1 = require("@ourloop/shared");
const translation_type_constant_1 = require("../../common/constant/translation-type.constant");
const comment_translation_entity_1 = require("../entity/comment-translation.entity");
const language_service_1 = require("../../language/language.service");
const comment_service_1 = require("./comment.service");
const translation_status_constants_1 = require("../../common/constant/translation-status.constants");
const helpers_1 = require("../../common/helpers");
const source_type_constants_1 = require("../../common/constant/source-type.constants");
const typeorm_1 = require("typeorm");
let CommentTranslationModeratorService = class CommentTranslationModeratorService {
    constructor(commentRepository, commentTranslationRepository, languageService, commentService) {
        this.commentRepository = commentRepository;
        this.commentTranslationRepository = commentTranslationRepository;
        this.languageService = languageService;
        this.commentService = commentService;
    }
    async retryTranslation(commentId, languageCode) {
        try {
            const languageEntity = await this.languageService.getLanguageByCode(languageCode);
            const comment = await this.commentService.findComment(commentId, [
                'translations',
                'translations.language',
            ]);
            if (!comment) {
                throw new shared_1.CustomError(shared_1.COMMENT_NOT_FOUND, {
                    error: `This comment doesnt exist`,
                });
            }
            const { status } = comment.translations.find(({ language: { code } }) => code === languageEntity.code);
            if (status !== translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.ERROR) {
                throw new shared_1.CustomError(shared_1.RETRY_TRANSLATION_INCORRECT_LANGUAGE_CODE_ERROR, {
                    error: `This translation has different status than ERROR`,
                });
            }
            let content, language;
            ({ content, language } = comment.translations.find(({ language: { id } }) => id === comment.languageId));
            if (!language.provider) {
                ({ content, language } = comment.translations.find(({ type, languageId }) => type === translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL &&
                    languageId !== comment.languageId));
            }
            this.languageService.runTranslationLambda(comment.id, languageEntity, content, language.code, source_type_constants_1.SOURCE_TYPE.COMMENT, languageEntity.provider, languageEntity.alternativeProvider);
            return true;
        }
        catch (error) {
            throw new shared_1.CustomError(shared_1.COMMENT_TRANSLATION_UPDATE_ERROR, error.error);
        }
    }
    async saveTranslationToRepository(translation) {
        return this.commentTranslationRepository.save(translation);
    }
    async saveTranslation({ language, content }, commentId) {
        let result;
        const languageEntity = await this.languageService.getLanguageByCode(language);
        try {
            const comment = await this.commentService.findComment(commentId, [
                'translations',
                'translations.language',
                'language',
            ]);
            let translation = await this.commentTranslationRepository.findExistingCommentTranslation(commentId, languageEntity.id);
            if (!translation) {
                translation = new comment_translation_entity_1.CommentTranslationEntity({
                    commentId,
                    languageId: languageEntity.id,
                    content,
                });
            }
            const originalContent = translation.content;
            translation.content = content;
            translation.status = translation_status_constants_1.TRANSLATION_STATUS_CONSTANTS.TRANSLATED;
            translation.type = translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL;
            result = await this.saveTranslationToRepository(translation);
            if ((0, helpers_1.updatedOriginalContent)(comment.language.code, language, originalContent, content)) {
                await this.commentTranslationRepository.delete({
                    commentId: comment.id,
                    languageId: (0, typeorm_1.Not)(comment.languageId),
                });
                this.languageService.invokeTranslation(comment.id, content, comment.languageId, source_type_constants_1.SOURCE_TYPE.COMMENT);
            }
            else if (!(0, helpers_1.includesTranslatableContent)(comment.translations)) {
                this.languageService.invokeTranslation(commentId, content, languageEntity.id, source_type_constants_1.SOURCE_TYPE.COMMENT);
            }
        }
        catch (error) {
            throw new shared_1.CustomError(error.message, error.error);
        }
        return result;
    }
    async getTranslations(commentId) {
        return this.commentRepository.findByIdOrFail(commentId, [
            'translations',
            'translations.language',
        ]);
    }
    async removeCommentTranslation(commentId, code) {
        const comment = await this.commentRepository.findByIdOrFail(commentId, [
            'translations',
            'translations.language',
        ]);
        const translation = comment.translations.find((translation) => translation.language.code === code &&
            translation.language.id !== comment.languageId);
        if (!translation) {
            return;
        }
        return this.commentTranslationRepository.delete(translation.id);
    }
    async setTranslationAsVerified(commentId, data) {
        const comment = await this.commentRepository.findByIdOrFail(commentId, [
            'translations',
            'translations.language',
        ]);
        const translation = comment.translations.find((item) => { var _a; return ((_a = item.language) === null || _a === void 0 ? void 0 : _a.code) === data.language; });
        if (!translation || translation.languageId === comment.languageId) {
            return;
        }
        return this.commentTranslationRepository
            .update({
            commentId,
            languageId: translation.language.id,
        }, {
            type: translation_type_constant_1.TRANSLATION_TYPE_CONSTANTS.MANUAL,
            content: data.content,
        })
            .catch(() => {
            throw new shared_1.CustomError(shared_1.STORY_UPDATE_ERROR, {
                error: 'comment not verified - function setTranslationAsVerified',
            });
        });
    }
};
exports.CommentTranslationModeratorService = CommentTranslationModeratorService;
exports.CommentTranslationModeratorService = CommentTranslationModeratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => language_service_1.LanguageService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => comment_service_1.CommentService))),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        comment_translation_repository_1.CommentTranslationRepository,
        language_service_1.LanguageService,
        comment_service_1.CommentService])
], CommentTranslationModeratorService);
//# sourceMappingURL=comment-translation-moderator.service.js.map