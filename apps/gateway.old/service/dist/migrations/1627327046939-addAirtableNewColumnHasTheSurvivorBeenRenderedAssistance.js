"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939 = void 0;
const typeorm_1 = require("typeorm");
class AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'has_the_survivor_been_rendered_assistance',
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
exports.AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939 = AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939;
//# sourceMappingURL=1627327046939-addAirtableNewColumnHasTheSurvivorBeenRenderedAssistance.js.map