"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveGermanFromLanguageTable1614588641003 = void 0;
class RemoveGermanFromLanguageTable1614588641003 {
    constructor() {
        this.tableName = 'language';
        this.languageCode = 'de';
    }
    async up(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [this.languageCode]);
    }
    async down(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`machine_translated\`) VALUES (?, ?, ?)`, [this.languageCode, false, true]);
    }
}
exports.RemoveGermanFromLanguageTable1614588641003 = RemoveGermanFromLanguageTable1614588641003;
//# sourceMappingURL=1614588641003-removeGermanFromLanguageTable.js.map