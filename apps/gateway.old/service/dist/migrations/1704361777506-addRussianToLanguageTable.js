"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRussianToLanguageTable1704361777506 = void 0;
class AddRussianToLanguageTable1704361777506 {
    constructor() {
        this.tableName = 'language';
        this.languageCode = 'ru';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`provider\`, \`transcribe_lang\`) VALUES (?, ?, ?, ?)`, [this.languageCode, false, 'aws', 'ru-RU']);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, [this.languageCode]);
    }
}
exports.AddRussianToLanguageTable1704361777506 = AddRussianToLanguageTable1704361777506;
//# sourceMappingURL=1704361777506-addRussianToLanguageTable.js.map