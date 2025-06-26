"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCebuanoToSupportedLanguages1625515710024 = void 0;
class AddCebuanoToSupportedLanguages1625515710024 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`, ['ceb', 'google', 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['ceb']);
    }
}
exports.AddCebuanoToSupportedLanguages1625515710024 = AddCebuanoToSupportedLanguages1625515710024;
//# sourceMappingURL=1625515710024-addCebuanoToSupportedLanguages.js.map