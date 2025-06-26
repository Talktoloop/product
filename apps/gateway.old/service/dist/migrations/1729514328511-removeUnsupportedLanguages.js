"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUnsupportedLanguages1729514328511 = void 0;
class RemoveUnsupportedLanguages1729514328511 {
    constructor() {
        this.supportedLanguagesCode = ['en', 'ar', 'fr', 'so', 'es'];
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE language SET visible = false WHERE code NOT IN (?)`, [this.supportedLanguagesCode]);
    }
    async down() { }
}
exports.RemoveUnsupportedLanguages1729514328511 = RemoveUnsupportedLanguages1729514328511;
//# sourceMappingURL=1729514328511-removeUnsupportedLanguages.js.map