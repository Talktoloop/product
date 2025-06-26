"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAirtableNewColumnCaseAccountability1627938241688 = void 0;
const typeorm_1 = require("typeorm");
class AddAirtableNewColumnCaseAccountability1627938241688 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'case_accountability',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddAirtableNewColumnCaseAccountability1627938241688 = AddAirtableNewColumnCaseAccountability1627938241688;
//# sourceMappingURL=1627938241688-addAirtableNewColumnCaseAccountability.js.map