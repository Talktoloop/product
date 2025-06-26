"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderToCategoryTable1630349179509 = void 0;
const typeorm_1 = require("typeorm");
class addOrderToCategoryTable1630349179509 {
    constructor() {
        this.tableName = 'category';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'order',
            type: 'smallint',
            length: '2',
        });
        this.order = {
            thanks: 1,
            question: 2,
            opinion: 3,
            suggestion: 4,
            concern: 5,
        };
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        const operations = [];
        for (const [key, value] of Object.entries(this.order)) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`order\` = ? WHERE \`code\` = ?`, [value, key]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.addOrderToCategoryTable1630349179509 = addOrderToCategoryTable1630349179509;
//# sourceMappingURL=1630349179509-addOrderToCategoryTable.js.map