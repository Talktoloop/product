"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeMapper = void 0;
const administrative_data_mapper_1 = require("./administrative-data.mapper");
const placeMapper = (data, userLanguageId, defaultLanguageId, countryDefaultLanguageId, divider = ', ') => {
    if (!data[0]) {
        return null;
    }
    return data
        .sort((prev, next) => next.level - prev.level)
        .map((item) => {
        var _a;
        const element = (0, administrative_data_mapper_1.findAdministrativeDataByLanguage)(item.names, userLanguageId, defaultLanguageId, countryDefaultLanguageId);
        return (_a = element === null || element === void 0 ? void 0 : element.name) !== null && _a !== void 0 ? _a : '';
    })
        .filter((value) => value)
        .join(divider);
};
exports.placeMapper = placeMapper;
//# sourceMappingURL=place.mapper.js.map