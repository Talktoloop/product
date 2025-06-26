"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178 = void 0;
class ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178 {
    constructor() {
        this.tableName = 'case_sync';
        this.columnName = 'author_need_assistance';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(200)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`);
    }
}
exports.ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178 = ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178;
//# sourceMappingURL=1642485790178-changeAuthorNeedAssistanceLengthInCaseSyncTable.js.map