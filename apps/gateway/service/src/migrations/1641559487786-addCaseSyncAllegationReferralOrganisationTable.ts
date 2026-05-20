import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCaseSyncAllegationReferralOrganisationTable1641559487786
  implements MigrationInterface {
  private tableName = 'case_sync_allegation_referral_organisation';
  private foreignKeyUserId = 'FK_organisationToAllegationReferral';
  private organisationAllegationColumn = new TableColumn({
    name: 'organisation_allegation',
    type: 'varchar',
    length: '50',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          new TableColumn({
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'allegation_referral_id',
            type: 'int',
            isNullable: false,
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: true,
          }),
          new TableColumn({
            name: 'type',
            type: 'varchar',
            length: '50',
            isNullable: true,
          }),
        ],
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDX_organisationAllegationReferral',
        columnNames: ['allegation_referral_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['allegation_referral_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'case_sync_allegation_referral',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );

    const allegationReferrals = await queryRunner.query(`
        SELECT ar.case_id, ar.id, ar.allegation_referral_date, ar.response_to_allegation_referral_date, c.organisation_allegation 
        FROM \`case_sync_allegation_referral\` ar JOIN \`case_sync\` c ON ar.case_id = c.case_uuid
    `);
    const operations = [];

    for (const allegationReferral of allegationReferrals) {
      operations.push(
        queryRunner.query(
          `INSERT INTO \`${this.tableName}\` (\`allegation_referral_id\`, \`name\`) VALUES (?, ?)`,
          [allegationReferral.id, allegationReferral.organisation_allegation],
        ),
      );
    }

    if (operations.length > 0) {
      await Promise.all(operations);
    }

    await queryRunner.dropColumn(
      'case_sync',
      this.organisationAllegationColumn,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
    await queryRunner.addColumn('case_sync', this.organisationAllegationColumn);
  }
}
