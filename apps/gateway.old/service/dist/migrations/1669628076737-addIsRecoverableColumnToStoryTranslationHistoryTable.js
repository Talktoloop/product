"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737 = void 0;
const typeorm_1 = require("typeorm");
class AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737 {
    constructor() {
        this.tableName = 'story_translation_history';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'is_recoverable',
            type: 'boolean',
            isNullable: false,
            default: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`is_recoverable\` = false WHERE content = ''`);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737 = AddIsRecoverableColumnToStoryTranslationHistoryTable1669628076737;
//# sourceMappingURL=1669628076737-addIsRecoverableColumnToStoryTranslationHistoryTable.js.map