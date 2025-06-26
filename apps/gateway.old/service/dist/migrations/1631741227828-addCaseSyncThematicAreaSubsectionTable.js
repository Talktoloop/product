"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncThematicAreaSubsectionTable1631741227828 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncThematicAreaSubsectionTable1631741227828 {
    constructor() {
        this.tableName = 'case_sync_thematic_area_subsection';
        this.foreignKeyUserId = 'FK_thematicAreaSubsectionToCase';
        this.column = new typeorm_1.TableColumn({
            name: 'thematic_area_subsection',
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
                    name: 'thematic_area_subsection',
                    type: 'varchar',
                    isNullable: false,
                    length: '100',
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_thematicAreaSubsectionCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`thematic_area_subsection\`)
        SELECT case_uuid, thematic_area_subsection FROM case_sync WHERE thematic_area_subsection IS NOT NULL`);
        await queryRunner.dropColumn('case_sync', this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumn('case_sync', this.column);
    }
}
exports.AddCaseSyncThematicAreaSubsectionTable1631741227828 = AddCaseSyncThematicAreaSubsectionTable1631741227828;
//# sourceMappingURL=1631741227828-addCaseSyncThematicAreaSubsectionTable.js.map