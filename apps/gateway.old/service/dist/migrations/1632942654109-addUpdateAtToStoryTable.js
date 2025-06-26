"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUpdateAtToStoryTable1632942654109 = void 0;
const typeorm_1 = require("typeorm");
class AddUpdateAtToStoryTable1632942654109 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'updated_at',
            type: 'datetime',
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
exports.AddUpdateAtToStoryTable1632942654109 = AddUpdateAtToStoryTable1632942654109;
//# sourceMappingURL=1632942654109-addUpdateAtToStoryTable.js.map