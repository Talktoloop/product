"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncThematicAreaTable1631741212383 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncThematicAreaTable1631741212383 {
    constructor() {
        this.tableName = 'case_sync_thematic_area';
        this.foreignKeyUserId = 'FK_thematicAreaToCase';
        this.column = new typeorm_1.TableColumn({
            name: 'thematic_area',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
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
                    name: 'case_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'thematic_area',
                    type: 'varchar',
                    isNullable: false,
                    length: '100',
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_thematicAreaCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`thematic_area\`)
        SELECT case_uuid, thematic_area FROM case_sync WHERE thematic_area IS NOT NULL`);
        await queryRunner.dropColumn('case_sync', this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumn('case_sync', this.column);
    }
}
exports.AddCaseSyncThematicAreaTable1631741212383 = AddCaseSyncThematicAreaTable1631741212383;
//# sourceMappingURL=1631741212383-addCaseSyncThematicAreaTable.js.map