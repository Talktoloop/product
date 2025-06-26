"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBembaToSupportedLanguages1623097580724 = void 0;
class addBembaToSupportedLanguages1623097580724 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`code\` varchar(3);`);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`visible\`, \`provider\`) VALUES (?, ?, ?)`, ['bem', 1, null]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['bem']);
    }
}
exports.addBembaToSupportedLanguages1623097580724 = addBembaToSupportedLanguages1623097580724;
//# sourceMappingURL=1623097580724-addBembaToSupportedLanguages.js.map