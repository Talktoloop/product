"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIndonesianToSupportedLanguage1630442747951 = void 0;
class AddIndonesianToSupportedLanguage1630442747951 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`, ['ind', 'aws', 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['ind']);
    }
}
exports.AddIndonesianToSupportedLanguage1630442747951 = AddIndonesianToSupportedLanguage1630442747951;
//# sourceMappingURL=1630442747951-addIndonesianToSupportedLanguage.js.map