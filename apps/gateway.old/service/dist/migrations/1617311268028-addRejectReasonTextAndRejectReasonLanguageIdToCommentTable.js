"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRejectReasonTextAndRejectReasonLanguageIdToCommentTable1617311268028 = void 0;
const typeorm_1 = require("typeorm");
class AddRejectReasonTextAndRejectReasonLanguageIdToCommentTable1617311268028 {
    constructor() {
        this.tableName = 'comment';
        this.foreignKeyName = 'FKcommentRejectReasonToLanguage';
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
exports.AddRejectReasonTextAndRejectReasonLanguageIdToCommentTable1617311268028 = AddRejectReasonTextAndRejectReasonLanguageIdToCommentTable1617311268028;
//# sourceMappingURL=1617311268028-addRejectReasonTextAndRejectReasonLanguageIdToCommentTable.js.map