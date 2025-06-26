"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveDataFromCommentTableToCommentRejectReasonTable1634330495242 = void 0;
class MoveDataFromCommentTableToCommentRejectReasonTable1634330495242 {
    constructor() {
        this.tableName = 'comment';
    }
    async up(queryRunner) {
        await queryRunner.query(`
          INSERT INTO \`comment_reject_reason\` (\`comment_id\`, \`reject_reason_id\`, \`reject_reason_text\`) 
          SELECT id, reject_reason_id, reject_reason_text
          FROM  \`${this.tableName}\` 
          WHERE reject_reason_id IS NOT NULL
      `);
        await queryRunner.dropForeignKey(this.tableName, 'fk_CommentRejectReason');
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_id`);
        await queryRunner.query(`ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_text`);
    }
    async down() {
    }
}
exports.MoveDataFromCommentTableToCommentRejectReasonTable1634330495242 = MoveDataFromCommentTableToCommentRejectReasonTable1634330495242;
//# sourceMappingURL=1634330495242-moveDataFromCommentTableToCommentRejectReasonTable.js.map