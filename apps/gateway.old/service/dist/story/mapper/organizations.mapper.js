"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOrganisations = void 0;
const formatOrganisations = (organisations) => organisations.map((organisation) => {
    var _a, _b, _c, _d, _e;
    return Object.assign(Object.assign({}, organisation), { replied: organisation.replied !== null, usersCount: (_b = (_a = organisation.users) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, countryCode: (_d = (_c = organisation === null || organisation === void 0 ? void 0 : organisation.country) === null || _c === void 0 ? void 0 : _c.code) !== null && _d !== void 0 ? _d : null, verified: (_e = organisation === null || organisation === void 0 ? void 0 : organisation.verified) !== null && _e !== void 0 ? _e : null });
});
exports.formatOrganisations = formatOrganisations;
//# sourceMappingURL=organizations.mapper.js.map