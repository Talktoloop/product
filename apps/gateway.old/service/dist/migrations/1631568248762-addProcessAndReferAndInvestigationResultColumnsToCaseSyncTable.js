"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762 = void 0;
const typeorm_1 = require("typeorm");
class AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'process_and_refer_status',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_result',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762 = AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762;
//# sourceMappingURL=1631568248762-addProcessAndReferAndInvestigationResultColumnsToCaseSyncTable.js.map