"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentRejectReasonTable1634330277727 = void 0;
const typeorm_1 = require("typeorm");
class AddCommentRejectReasonTable1634330277727 {
    constructor() {
        this.tableName = 'comment_reject_reason';
        this.foreignKeyCommentId = 'FK_commentRejectReasonToComment';
        this.foreignKeyRejectReasonId = 'FK_commentRejectReasonToRejectReason';
        this.rejectReasonIdIndex = 'IDX_COMMENT_REJECT_REASON_ID';
        this.commentIdIndex = 'IDX_COMMENT_REJECT_REASON_COMMENT_ID';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'comment_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'reject_reason_id',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'reject_reason_text',
                    type: 'text',
                    isNullable: true,
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.rejectReasonIdIndex,
            columnNames: ['reject_reason_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['reject_reason_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reject_reason',
            name: this.foreignKeyRejectReasonId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.commentIdIndex,
            columnNames: ['comment_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'comment',
            name: this.foreignKeyCommentId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddCommentRejectReasonTable1634330277727 = AddCommentRejectReasonTable1634330277727;
//# sourceMappingURL=1634330277727-addCommentRejectReasonTable.js.map