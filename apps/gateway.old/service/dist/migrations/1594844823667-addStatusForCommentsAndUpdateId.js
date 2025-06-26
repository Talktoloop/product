"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStatusForCommentsAndUpdateId1594844823667 = void 0;
const typeorm_1 = require("typeorm");
class AddStatusForCommentsAndUpdateId1594844823667 {
    constructor() {
        this.tableName = 'comment';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'status',
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
exports.AddStatusForCommentsAndUpdateId1594844823667 = AddStatusForCommentsAndUpdateId1594844823667;
//# sourceMappingURL=1594844823667-addStatusForCommentsAndUpdateId.js.map