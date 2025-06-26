"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUkraineToSupportedLanguages1647027601517 = void 0;
class AddUkraineToSupportedLanguages1647027601517 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`visible\`, \`provider\`) VALUES (?, ?, ?)`, ['ua', 1, 'google']);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['ua']);
    }
}
exports.AddUkraineToSupportedLanguages1647027601517 = AddUkraineToSupportedLanguages1647027601517;
//# sourceMappingURL=1647027601517-addUkraineToSupportedLanguages.js.map