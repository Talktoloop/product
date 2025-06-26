"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentDetailsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const helpers_1 = require("../../common/helpers");
const comment_moderator_ro_1 = require("../response/comment-moderator.ro");
const user_mapper_1 = require("../../common/mapper/user.mapper");
const translations_mapper_1 = require("../../common/mapper/translations.mapper");
const lexicon_ro_1 = require("../../lexicon/response/lexicon.ro");
const commentDetailsMapper = (comment, languageId) => {
    var _a, _b, _c, _d, _e;
    const translation = (0, helpers_1.getTranslationByLanguageId)(comment.translations, comment.languageId, languageId);
    const email = ((_a = comment.recipient) === null || _a === void 0 ? void 0 : _a.email) || ((_b = comment.user) === null || _b === void 0 ? void 0 : _b.email);
    return (0, class_transformer_1.plainToClass)(comment_moderator_ro_1.CommentModeratorRO, Object.assign(Object.assign({}, comment), { storyChannel: comment.story.channel, authorNickname: (_c = comment.recipient) === null || _c === void 0 ? void 0 : _c.nickname, content: translation === null || translation === void 0 ? void 0 : translation.content, language: comment.language.code, storyLanguage: (_d = comment.story.language) === null || _d === void 0 ? void 0 : _d.code, user: comment.user ? (0, user_mapper_1.formatUser)(comment.user) : null, emailProvided: !!email, email, translations: (0, translations_mapper_1.translationsMapper)(comment.translations, null, comment.languageId), thematics: (_e = comment.thematics) === null || _e === void 0 ? void 0 : _e.map((t) => t.id), rejectReasons: comment.rejectReasons.map((item) => (0, class_transformer_1.plainToClass)(lexicon_ro_1.LexiconRO, item.rejectReason)) }));
};
exports.commentDetailsMapper = commentDetailsMapper;
//# sourceMappingURL=comment-details.mapper.js.map