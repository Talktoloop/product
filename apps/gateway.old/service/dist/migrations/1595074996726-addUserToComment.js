"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserToComment1595074996726 = void 0;
const typeorm_1 = require("typeorm");
class AddUserToComment1595074996726 {
    constructor() {
        this.tableName = 'comment';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
        this.indexUserName = 'IDX_COMMENT_USER_ID';
        this.fkUserName = 'fk_CommentUser';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexUserName,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.fkUserName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddUserToComment1595074996726 = AddUserToComment1595074996726;
//# sourceMappingURL=1595074996726-addUserToComment.js.map