"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnRejectReasonToStory1599653478681 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnRejectReasonToStory1599653478681 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'reject_reason_id',
            type: 'int',
            isNullable: true,
        });
        this.indexName = 'IDX_STORY_REJECT_REASON_ID';
        this.fkName = 'fk_StoryRejectReason';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexName,
            columnNames: ['reject_reason_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['reject_reason_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reject_reason',
            name: this.fkName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddColumnRejectReasonToStory1599653478681 = AddColumnRejectReasonToStory1599653478681;
//# sourceMappingURL=1599653478681-addColumnRejectReasonToStory.js.map