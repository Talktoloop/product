"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable1635550192224 = void 0;
const typeorm_1 = require("typeorm");
class addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable1635550192224 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'has_the_survivor_been_rendered_assistance_value',
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
exports.addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable1635550192224 = addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable1635550192224;
//# sourceMappingURL=1635550192224-addHasTheSurvivorBeenRenderedAssistanceValueToCaseSyncTable.js.map