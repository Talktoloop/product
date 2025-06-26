"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecipientIdToCommentTable1676547084797 = void 0;
const typeorm_1 = require("typeorm");
class AddRecipientIdToCommentTable1676547084797 {
    constructor() {
        this.tableName = 'comment';
        this.indexRecipientId = 'IDX_COMMENT_RECIPIENT_ID';
        this.fkRecipientId = 'fk_CommentToStoryCommentRecipient';
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
            referencedTableName: 'story_comment_recipient',
            name: this.fkRecipientId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.fkRecipientId);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddRecipientIdToCommentTable1676547084797 = AddRecipientIdToCommentTable1676547084797;
//# sourceMappingURL=1676547084797-addRecipientIdToCommentTable.js.map