"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPolishToSupportedLanguages1647253054091 = void 0;
class AddPolishToSupportedLanguages1647253054091 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`visible\`, \`provider\`) VALUES (?, ?, ?)`, ['pl', 1, 'google']);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['pl']);
    }
}
exports.AddPolishToSupportedLanguages1647253054091 = AddPolishToSupportedLanguages1647253054091;
//# sourceMappingURL=1647253054091-addPolishToSupportedLanguages.js.map