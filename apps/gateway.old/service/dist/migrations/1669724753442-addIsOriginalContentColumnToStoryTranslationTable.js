"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsOriginalContentColumnToStoryTranslationTable1669724753442 = void 0;
const typeorm_1 = require("typeorm");
class AddIsOriginalContentColumnToStoryTranslationTable1669724753442 {
    constructor() {
        this.tableName = 'story_translation';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'is_original_content',
            type: 'boolean',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddIsOriginalContentColumnToStoryTranslationTable1669724753442 = AddIsOriginalContentColumnToStoryTranslationTable1669724753442;
//# sourceMappingURL=1669724753442-addIsOriginalContentColumnToStoryTranslationTable.js.map