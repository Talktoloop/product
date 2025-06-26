"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDeleteAtColumnToCaseSyncTable1629317232270 = void 0;
const typeorm_1 = require("typeorm");
class addDeleteAtColumnToCaseSyncTable1629317232270 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'deleted_at',
            type: 'datetime',
            length: '6',
            isNullable: true,
            default: null,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.addDeleteAtColumnToCaseSyncTable1629317232270 = addDeleteAtColumnToCaseSyncTable1629317232270;
//# sourceMappingURL=1629317232270-addDeleteAtColumnToCaseSyncTable.js.map