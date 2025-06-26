"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInvitationDateAndInvitedByColumnsToUser1692966806470 = void 0;
const typeorm_1 = require("typeorm");
class addInvitationDateAndInvitedByColumnsToUser1692966806470 {
    constructor() {
        this.tableName = 'user';
        this.foreignKeyInvitedBy = 'fkInvitedByUser';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'invitation_date',
                type: 'datetime',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'invited_by',
                type: 'varchar',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.columns);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['invited_by'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKeyInvitedBy,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyInvitedBy);
        await queryRunner.dropColumns(this.tableName, this.columns);
    }
}
exports.addInvitationDateAndInvitedByColumnsToUser1692966806470 = addInvitationDateAndInvitedByColumnsToUser1692966806470;
//# sourceMappingURL=1692966806470-addInvitationDateAndInvitedByColumnsToUser.js.map