"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCaseSyncAllegationReferralOrganisationTable1641559487786 = void 0;
const typeorm_1 = require("typeorm");
class AddCaseSyncAllegationReferralOrganisationTable1641559487786 {
    constructor() {
        this.tableName = 'case_sync_allegation_referral_organisation';
        this.foreignKeyUserId = 'FK_organisationToAllegationReferral';
        this.organisationAllegationColumn = new typeorm_1.TableColumn({
            name: 'organisation_allegation',
            type: 'varchar',
            length: '50',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                new typeorm_1.TableColumn({
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                }),
                new typeorm_1.TableColumn({
                    name: 'allegation_referral_id',
                    type: 'int',
                    isNullable: false,
                }),
                new typeorm_1.TableColumn({
                    name: 'name',
                    type: 'varchar',
                    length: '50',
                    isNullable: true,
                }),
                new typeorm_1.TableColumn({
                    name: 'type',
                    type: 'varchar',
                    length: '50',
                    isNullable: true,
                }),
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: 'IDX_organisationAllegationReferral',
            columnNames: ['allegation_referral_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['allegation_referral_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'case_sync_allegation_referral',
            name: this.foreignKeyUserId,
            onDelete: 'CASCADE',
        }));
        const allegationReferrals = await queryRunner.query(`
        SELECT ar.case_id, ar.id, ar.allegation_referral_date, ar.response_to_allegation_referral_date, c.organisation_allegation 
        FROM \`case_sync_allegation_referral\` ar JOIN \`case_sync\` c ON ar.case_id = c.case_uuid
    `);
        const operations = [];
        for (const allegationReferral of allegationReferrals) {
            operations.push(queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`allegation_referral_id\`, \`name\`) VALUES (?, ?)`, [allegationReferral.id, allegationReferral.organisation_allegation]));
        }
        if (operations.length > 0) {
            await Promise.all(operations);
        }
        await queryRunner.dropColumn('case_sync', this.organisationAllegationColumn);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
        await queryRunner.addColumn('case_sync', this.organisationAllegationColumn);
    }
}
exports.AddCaseSyncAllegationReferralOrganisationTable1641559487786 = AddCaseSyncAllegationReferralOrganisationTable1641559487786;
//# sourceMappingURL=1641559487786-addCaseSyncAllegationReferralOrganisationTable.js.map