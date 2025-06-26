"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLastActivityColumn1692181117338 = void 0;
const typeorm_1 = require("typeorm");
class addLastActivityColumn1692181117338 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'last_activity',
            type: 'datetime',
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
exports.addLastActivityColumn1692181117338 = addLastActivityColumn1692181117338;
//# sourceMappingURL=1692181117338-addLastActivityColumn.js.map