"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUniqueKeyForLanguageIdAndCommentId1611918985726 = void 0;
const typeorm_1 = require("typeorm");
class AddUniqueKeyForLanguageIdAndCommentId1611918985726 {
    constructor() {
        this.tableName = 'comment_translation';
        this.index = new typeorm_1.TableIndex({
            name: 'IDXstoryTranslationStoryIdLanguageId',
            columnNames: ['comment_id', 'language_id'],
            isUnique: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.createIndex(this.tableName, this.index);
    }
    async down(queryRunner) {
        await queryRunner.dropIndex(this.tableName, this.index);
    }
}
exports.AddUniqueKeyForLanguageIdAndCommentId1611918985726 = AddUniqueKeyForLanguageIdAndCommentId1611918985726;
//# sourceMappingURL=1611918985726-addUniqueKeyForLanguageIdAndCommentId.js.map