"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ivrrStoryMapper = void 0;
const class_transformer_1 = require("class-transformer");
const shared_1 = require("@ourloop/shared");
const ivrrStoryMapper = (story, reasons) => {
    var _a, _b, _c, _d;
    return (0, class_transformer_1.plainToClass)(shared_1.IvrrStoryDTO, Object.assign(Object.assign({}, story), { conversation: {
            shortCodeNumber: (_a = story.conversation) === null || _a === void 0 ? void 0 : _a.serviceNumber,
        }, phone: (_b = story.recipient) === null || _b === void 0 ? void 0 : _b.phone, languageCode: (_c = story.language) === null || _c === void 0 ? void 0 : _c.code, reasonIds: reasons
            ? reasons.map((reason) => reason.id)
            : (_d = story.rejectReasons) === null || _d === void 0 ? void 0 : _d.map((reason) => reason.rejectReasonId) }));
};
exports.ivrrStoryMapper = ivrrStoryMapper;
//# sourceMappingURL=ivrr-story.mapper.js.map