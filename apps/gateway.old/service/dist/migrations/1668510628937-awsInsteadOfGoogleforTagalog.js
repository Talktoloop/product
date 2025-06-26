"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSInsteadOfGoogleforTagalog1668510628937 = void 0;
class AWSInsteadOfGoogleforTagalog1668510628937 {
    constructor() {
        this.tableName = 'language';
        this.columnName = 'provider';
        this.newProvider = 'aws';
        this.oldProvider = 'google';
    }
    async up(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, [this.newProvider, 'tl']);
    }
    async down(queryRunner) {
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`, [this.oldProvider, 'tl']);
    }
}
exports.AWSInsteadOfGoogleforTagalog1668510628937 = AWSInsteadOfGoogleforTagalog1668510628937;
//# sourceMappingURL=1668510628937-awsInsteadOfGoogleforTagalog.js.map