"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncInvestigationTable1639686150844 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncInvestigationTable1639686150844 {
    constructor() {
        this.tableName = 'case_sync_investigation';
        this.foreignKeyUserId = 'FK_investigationToCase';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'investigation_opened',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_closed',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'which_organisation_doing_investigation',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_outcome',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'referral_to_clear_check_made',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: this.columns.concat([
                new typeorm_1.TableColumn({
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                }),
                new typeorm_1.TableColumn({
                    name: 'case_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                }),
            ]),
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_investigationCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`investigation_opened\`, \`investigation_closed\`,  \`which_organisation_doing_investigation\`, \`investigation_outcome\`, \`referral_to_clear_check_made\`)
          SELECT case_uuid, investigation_opened, investigation_closed, which_organisation_doing_investigation, investigation_outcome, referral_to_clear_check_made FROM case_sync WHERE investigation_opened IS NOT NULL`);
        await queryRunner.dropColumns('case_sync', this.columns);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumns('case_sync', this.columns);
    }
}
exports.AddCaseSyncInvestigationTable1639686150844 = AddCaseSyncInvestigationTable1639686150844;
//# sourceMappingURL=1639686150844-addCaseSyncInvestigationTable.js.map