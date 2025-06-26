"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUser = void 0;
const user_comment_details_ro_1 = require("../../user/response/user-comment-details.ro");
const class_transformer_1 = require("class-transformer");
const formatUser = (user) => {
    var _a, _b;
    return Object.assign(Object.assign({}, (0, class_transformer_1.plainToClass)(user_comment_details_ro_1.UserCommentDetailsRO, Object.assign({}, user))), { organisation: (_b = (_a = user === null || user === void 0 ? void 0 : user.organisation) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : null });
};
exports.formatUser = formatUser;
//# sourceMappingURL=user.mapper.js.map