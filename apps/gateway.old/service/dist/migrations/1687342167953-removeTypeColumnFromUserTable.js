"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTypeColumnFromUserTable1687342167953 = void 0;
const typeorm_1 = require("typeorm");
class RemoveTypeColumnFromUserTable1687342167953 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'type',
            type: 'enum',
            enum: ['individual', 'organisation-unit'],
            enumName: 'typeEnum',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NULL`, ['individual']);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NOT NULL`, ['organisation-unit']);
    }
}
exports.RemoveTypeColumnFromUserTable1687342167953 = RemoveTypeColumnFromUserTable1687342167953;
//# sourceMappingURL=1687342167953-removeTypeColumnFromUserTable.js.map