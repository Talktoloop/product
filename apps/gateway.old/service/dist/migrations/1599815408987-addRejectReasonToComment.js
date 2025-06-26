"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRejectReasonToComment1599815408987 = void 0;
const typeorm_1 = require("typeorm");
class AddRejectReasonToComment1599815408987 {
    constructor() {
        this.tableName = 'comment';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'reject_reason_id',
                type: 'int',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'reject_rationale',
                type: 'text',
                isNullable: true,
            }),
        ];
        this.indexName = 'IDX_COMMENT_REJECT_REASON_ID';
        this.fkName = 'fk_CommentRejectReason';
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
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
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddRejectReasonToComment1599815408987 = AddRejectReasonToComment1599815408987;
//# sourceMappingURL=1599815408987-addRejectReasonToComment.js.map