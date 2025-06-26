"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUniqueKeyForLanguageIdAndStoryId1611918975644 = void 0;
const typeorm_1 = require("typeorm");
class AddUniqueKeyForLanguageIdAndStoryId1611918975644 {
    constructor() {
        this.tableName = 'story_translation';
        this.index = new typeorm_1.TableIndex({
            name: 'IDXstoryTranslationStoryIdLanguageId',
            columnNames: ['story_id', 'language_id'],
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
exports.AddUniqueKeyForLanguageIdAndStoryId1611918975644 = AddUniqueKeyForLanguageIdAndStoryId1611918975644;
//# sourceMappingURL=1611918975644-addUniqueKeyForLanguageIdAndStoryId.js.map