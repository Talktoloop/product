import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCaseSyncAllegationReferralTable1641559470937
  implements MigrationInterface {
  private tableName = 'case_sync_allegation_referral';
  private foreignKeyUserId = 'FK_allegationReferralToCase';
  private columns = [
    new TableColumn({
      name: 'allegation_referral',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'response_to_allegation_referral',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          new TableColumn({
            name: 'allegation_referral_date',
            type: 'datetime',
            length: '6',
            isNullable: true,
          }),
          new TableColumn({
            name: 'response_to_allegation_referral_date',
            type: 'datetime',
            length: '6',
            isNullable: true,
          }),
          new TableColumn({
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'case_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          }),
        ],
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDX_allegationReferralCaseId',
        columnNames: ['case_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['case_id'],
        referencedColumnNames: ['case_uuid'],
        referencedTableName: 'case_sync',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.query(
      `INSERT INTO ${this.tableName} (\`case_id\`, \`allegation_referral_date\`, \`response_to_allegation_referral_date\`)
          SELECT case_uuid, allegation_referral, response_to_allegation_referral FROM case_sync WHERE allegation_referral IS NOT NULL`,
    );
    await queryRunner.dropColumns('case_sync', this.columns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
    await queryRunner.addColumns('case_sync', this.columns);
  }
}
