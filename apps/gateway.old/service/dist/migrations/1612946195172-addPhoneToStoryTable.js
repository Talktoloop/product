"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPhoneToStoryTable1612946195172 = void 0;
const typeorm_1 = require("typeorm");
class AddPhoneToStoryTable1612946195172 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'phone',
            type: 'varchar',
            length: '20',
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
exports.AddPhoneToStoryTable1612946195172 = AddPhoneToStoryTable1612946195172;
//# sourceMappingURL=1612946195172-addPhoneToStoryTable.js.map