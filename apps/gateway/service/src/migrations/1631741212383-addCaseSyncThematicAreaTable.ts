import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
  TableColumn,
} from 'typeorm';

export class AddCaseSyncThematicAreaTable1631741212383
  implements MigrationInterface {
  private tableName = 'case_sync_thematic_area';
  private foreignKeyUserId = 'FK_thematicAreaToCase';
  private column = new TableColumn({
    name: 'thematic_area',
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
            name: 'thematic_area',
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
        name: 'IDX_thematicAreaCaseId',
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
      `INSERT INTO ${this.tableName} (\`case_id\`, \`thematic_area\`)
        SELECT case_uuid, thematic_area FROM case_sync WHERE thematic_area IS NOT NULL`,
    );
    await queryRunner.dropColumn('case_sync', this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
    await queryRunner.addColumn('case_sync', this.column);
  }
}
