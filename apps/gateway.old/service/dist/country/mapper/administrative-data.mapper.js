"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrativeDataMapper = exports.filterAdministrativeDataByLanguage = exports.findAdministrativeDataByLanguage = void 0;
const class_transformer_1 = require("class-transformer");
const administrative_data_ro_1 = require("../response/administrative-data.ro");
const findAdministrativeDataByLanguage = (variants, userLanguageId, defaultLanguageId, defaultLanguageIdForAdministrativeData) => {
    let element = variants === null || variants === void 0 ? void 0 : variants.find((variant) => variant.languageId === userLanguageId);
    if (!element) {
        element = variants === null || variants === void 0 ? void 0 : variants.find((variant) => variant.languageId === defaultLanguageId);
    }
    return (element !== null && element !== void 0 ? element : variants === null || variants === void 0 ? void 0 : variants.find((variant) => variant.languageId === defaultLanguageIdForAdministrativeData));
};
exports.findAdministrativeDataByLanguage = findAdministrativeDataByLanguage;
const filterAdministrativeDataByLanguage = (administrativeData, userLanguageId, defaultLanguageId) => {
    const data = [];
    let languageId;
    let variants = [];
    administrativeData.forEach((value, index) => {
        var _a, _b;
        languageId = value.languageId;
        if (languageId && ((_a = administrativeData[index - 1]) === null || _a === void 0 ? void 0 : _a.id) !== value.id) {
            variants = [];
        }
        if (languageId) {
            variants.push(value);
        }
        if (languageId &&
            variants[0] &&
            ((_b = administrativeData[index + 1]) === null || _b === void 0 ? void 0 : _b.id) !== value.id) {
            const element = (0, exports.findAdministrativeDataByLanguage)(variants, userLanguageId, defaultLanguageId, variants[0].defaultLanguageIdForAdministrativeData);
            if (element) {
                data.push(element);
            }
            variants = [];
        }
        if (!languageId) {
            data.push(value);
        }
    });
    if (variants[0]) {
        const element = (0, exports.findAdministrativeDataByLanguage)(variants, userLanguageId, defaultLanguageId, variants[0].defaultLanguageIdForAdministrativeData);
        if (element) {
            data.push(element);
        }
    }
    return data;
};
exports.filterAdministrativeDataByLanguage = filterAdministrativeDataByLanguage;
const administrativeDataMapper = (administrativeData, userLanguageId, defaultLanguage) => {
    const data = (0, exports.filterAdministrativeDataByLanguage)(administrativeData, userLanguageId, defaultLanguage.id);
    return data.map((item) => (0, class_transformer_1.plainToClass)(administrative_data_ro_1.AdministrativeDataRO, Object.assign(Object.assign({}, item), { hasChild: !!item.hasChild })));
};
exports.administrativeDataMapper = administrativeDataMapper;
//# sourceMappingURL=administrative-data.mapper.js.map