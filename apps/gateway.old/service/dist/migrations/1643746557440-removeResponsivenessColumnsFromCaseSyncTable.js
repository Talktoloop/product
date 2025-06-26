"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveResponsivenessColumnsFromCaseSyncTable1643746557440 = void 0;
class RemoveResponsivenessColumnsFromCaseSyncTable1643746557440 {
    constructor() {
        this.tableName = 'case_sync';
    }
    async up(queryRunner) {
        await queryRunner.query(`
        ALTER TABLE \`${this.tableName}\` 
        DROP COLUMN process_and_refer_responsiveness, 
        DROP COLUMN referral_response_responsiveness, 
        DROP COLUMN investigation_responsiveness, 
        DROP COLUMN investigation_result_responsiveness, 
        DROP COLUMN informing_author_responsiveness
    `);
    }
    async down() {
    }
}
exports.RemoveResponsivenessColumnsFromCaseSyncTable1643746557440 = RemoveResponsivenessColumnsFromCaseSyncTable1643746557440;
//# sourceMappingURL=1643746557440-removeResponsivenessColumnsFromCaseSyncTable.js.map