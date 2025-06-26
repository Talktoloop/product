"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentListModeratorMapper = void 0;
const class_transformer_1 = require("class-transformer");
const comment_list_moderator_ro_1 = require("../response/comment-list-moderator.ro");
const helpers_1 = require("../../common/helpers");
const shared_1 = require("@ourloop/shared");
const commentListModeratorMapper = (comments) => {
    console.log('commentListModeratorMapper:comments', comments);
    let translation;
    return comments.map((comment) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (comment.translations) {
            console.log('commentListModeratorMapper:comment.languageId', comment.languageId);
            translation = (0, helpers_1.getTranslationByLanguageId)(comment.translations, comment.languageId, comment.languageId);
        }
        return (0, class_transformer_1.plainToClass)(comment_list_moderator_ro_1.CommentListModeratorRO, Object.assign(Object.assign({}, comment), { language: comment.language.code, storyLanguage: (_b = (_a = comment.story) === null || _a === void 0 ? void 0 : _a.language) === null || _b === void 0 ? void 0 : _b.code, country: (_d = (_c = comment.story) === null || _c === void 0 ? void 0 : _c.country) === null || _d === void 0 ? void 0 : _d.code, content: translation === null || translation === void 0 ? void 0 : translation.content, categories: ((_e = comment.story) === null || _e === void 0 ? void 0 : _e.categories)
                ? comment.story.categories
                    .sort((prev, next) => prev.order - next.order)
                    .map((category) => category.code)
                : [], authorNickname: (_g = (_f = comment.recipient) === null || _f === void 0 ? void 0 : _f.nickname) !== null && _g !== void 0 ? _g : (_h = comment.user) === null || _h === void 0 ? void 0 : _h.nickname, storyPublishedBy: comment.story.status === shared_1.STORY_STATUS.PUBLISHED
                ? (_l = (_k = (_j = comment.story) === null || _j === void 0 ? void 0 : _j.statusChangedBy) === null || _k === void 0 ? void 0 : _k.nickname) !== null && _l !== void 0 ? _l : null
                : null }));
    });
};
exports.commentListModeratorMapper = commentListModeratorMapper;
//# sourceMappingURL=comment-list-moderator.mapper.js.map