"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSomaliToSupportedLangauges1618428850803 = void 0;
class AddSomaliToSupportedLangauges1618428850803 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`machine_translated\`) VALUES (?, ?)`, ['so', 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['so']);
    }
}
exports.AddSomaliToSupportedLangauges1618428850803 = AddSomaliToSupportedLangauges1618428850803;
//# sourceMappingURL=1618428850803-addSomaliToSupportedLangauges.js.map