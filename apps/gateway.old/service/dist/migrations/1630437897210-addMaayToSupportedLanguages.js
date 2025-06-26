"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMaayToSupportedLanguages1630437897210 = void 0;
class AddMaayToSupportedLanguages1630437897210 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`, ['maa', null, 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['maa']);
    }
}
exports.AddMaayToSupportedLanguages1630437897210 = AddMaayToSupportedLanguages1630437897210;
//# sourceMappingURL=1630437897210-addMaayToSupportedLanguages.js.map