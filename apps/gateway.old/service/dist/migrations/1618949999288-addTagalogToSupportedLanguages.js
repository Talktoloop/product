"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagalogToSupportedLanguages1618949999288 = void 0;
class AddTagalogToSupportedLanguages1618949999288 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`machine_translated\`) VALUES (?, ?)`, ['tl', 1]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['tl']);
    }
}
exports.AddTagalogToSupportedLanguages1618949999288 = AddTagalogToSupportedLanguages1618949999288;
//# sourceMappingURL=1618949999288-addTagalogToSupportedLanguages.js.map