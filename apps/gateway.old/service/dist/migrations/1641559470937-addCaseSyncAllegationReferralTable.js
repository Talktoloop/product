"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncAllegationReferralTable1641559470937 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncAllegationReferralTable1641559470937 {
    constructor() {
        this.tableName = 'case_sync_allegation_referral';
        this.foreignKeyUserId = 'FK_allegationReferralToCase';
        this.columns = [
            new typeorm_1.TableColumn({
                name: 'allegation_referral',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'response_to_allegation_referral',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                new typeorm_1.TableColumn({
                    name: 'allegation_referral_date',
                    type: 'datetime',
                    length: '6',
                    isNullable: true,
                }),
                new typeorm_1.TableColumn({
                    name: 'response_to_allegation_referral_date',
                    type: 'datetime',
                    length: '6',
                    isNullable: true,
                }),
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
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_allegationReferralCaseId',
            columnNames: ['case_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_id'],
            referencedColumnNames: ['case_uuid'],
            referencedTableName: 'case_sync',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`INSERT INTO ${this.tableName} (\`case_id\`, \`allegation_referral_date\`, \`response_to_allegation_referral_date\`)
          SELECT case_uuid, allegation_referral, response_to_allegation_referral FROM case_sync WHERE allegation_referral IS NOT NULL`);
        await queryRunner.dropColumns('case_sync', this.columns);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumns('case_sync', this.columns);
    }
}
exports.AddCaseSyncAllegationReferralTable1641559470937 = AddCaseSyncAllegationReferralTable1641559470937;
//# sourceMappingURL=1641559470937-addCaseSyncAllegationReferralTable.js.map