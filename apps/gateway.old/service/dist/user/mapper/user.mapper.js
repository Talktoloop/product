"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserProfileRO = void 0;
const class_transformer_1 = require("class-transformer");
const user_profile_ro_1 = require("../response/user-profile.ro");
const organisation_ro_1 = require("../../organisation/response/organisation.ro");
const helpers_1 = require("../../common/helpers");
const date_fns_1 = require("date-fns");
const userToUserProfileRO = (user, token) => {
    var _a;
    return (0, class_transformer_1.plainToClass)(user_profile_ro_1.UserProfileRO, Object.assign(Object.assign({}, user), { registrationStatus: (0, helpers_1.checkRegistrationStatus)(user), organisation: (0, class_transformer_1.plainToClass)(organisation_ro_1.OrganisationRO, user.organisation), plan: (_a = token === null || token === void 0 ? void 0 : token.plan) !== null && _a !== void 0 ? _a : null, validityTimeInDays: (token === null || token === void 0 ? void 0 : token.exp)
            ? Math.ceil(((token === null || token === void 0 ? void 0 : token.exp) - parseInt((0, date_fns_1.format)(new Date(), 't'))) / 86400)
            : null }));
};
exports.userToUserProfileRO = userToUserProfileRO;
//# sourceMappingURL=user.mapper.js.map