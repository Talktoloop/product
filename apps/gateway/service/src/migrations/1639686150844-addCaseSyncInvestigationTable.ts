import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCaseSyncInvestigationTable1639686150844
  implements MigrationInterface {
  private tableName = 'case_sync_investigation';
  private foreignKeyUserId = 'FK_investigationToCase';
  private columns = [
    new TableColumn({
      name: 'investigation_opened',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'investigation_closed',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'which_organisation_doing_investigation',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'investigation_outcome',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
    new TableColumn({
      name: 'referral_to_clear_check_made',
      type: 'varchar',
      length: '100',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: this.columns.concat([
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
        ]),
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDX_investigationCaseId',
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
      `INSERT INTO ${this.tableName} (\`case_id\`, \`investigation_opened\`, \`investigation_closed\`,  \`which_organisation_doing_investigation\`, \`investigation_outcome\`, \`referral_to_clear_check_made\`)
          SELECT case_uuid, investigation_opened, investigation_closed, which_organisation_doing_investigation, investigation_outcome, referral_to_clear_check_made FROM case_sync WHERE investigation_opened IS NOT NULL`,
    );
    await queryRunner.dropColumns('case_sync', this.columns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
    await queryRunner.addColumns('case_sync', this.columns);
  }
}
