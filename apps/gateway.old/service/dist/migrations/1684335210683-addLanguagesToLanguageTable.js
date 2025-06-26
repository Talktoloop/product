"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLanguagesToLanguageTable1684335210683 = void 0;
class AddLanguagesToLanguageTable1684335210683 {
    constructor() {
        this.tableName = 'language';
        this.languageCodes = ['nl', 'lt'];
    }
    async up(queryRunner) {
        await Promise.all(this.languageCodes.map((value) => queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`visible\`) VALUES (?, ?, ?)`, [value, false, false])));
    }
    async down(queryRunner) {
        await Promise.all(this.languageCodes.map((value) => queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [value])));
    }
}
exports.AddLanguagesToLanguageTable1684335210683 = AddLanguagesToLanguageTable1684335210683;
//# sourceMappingURL=1684335210683-addLanguagesToLanguageTable.js.map