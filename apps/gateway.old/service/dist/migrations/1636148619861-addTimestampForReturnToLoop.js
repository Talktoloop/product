"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestampForReturnToLoop1636148619861 = void 0;
const typeorm_1 = require("typeorm");
class AddTimestampForReturnToLoop1636148619861 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'case_manager_returned_at',
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
exports.AddTimestampForReturnToLoop1636148619861 = AddTimestampForReturnToLoop1636148619861;
//# sourceMappingURL=1636148619861-addTimestampForReturnToLoop.js.map