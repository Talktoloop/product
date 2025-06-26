"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExportCsvActivityTable1689839043332 = void 0;
const typeorm_1 = require("typeorm");
class addExportCsvActivityTable1689839043332 {
    constructor() {
        this.tableName = 'user_export_csv_activity';
        this.foreignKeyUserId = 'fkUserActivityToUser';
        this.indexUserId = 'idxUserActivityUserId';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'timestamp',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexUserId,
            columnNames: ['user_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.addExportCsvActivityTable1689839043332 = addExportCsvActivityTable1689839043332;
//# sourceMappingURL=1689839043332-addExportCsvActivityTable.js.map