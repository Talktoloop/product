"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGermanLanguageToLanguageTable1684490706211 = void 0;
class AddGermanLanguageToLanguageTable1684490706211 {
    constructor() {
        this.tableName = 'language';
        this.languageCode = 'de';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`visible\`) VALUES (?, ?, ?)`, [this.languageCode, false, false]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [this.languageCode]);
    }
}
exports.AddGermanLanguageToLanguageTable1684490706211 = AddGermanLanguageToLanguageTable1684490706211;
//# sourceMappingURL=1684490706211-addGermanLanguageToLanguageTable.js.map