"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveColumnTitleFromStoryTable1611642295025 = void 0;
const typeorm_1 = require("typeorm");
class RemoveColumnTitleFromStoryTable1611642295025 {
    constructor() {
        this.tableName = 'story';
        this.column = new typeorm_1.TableColumn({
            name: 'title',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
}
exports.RemoveColumnTitleFromStoryTable1611642295025 = RemoveColumnTitleFromStoryTable1611642295025;
//# sourceMappingURL=1611542285025-removeColumnTitleFromStoryTable.js.map