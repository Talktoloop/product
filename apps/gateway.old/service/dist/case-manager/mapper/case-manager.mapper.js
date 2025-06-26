"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseManagerMapper = void 0;
const class_transformer_1 = require("class-transformer");
const case_manager_ro_1 = require("../response/case-manager.ro");
const caseManagerMapper = (caseManager, languageId) => {
    var _a;
    const translation = caseManager.languages.find((language) => language.languageId === languageId) ||
        caseManager.languages.find((language) => language.languageId === 1) ||
        caseManager.languages[0];
    return (0, class_transformer_1.plainToClass)(case_manager_ro_1.CaseManagerRO, Object.assign(Object.assign({}, caseManager), { text: (_a = translation === null || translation === void 0 ? void 0 : translation.text) !== null && _a !== void 0 ? _a : null }));
};
exports.caseManagerMapper = caseManagerMapper;
//# sourceMappingURL=case-manager.mapper.js.map