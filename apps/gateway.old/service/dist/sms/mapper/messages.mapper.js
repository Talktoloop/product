"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesMapper = void 0;
const message_ro_1 = require("../response/message.ro");
const class_transformer_1 = require("class-transformer");
const sender_ro_1 = require("../response/sender.ro");
const role_constant_1 = require("../../user/constant/role.constant");
const checkSenderType = (message) => {
    var _a;
    return message.isUser
        ? ((_a = message.user) === null || _a === void 0 ? void 0 : _a.role) === role_constant_1.ROLE.MODERATOR
            ? sender_ro_1.SenderType.moderator
            : sender_ro_1.SenderType.issuer
        : sender_ro_1.SenderType.loop;
};
const messagesMapper = (messages) => {
    return messages.map((message) => {
        var _a, _b;
        return (0, class_transformer_1.plainToClass)(message_ro_1.MessageRO, Object.assign(Object.assign({}, message), { sender: {
                type: checkSenderType(message),
                id: (_a = message.user) === null || _a === void 0 ? void 0 : _a.id,
                username: (_b = message.user) === null || _b === void 0 ? void 0 : _b.nickname,
            } }));
    });
};
exports.messagesMapper = messagesMapper;
//# sourceMappingURL=messages.mapper.js.map