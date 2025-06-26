"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597 = void 0;
const typeorm_1 = require("typeorm");
class addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597 {
    constructor() {
        this.tableName = 'story';
        this.foreignKeyName = 'FKstoryRejectReasonToLanguage';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'reject_reason_text',
                type: 'text',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'reject_reason_language_id',
                type: 'smallint',
                length: '2',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['reject_reason_language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyName,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597 = addRejectReasonTextAndRejectReasonLanguageIdToStoryTable1617311277597;
//# sourceMappingURL=1617311277597-addRejectReasonTextAndRejectReasonLanguageIdToStoryTable.js.map