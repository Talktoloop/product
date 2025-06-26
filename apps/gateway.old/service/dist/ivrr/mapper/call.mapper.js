"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callMapper = void 0;
const class_transformer_1 = require("class-transformer");
const call_ro_1 = require("../response/call.ro");
const callMapper = (conversation) => {
    var _a;
    return (_a = conversation.ivrrMessages) === null || _a === void 0 ? void 0 : _a.map((call) => {
        return (0, class_transformer_1.plainToClass)(call_ro_1.CallRO, Object.assign(Object.assign({}, call), { storyId: call.isStory ? conversation.storyId : undefined }));
    });
};
exports.callMapper = callMapper;
//# sourceMappingURL=call.mapper.js.map