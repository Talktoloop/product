"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageCodeToIdMapper = void 0;
const languageCodeToIdMapper = (languages) => {
    const data = {};
    for (const item of languages) {
        data[item.code] = item.id;
    }
    return data;
};
exports.languageCodeToIdMapper = languageCodeToIdMapper;
//# sourceMappingURL=langage-code-to-id.mapper.js.map