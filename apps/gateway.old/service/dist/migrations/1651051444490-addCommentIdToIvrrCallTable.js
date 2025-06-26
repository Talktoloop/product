"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommentIdToIvrrCallTable1651051444490 = void 0;
const typeorm_1 = require("typeorm");
class AddCommentIdToIvrrCallTable1651051444490 {
    constructor() {
        this.tableName = 'ivrr_call';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'comment_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
        this.foreignKeyCommentId = 'fk_IVRRCallToCommentId';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'comment',
            name: this.foreignKeyCommentId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCommentId);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddCommentIdToIvrrCallTable1651051444490 = AddCommentIdToIvrrCallTable1651051444490;
//# sourceMappingURL=1651051444490-addCommentIdToIvrrCallTable.js.map