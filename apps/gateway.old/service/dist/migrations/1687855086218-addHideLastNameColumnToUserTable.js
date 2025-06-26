"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHideLastNameColumnToUserTable1687855086218 = void 0;
const typeorm_1 = require("typeorm");
class AddHideLastNameColumnToUserTable1687855086218 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'hide_last_name',
            type: 'boolean',
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.AddHideLastNameColumnToUserTable1687855086218 = AddHideLastNameColumnToUserTable1687855086218;
//# sourceMappingURL=1687855086218-addHideLastNameColumnToUserTable.js.map