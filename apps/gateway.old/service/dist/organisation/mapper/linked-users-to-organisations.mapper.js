"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedUsersToOrganisationsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const linked_users_to_organisations_ro_1 = require("../response/linked-users-to-organisations.ro");
const linkedUsersToOrganisationsMapper = (data) => {
    var _a, _b, _c, _d, _e;
    let success = data.length > 0;
    let email;
    const emailsWithSuccess = [];
    const emailsFailed = [];
    for (const item of data) {
        email = (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.body) === null || _a === void 0 ? void 0 : _a.Messages[0]) === null || _b === void 0 ? void 0 : _b.To[0]) === null || _c === void 0 ? void 0 : _c.Email;
        if (((_e = (_d = item === null || item === void 0 ? void 0 : item.body) === null || _d === void 0 ? void 0 : _d.Messages[0]) === null || _e === void 0 ? void 0 : _e.Status) !== 'success') {
            success = false;
            if (!emailsFailed.includes(email)) {
                emailsFailed.push(email);
            }
        }
        else {
            if (!emailsWithSuccess.includes(email)) {
                emailsWithSuccess.push(email);
            }
        }
    }
    return (0, class_transformer_1.plainToClass)(linked_users_to_organisations_ro_1.LinkedUsersToOrganisationsRO, {
        success,
        emailsWithSuccess,
        emailsFailed,
    });
};
exports.linkedUsersToOrganisationsMapper = linkedUsersToOrganisationsMapper;
//# sourceMappingURL=linked-users-to-organisations.mapper.js.map