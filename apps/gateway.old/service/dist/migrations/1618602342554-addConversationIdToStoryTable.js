"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddConversationIdToStoryTable1618857537706 = void 0;
const typeorm_1 = require("typeorm");
class AddConversationIdToStoryTable1618857537706 {
    constructor() {
        this.tableName = 'story';
        this.foreignKeyConversationId = 'fk_StoryToConversationId';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'conversation_id',
            type: 'int',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['conversation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'conversation',
            name: this.foreignKeyConversationId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyConversationId);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddConversationIdToStoryTable1618857537706 = AddConversationIdToStoryTable1618857537706;
//# sourceMappingURL=1618602342554-addConversationIdToStoryTable.js.map