"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnsToUserTable1685442829210 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnsToUserTable1685442829210 {
    constructor() {
        this.tableName = 'user';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'first_name',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'last_name',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'type',
                type: 'enum',
                enum: ['individual', 'organisation-unit'],
                enumName: 'typeEnum',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.columns);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NULL`, ['individual']);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`type\` = ? WHERE \`nickname\` IS NOT NULL AND \`organisation_id\` IS NOT NULL`, ['organisation-unit']);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.columns);
    }
}
exports.AddColumnsToUserTable1685442829210 = AddColumnsToUserTable1685442829210;
//# sourceMappingURL=1685442829210-addColumnsToUserTable.js.map