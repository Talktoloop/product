import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class AddCaseSyncSurvivorDisabilityTable1636350577547
  implements MigrationInterface {
  private tableName = 'case_sync_survivor_disability';
  private foreignKeyUserId = 'FK_survivorDisabilityToCase';
  private column = new TableColumn({
    name: 'survivor_disability',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      }),
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: 'IDX_disabilityCaseId',
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
      `INSERT INTO ${this.tableName} (\`case_id\`, \`survivor_disability\`)
        SELECT case_uuid, survivor_disability FROM case_sync WHERE survivor_disability IS NOT NULL`,
    );
    await queryRunner.dropColumn('case_sync', this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
    await queryRunner.addColumn('case_sync', this.column);
  }
}
