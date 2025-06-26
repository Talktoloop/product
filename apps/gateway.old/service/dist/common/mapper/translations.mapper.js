"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationsMapper = void 0;
const class_transformer_1 = require("class-transformer");
const translation_1 = require("../../common/response/translation");
const helpers_1 = require("../../common/helpers");
const translationsMapper = (translations, selectedLanguageId, languageId, notAllowEmpty = true) => {
    return translations
        .filter((translation) => translation.languageId !== selectedLanguageId)
        .map((element) => {
        let content = element.content;
        if (!element.content && notAllowEmpty) {
            const reserveTranslation = (0, helpers_1.getTranslationByLanguageId)(translations, languageId, element.languageId);
            content = reserveTranslation.content;
        }
        return (0, class_transformer_1.plainToClass)(translation_1.TranslationRO, Object.assign(Object.assign({}, element), { code: element.language.code, content }));
    });
};
exports.translationsMapper = translationsMapper;
//# sourceMappingURL=translations.mapper.js.map