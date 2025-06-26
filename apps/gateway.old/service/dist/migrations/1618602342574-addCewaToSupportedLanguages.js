"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCewaToSupportedLanguages1618602342574 = void 0;
class AddCewaToSupportedLanguages1618602342574 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` modify COLUMN \`code\` varchar(3);`);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`machine_translated\`) VALUES (?, ?)`, ['cew', 0]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['cew']);
    }
}
exports.AddCewaToSupportedLanguages1618602342574 = AddCewaToSupportedLanguages1618602342574;
//# sourceMappingURL=1618602342574-addCewaToSupportedLanguages.js.map