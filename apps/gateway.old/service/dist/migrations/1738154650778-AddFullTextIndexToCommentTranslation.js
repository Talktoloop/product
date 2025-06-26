"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFullTextIndexToCommentTranslation1738154650778 = void 0;
class AddFullTextIndexToCommentTranslation1738154650778 {
    constructor() {
        this.translationTableName = 'story_comment_translation';
        this.columnToIndex = 'content';
        this.indexName = 'IDX_FullText_Content';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE FULLTEXT INDEX ${this.indexName} ON ${this.translationTableName}(${this.columnToIndex})`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX ${this.indexName} ON ${this.translationTableName}`);
    }
}
exports.AddFullTextIndexToCommentTranslation1738154650778 = AddFullTextIndexToCommentTranslation1738154650778;
//# sourceMappingURL=1738154650778-AddFullTextIndexToCommentTranslation.js.map