"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsEnabledColumnToUserTable1695736169582 = void 0;
const typeorm_1 = require("typeorm");
class AddIsEnabledColumnToUserTable1695736169582 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'is_enabled',
            type: 'boolean',
            default: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.AddIsEnabledColumnToUserTable1695736169582 = AddIsEnabledColumnToUserTable1695736169582;
//# sourceMappingURL=1695736169582-addIsEnabledColumnToUserTable.js.map