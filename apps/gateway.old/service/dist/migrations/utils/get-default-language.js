"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDefaultLanguage = async (queryRunner) => {
    return queryRunner
        .query(`SELECT \`id\` FROM \`language\` WHERE is_default iS TRUE`)
        .then((result) => result.pop());
};
exports.default = getDefaultLanguage;
//# sourceMappingURL=get-default-language.js.map