"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultLanguagesForSudanAndUkraine1684480978975 = void 0;
class setDefaultLanguagesForSudanAndUkraine1684480978975 {
    constructor() {
        this.tableName = 'country';
        this.languages = {
            sd: 'ar',
            ua: 'uk',
        };
    }
    async up(queryRunner) {
        var _a;
        const languages = await queryRunner.query(`SELECT \`id\`, \`code\` FROM \`language\``);
        const operations = [];
        for (const [key, value] of Object.entries(this.languages)) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`, [(_a = languages.find((item) => item.code === value)) === null || _a === void 0 ? void 0 : _a.id, key]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        const operations = [];
        for (const key of Object.keys(this.languages)) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = null WHERE code = ?`, [key]));
        }
        await Promise.all(operations);
    }
}
exports.setDefaultLanguagesForSudanAndUkraine1684480978975 = setDefaultLanguagesForSudanAndUkraine1684480978975;
//# sourceMappingURL=1684480978975-setDefaultLanguagesForSudanAndUkraine.js.map