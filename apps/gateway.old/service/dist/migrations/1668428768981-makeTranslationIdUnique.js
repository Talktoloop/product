"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUniqueIndexToStoryTranslationId1668428768981 = void 0;
const typeorm_1 = require("typeorm");
class AddUniqueIndexToStoryTranslationId1668428768981 {
    constructor() {
        this.tableName = 'story_translation';
        this.indexName = 'IDXstoryTranslationId';
    }
    async up(queryRunner) {
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexName,
            columnNames: ['id'],
            isUnique: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex(this.tableName, this.indexName);
    }
}
exports.AddUniqueIndexToStoryTranslationId1668428768981 = AddUniqueIndexToStoryTranslationId1668428768981;
//# sourceMappingURL=1668428768981-makeTranslationIdUnique.js.map