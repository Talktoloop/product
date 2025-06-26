"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPublishedByColumnToStoryTable1664186826195 = void 0;
const typeorm_1 = require("typeorm");
class AddPublishedByColumnToStoryTable1664186826195 {
    constructor() {
        this.tableName = 'story';
        this.newColumnNickname = new typeorm_1.TableColumn({
            name: 'published_by',
            type: 'varchar',
            length: '36',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumnNickname);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumnNickname);
    }
}
exports.AddPublishedByColumnToStoryTable1664186826195 = AddPublishedByColumnToStoryTable1664186826195;
//# sourceMappingURL=1664186826195-AddPublishedByColumnToStoryTable.js.map