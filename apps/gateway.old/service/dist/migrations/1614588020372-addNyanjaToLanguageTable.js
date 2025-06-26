"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNyanjaToLanguageTable1614588020372 = void 0;
class AddNyanjaToLanguageTable1614588020372 {
    constructor() {
        this.tableName = 'language';
        this.languageCode = 'ny';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`machine_translated\`) VALUES (?, ?, ?)`, [this.languageCode, false, false]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [this.languageCode]);
    }
}
exports.AddNyanjaToLanguageTable1614588020372 = AddNyanjaToLanguageTable1614588020372;
//# sourceMappingURL=1614588020372-addNyanjaToLanguageTable.js.map