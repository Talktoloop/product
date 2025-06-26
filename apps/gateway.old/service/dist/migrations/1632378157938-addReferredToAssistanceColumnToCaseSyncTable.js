"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReferredToAssistanceColumnToCaseSyncTable1632378157938 = void 0;
const typeorm_1 = require("typeorm");
class AddReferredToAssistanceColumnToCaseSyncTable1632378157938 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'referred_to_assistance',
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
exports.AddReferredToAssistanceColumnToCaseSyncTable1632378157938 = AddReferredToAssistanceColumnToCaseSyncTable1632378157938;
//# sourceMappingURL=1632378157938-addReferredToAssistanceColumnToCaseSyncTable.js.map