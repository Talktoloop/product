"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoleToUserTable1595882499755 = void 0;
const typeorm_1 = require("typeorm");
class AddRoleToUserTable1595882499755 {
    constructor() {
        this.tableName = 'user';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'role',
            type: 'int',
            isNullable: false,
            default: 0,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddRoleToUserTable1595882499755 = AddRoleToUserTable1595882499755;
//# sourceMappingURL=1595882499755-addRoleToUserTable.js.map