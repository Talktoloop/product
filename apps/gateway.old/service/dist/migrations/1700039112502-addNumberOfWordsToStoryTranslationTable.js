"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNumberOfWordsToStoryTranslationTable1700039112502 = void 0;
const typeorm_1 = require("typeorm");
class AddNumberOfWordsToStoryTranslationTable1700039112502 {
    constructor() {
        this.tableName = 'story_translation';
        this.column = new typeorm_1.TableColumn({
            name: 'number_of_words',
            type: 'smallint',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.AddNumberOfWordsToStoryTranslationTable1700039112502 = AddNumberOfWordsToStoryTranslationTable1700039112502;
//# sourceMappingURL=1700039112502-addNumberOfWordsToStoryTranslationTable.js.map