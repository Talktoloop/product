"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameCommentTableToStoryCommentTable1677833203085 = void 0;
class RenameCommentTableToStoryCommentTable1677833203085 {
    constructor() {
        this.oldTableName = 'comment';
        this.newTableName = 'story_comment';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.RenameCommentTableToStoryCommentTable1677833203085 = RenameCommentTableToStoryCommentTable1677833203085;
//# sourceMappingURL=1677833203085-renameCommentTableToStoryCommentTable.js.map