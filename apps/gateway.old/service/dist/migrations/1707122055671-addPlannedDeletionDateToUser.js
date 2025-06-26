"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPlannedDeletionDateToUser1707122055671 = void 0;
const typeorm_1 = require("typeorm");
class AddPlannedDeletionDateToUser1707122055671 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'planned_deletion_date',
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
exports.AddPlannedDeletionDateToUser1707122055671 = AddPlannedDeletionDateToUser1707122055671;
//# sourceMappingURL=1707122055671-addPlannedDeletionDateToUser.js.map