"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373 = void 0;
class SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373 {
    constructor() {
        this.tableName = 'country';
        this.countryCode = 'de';
        this.languageCode = 'de';
    }
    async up(queryRunner) {
        var _a;
        const languages = await queryRunner.query(`SELECT \`id\`, \`code\` FROM \`language\``);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`, [
            (_a = languages.find((item) => item.code === this.languageCode)) === null || _a === void 0 ? void 0 : _a.id,
            this.countryCode,
        ]);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = null WHERE code = ?`, [this.countryCode]);
    }
}
exports.SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373 = SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373;
//# sourceMappingURL=1684490838373-setDefaultLanguageForAdministrativeDataForGermanLanguage.js.map