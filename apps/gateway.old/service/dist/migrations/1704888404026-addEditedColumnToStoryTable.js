"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEditedColumnToStoryTable1704888404026 = void 0;
const typeorm_1 = require("typeorm");
class AddEditedColumnToStoryTable1704888404026 {
    constructor() {
        this.tableName = 'story';
        this.column = new typeorm_1.TableColumn({
            name: 'edited',
            type: 'boolean',
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
exports.AddEditedColumnToStoryTable1704888404026 = AddEditedColumnToStoryTable1704888404026;
//# sourceMappingURL=1704888404026-addEditedColumnToStoryTable.js.map