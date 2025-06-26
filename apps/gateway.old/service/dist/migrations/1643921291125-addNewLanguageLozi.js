"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewLanguageLozi1643921291125 = void 0;
class AddNewLanguageLozi1643921291125 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`) VALUES (?, ?)`, ['loz', null]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`, ['loz']);
    }
}
exports.AddNewLanguageLozi1643921291125 = AddNewLanguageLozi1643921291125;
//# sourceMappingURL=1643921291125-addNewLanguageLozi.js.map