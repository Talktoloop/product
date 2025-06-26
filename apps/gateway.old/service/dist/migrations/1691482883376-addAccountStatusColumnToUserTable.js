"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAccountStatusColumnToUserTable1691482883376 = void 0;
const typeorm_1 = require("typeorm");
class addAccountStatusColumnToUserTable1691482883376 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'account_status',
            type: 'varchar',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.addAccountStatusColumnToUserTable1691482883376 = addAccountStatusColumnToUserTable1691482883376;
//# sourceMappingURL=1691482883376-addAccountStatusColumnToUserTable.js.map