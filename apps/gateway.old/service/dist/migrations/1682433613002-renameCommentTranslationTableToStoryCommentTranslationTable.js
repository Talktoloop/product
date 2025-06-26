"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002 = void 0;
class RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002 {
    constructor() {
        this.oldTableName = 'comment_translation';
        this.newTableName = 'story_comment_translation';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`);
    }
}
exports.RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002 = RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002;
//# sourceMappingURL=1682433613002-renameCommentTranslationTableToStoryCommentTranslationTable.js.map