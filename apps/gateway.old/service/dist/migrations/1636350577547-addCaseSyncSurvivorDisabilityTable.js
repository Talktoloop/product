"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncSurvivorDisabilityTable1636350577547 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncSurvivorDisabilityTable1636350577547 {
    constructor() {
        this.tableName = 'case_sync_survivor_disability';
        this.foreignKeyUserId = 'FK_survivorDisabilityToCase';
        this.column = new typeorm_1.TableColumn({
            name: 'survivor_disability',
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
                    name: 'survivor_disability',
                    type: 'varchar',
                    isNullable: false,
                    length: '100',
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_disabilityCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`survivor_disability\`)
        SELECT case_uuid, survivor_disability FROM case_sync WHERE survivor_disability IS NOT NULL`);
        await queryRunner.dropColumn('case_sync', this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumn('case_sync', this.column);
    }
}
exports.AddCaseSyncSurvivorDisabilityTable1636350577547 = AddCaseSyncSurvivorDisabilityTable1636350577547;
//# sourceMappingURL=1636350577547-addCaseSyncSurvivorDisabilityTable.js.map