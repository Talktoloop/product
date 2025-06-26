"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messengerUserDataMapper = void 0;
const messenger_user_data_ro_1 = require("../response/messenger-user-data.ro");
const class_transformer_1 = require("class-transformer");
const messengerUserDataMapper = (recipient) => {
    return (0, class_transformer_1.plainToClass)(messenger_user_data_ro_1.MessengerUserDataRO, recipient);
};
exports.messengerUserDataMapper = messengerUserDataMapper;
//# sourceMappingURL=messenger-user-data.mapper.js.map