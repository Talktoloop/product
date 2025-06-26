"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecipientIdToStoryTable1676282670248 = void 0;
const typeorm_1 = require("typeorm");
class AddRecipientIdToStoryTable1676282670248 {
    constructor() {
        this.tableName = 'story';
        this.indexRecipientId = 'IDX_STORY_RECIPIENT_ID';
        this.fkRecipientId = 'fk_StoryToStoryRecipient';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'recipient_id',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexRecipientId,
            columnNames: [this.newColumn.name],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: [this.newColumn.name],
            referencedColumnNames: ['id'],
            referencedTableName: 'story_recipient',
            name: this.fkRecipientId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.fkRecipientId);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddRecipientIdToStoryTable1676282670248 = AddRecipientIdToStoryTable1676282670248;
//# sourceMappingURL=1676282670248-addRecipientIdToStoryTable.js.map