"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497 = void 0;
class SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497 {
    constructor() {
        this.tableName = 'country';
        this.countryCode = 'id';
        this.newLanguageCode = 'id';
        this.oldLanguageCode = 'en';
    }
    getLanguages(queryRunner) {
        return queryRunner.query(`SELECT \`id\`, \`code\` FROM \`language\``);
    }
    async up(queryRunner) {
        var _a, _b;
        const languages = await this.getLanguages(queryRunner);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`, [
            (_a = languages.find((item) => item.code === this.newLanguageCode)) === null || _a === void 0 ? void 0 : _a.id,
            this.countryCode,
        ]);
        await queryRunner.query(`UPDATE \`country_administrative_area_name\` caan JOIN \`country_administrative_area\` caa
      ON caan.administrative_area_id = caa.id JOIN \`country\` c ON caa.country_id = c.id
      SET caan.language_id = ? WHERE c.code = ?`, [
            (_b = languages.find((item) => item.code === this.newLanguageCode)) === null || _b === void 0 ? void 0 : _b.id,
            this.countryCode,
        ]);
    }
    async down(queryRunner) {
        var _a, _b;
        const languages = await this.getLanguages(queryRunner);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`, [
            (_a = languages.find((item) => item.code === this.oldLanguageCode)) === null || _a === void 0 ? void 0 : _a.id,
            this.countryCode,
        ]);
        await queryRunner.query(`UPDATE \`country_administrative_area_name\` caan JOIN \`country_administrative_area\` caa
      ON caan.administrative_area_id = caa.id
      SET caan.language_id = ? JOIN \`country\` c
      ON caa.country_id = c.id
      WHERE c.code = ?`, [
            (_b = languages.find((item) => item.code === this.oldLanguageCode)) === null || _b === void 0 ? void 0 : _b.id,
            this.countryCode,
        ]);
    }
}
exports.SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497 = SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497;
//# sourceMappingURL=1684820102497-setIndonesianAsDefaultLanguageIdForAdministrativeData.js.map