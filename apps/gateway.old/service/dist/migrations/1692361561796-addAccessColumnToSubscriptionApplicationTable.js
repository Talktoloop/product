"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAccessColumnToSubscriptionApplicationTable1692361561796 = void 0;
const typeorm_1 = require("typeorm");
class addAccessColumnToSubscriptionApplicationTable1692361561796 {
    constructor() {
        this.tableName = 'subscription_application';
        this.column = new typeorm_1.TableColumn({
            name: 'access',
            type: 'varchar',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.addAccessColumnToSubscriptionApplicationTable1692361561796 = addAccessColumnToSubscriptionApplicationTable1692361561796;
//# sourceMappingURL=1692361561796-addAccessColumnToSubscriptionApplicationTable.js.map