"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTextToStoryForRejectReason1599815371846 = void 0;
const typeorm_1 = require("typeorm");
class AddTextToStoryForRejectReason1599815371846 {
    constructor() {
        this.tableName = 'story';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'reject_rationale',
            type: 'text',
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
exports.AddTextToStoryForRejectReason1599815371846 = AddTextToStoryForRejectReason1599815371846;
//# sourceMappingURL=1599815371846-addTextToStoryForRejectReason.js.map