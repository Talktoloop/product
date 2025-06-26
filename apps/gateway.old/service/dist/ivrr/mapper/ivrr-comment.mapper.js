"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrCommentMapper = void 0;
const class_transformer_1 = require("class-transformer");
const ivrr_story_mapper_1 = require("./ivrr-story.mapper");
const shared_1 = require("@ourloop/shared");
const ivrrCommentMapper = (comment, reasons) => {
    var _a, _b, _c;
    return (0, class_transformer_1.plainToClass)(shared_1.IvrrCommentDTO, Object.assign(Object.assign({}, comment), { story: (0, ivrr_story_mapper_1.ivrrStoryMapper)(comment.story), languageCode: (_a = comment.language) === null || _a === void 0 ? void 0 : _a.code, phone: (_b = comment.recipient) === null || _b === void 0 ? void 0 : _b.phone, reasonIds: reasons
            ? reasons.map((reason) => reason.id)
            : (_c = comment.rejectReasons) === null || _c === void 0 ? void 0 : _c.map((reason) => reason.rejectReasonId) }));
};
exports.ivrrCommentMapper = ivrrCommentMapper;
//# sourceMappingURL=ivrr-comment.mapper.js.map