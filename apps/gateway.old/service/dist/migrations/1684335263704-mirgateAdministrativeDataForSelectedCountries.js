"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrateAdministrativeDataForSelectedCountries1684335263704 = void 0;
class MigrateAdministrativeDataForSelectedCountries1684335263704 {
    constructor() {
        this.tableName = 'country_administrative_area_name';
        this.countries = [
            'ca',
            'za',
            'gb',
            'zw',
            'zm',
            'so',
            'ph',
            'ls',
            'ke',
            'kh',
            'id',
            'et',
        ];
    }
    async up(queryRunner) {
        const countries = await queryRunner.query(`SELECT \`id\` FROM \`country\` WHERE \`code\` IN (?)`, [this.countries]);
        const language = await queryRunner
            .query(`SELECT \`id\` FROM \`language\` WHERE \`code\` = 'en'`)
            .then((result) => result[0]);
        await queryRunner.query(`INSERT INTO  \`country_administrative_area_name\` (language_id, administrative_area_id, name) 
      SELECT ${language.id} as language_id, id, name FROM \`country_administrative_area\` WHERE \`country_id\` IN (?)`, [countries.map((country) => country.id)]);
    }
    async down() {
    }
}
exports.MigrateAdministrativeDataForSelectedCountries1684335263704 = MigrateAdministrativeDataForSelectedCountries1684335263704;
//# sourceMappingURL=1684335263704-mirgateAdministrativeDataForSelectedCountries.js.map