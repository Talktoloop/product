"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFullTextIndexToStoryTranslation1732282619309 = void 0;
class AddFullTextIndexToStoryTranslation1732282619309 {
    constructor() {
        this.translationTableName = 'story_translation';
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
exports.AddFullTextIndexToStoryTranslation1732282619309 = AddFullTextIndexToStoryTranslation1732282619309;
//# sourceMappingURL=1732282619309-addFullTextIndexToStoryTranslation.js.map