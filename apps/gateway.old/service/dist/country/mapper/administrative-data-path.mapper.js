"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrativeDataPathMapper = void 0;
const class_transformer_1 = require("class-transformer");
const administrative_data_path_ro_1 = require("../response/administrative-data-path.ro");
const administrative_data_mapper_1 = require("./administrative-data.mapper");
const administrativeDataPathMapper = (parents, userLanguageId, defaultLanguageId, defaultLanguageIdForAdministrativeData) => {
    const path = [];
    let variant;
    for (const parent of parents) {
        variant = (0, administrative_data_mapper_1.findAdministrativeDataByLanguage)(parent.names, userLanguageId, defaultLanguageId, defaultLanguageIdForAdministrativeData);
        if (variant === null || variant === void 0 ? void 0 : variant.name)
            path.push(variant.name);
    }
    return (0, class_transformer_1.plainToClass)(administrative_data_path_ro_1.AdministrativeDataPathRO, { path: path.join(', ') });
};
exports.administrativeDataPathMapper = administrativeDataPathMapper;
//# sourceMappingURL=administrative-data-path.mapper.js.map