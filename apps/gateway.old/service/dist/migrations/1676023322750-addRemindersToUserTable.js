"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRemindersToUserTable1676023322750 = void 0;
const typeorm_1 = require("typeorm");
class AddRemindersToUserTable1676023322750 {
    constructor() {
        this.tableName = 'user';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'reminders',
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
exports.AddRemindersToUserTable1676023322750 = AddRemindersToUserTable1676023322750;
//# sourceMappingURL=1676023322750-addRemindersToUserTable.js.map