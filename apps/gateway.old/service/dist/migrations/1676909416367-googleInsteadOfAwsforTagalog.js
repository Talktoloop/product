"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleInsteadOfAwsforTagalog1676909416367 = void 0;
class googleInsteadOfAwsforTagalog1676909416367 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
        this.newProvider = 'google';
        this.oldProvider = 'aws';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, [this.newProvider, 'tl']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, [this.oldProvider, 'tl']);
    }
}
exports.googleInsteadOfAwsforTagalog1676909416367 = googleInsteadOfAwsforTagalog1676909416367;
//# sourceMappingURL=1676909416367-googleInsteadOfAwsforTagalog.js.map