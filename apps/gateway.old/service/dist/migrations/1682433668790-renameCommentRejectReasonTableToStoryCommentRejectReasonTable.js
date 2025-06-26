"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790 = void 0;
class RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790 {
    constructor() {
        this.oldTableName = 'comment_reject_reason';
        this.newTableName = 'story_comment_reject_reason';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790 = RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790;
//# sourceMappingURL=1682433668790-renameCommentRejectReasonTableToStoryCommentRejectReasonTable.js.map