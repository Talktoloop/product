"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentListMapper = void 0;
const class_transformer_1 = require("class-transformer");
const comment_story_list_ro_1 = require("../response/comment-story-list.ro");
const helpers_1 = require("../../common/helpers");
const user_mapper_1 = require("../../common/mapper/user.mapper");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const commentListMapper = (comments, languageId) => {
    return comments.map((comment) => {
        var _a;
        let translation = (0, helpers_1.getTranslationByLanguageId)(comment.translations, comment.languageId, languageId);
        return (0, class_transformer_1.plainToClass)(comment_story_list_ro_1.CommentStoryListRO, Object.assign(Object.assign({}, comment), { authorNickname: (_a = comment.recipient) === null || _a === void 0 ? void 0 : _a.nickname, comment_status: comment.status, content: translation === null || translation === void 0 ? void 0 : translation.content, contentType: translation === null || translation === void 0 ? void 0 : translation.type, user: (0, user_mapper_1.formatUser)(comment.user), language: comment.translations.find((translation) => translation.languageId === comment.languageId).language.code, translations: (0, translations_mapper_1.translationsMapper)(comment.translations, null, comment.languageId), thematics: comment.thematics.map((thematic) => {
                return thematic.id;
            }), children: comment.children.map((commentChild) => {
                var _a;
                translation = (0, helpers_1.getTranslationByLanguageId)(commentChild.translations, commentChild.languageId, languageId);
                return (0, class_transformer_1.plainToClass)(comment_story_list_ro_1.CommentStoryListRO, Object.assign(Object.assign({}, commentChild), { authorNickname: (_a = commentChild.recipient) === null || _a === void 0 ? void 0 : _a.nickname, content: translation === null || translation === void 0 ? void 0 : translation.content, contentType: translation === null || translation === void 0 ? void 0 : translation.type, language: commentChild.translations.find((translation) => translation.languageId === commentChild.languageId).language.code, translations: (0, translations_mapper_1.translationsMapper)(commentChild.translations, null, commentChild.languageId), user: (0, user_mapper_1.formatUser)(commentChild.user), thematics: commentChild.thematics.map((thematic) => {
                        return thematic.id;
                    }) }));
            }) }));
    });
};
exports.commentListMapper = commentListMapper;
//# sourceMappingURL=comment-list.mapper.js.map