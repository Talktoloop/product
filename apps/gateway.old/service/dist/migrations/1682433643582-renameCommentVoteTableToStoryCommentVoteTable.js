"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameCommentVoteTableToStoryCommentVoteTable1682433643582 = void 0;
class RenameCommentVoteTableToStoryCommentVoteTable1682433643582 {
    constructor() {
        this.oldTableName = 'comment_vote';
        this.newTableName = 'story_comment_vote';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.RenameCommentVoteTableToStoryCommentVoteTable1682433643582 = RenameCommentVoteTableToStoryCommentVoteTable1682433643582;
//# sourceMappingURL=1682433643582-renameCommentVoteTableToStoryCommentVoteTable.js.map