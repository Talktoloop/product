"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInsteadOfSuggestionInCategoryTable1652946063816 = void 0;
class RequestInsteadOfSuggestionInCategoryTable1652946063816 {
    constructor() {
        this.tableName = 'category';
        this.oldCode = 'suggestion';
        this.newCode = 'request';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`, [this.newCode, this.oldCode]);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`, [this.oldCode, this.newCode]);
    }
}
exports.RequestInsteadOfSuggestionInCategoryTable1652946063816 = RequestInsteadOfSuggestionInCategoryTable1652946063816;
//# sourceMappingURL=1652946063816-requestInsteadOfSuggestionInCategoryTable.js.map