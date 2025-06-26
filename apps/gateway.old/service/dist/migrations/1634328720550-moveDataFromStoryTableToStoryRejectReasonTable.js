"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDataFromStoryTableToStoryRejectReasonTable1634328720550 = void 0;
class MoveDataFromStoryTableToStoryRejectReasonTable1634328720550 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        await queryRunner.query(`
        INSERT INTO \`story_reject_reason\` (\`story_id\`, \`reject_reason_id\`, \`reject_reason_text\`) 
        SELECT id, reject_reason_id, reject_reason_text
        FROM  \`${this.tableName}\` 
        WHERE reject_reason_id IS NOT NULL
    `);
        await queryRunner.dropForeignKey(this.tableName, 'fk_StoryRejectReason');
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_id`);
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_text`);
    }
    async down() {
    }
}
exports.MoveDataFromStoryTableToStoryRejectReasonTable1634328720550 = MoveDataFromStoryTableToStoryRejectReasonTable1634328720550;
//# sourceMappingURL=1634328720550-moveDataFromStoryTableToStoryRejectReasonTable.js.map