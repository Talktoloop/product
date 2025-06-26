"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIsUrgentToStoryTable1668776154324 = void 0;
const typeorm_1 = require("typeorm");
class AddIsUrgentToStoryTable1668776154324 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'is_urgent',
            type: 'boolean',
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
exports.AddIsUrgentToStoryTable1668776154324 = AddIsUrgentToStoryTable1668776154324;
//# sourceMappingURL=1668776154324-addIsUrgentToStoryTable.js.map