"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVisibleToCaseManagerTable1646288499927 = void 0;
const typeorm_1 = require("typeorm");
class AddVisibleToCaseManagerTable1646288499927 {
    constructor() {
        this.tableName = 'case_manager';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'visible',
            type: 'boolean',
            default: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddVisibleToCaseManagerTable1646288499927 = AddVisibleToCaseManagerTable1646288499927;
//# sourceMappingURL=1646288499927-addVisibleToCaseManagerTable.js.map