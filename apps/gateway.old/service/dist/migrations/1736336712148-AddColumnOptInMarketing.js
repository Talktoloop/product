"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnOptInMarketing1736336712148 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnOptInMarketing1736336712148 {
    constructor() {
        this.tableName = 'user';
        this.columnName = 'optin_marketing';
        this.newColumn = new typeorm_1.TableColumn({
            name: this.columnName,
            type: 'boolean',
            isNullable: false,
            default: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.columnName);
    }
}
exports.AddColumnOptInMarketing1736336712148 = AddColumnOptInMarketing1736336712148;
//# sourceMappingURL=1736336712148-AddColumnOptInMarketing.js.map