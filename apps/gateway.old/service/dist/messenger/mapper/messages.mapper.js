"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageMapper = void 0;
const message_ro_1 = require("../../sms/response/message.ro");
const class_transformer_1 = require("class-transformer");
const sender_ro_1 = require("../../sms/response/sender.ro");
const message_type_enum_1 = require("../enum/message-type.enum");
const helpers_1 = require("../../common/helpers");
const checkSenderType = (message) => message.type === message_type_enum_1.FlowMessageType.MODERATOR_RESPONSE
    ? sender_ro_1.SenderType.moderator
    : message.type
        ? sender_ro_1.SenderType.issuer
        : sender_ro_1.SenderType.loop;
const messageMapper = (messages, story) => {
    return messages === null || messages === void 0 ? void 0 : messages.map((message) => {
        var _a;
        return (0, class_transformer_1.plainToClass)(message_ro_1.MessageRO, Object.assign(Object.assign({}, message), { storyId: message.isStory ? story.id : undefined, sender: {
                type: checkSenderType(message),
                id: message.userId,
                username: message.type
                    ? ((_a = story.recipient) === null || _a === void 0 ? void 0 : _a.userWantContact)
                        ? (0, helpers_1.prepareUsername)(story.recipient)
                        : null
                    : undefined,
            } }));
    });
};
exports.messageMapper = messageMapper;
//# sourceMappingURL=messages.mapper.js.map