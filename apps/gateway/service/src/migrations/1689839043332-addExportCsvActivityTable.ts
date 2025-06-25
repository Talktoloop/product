import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableForeignKey,
} from 'typeorm';

export class addExportCsvActivityTable1689839043332
  implements MigrationInterface
{
  tableName = 'user_export_csv_activity';
  foreignKeyUserId = 'fkUserActivityToUser';
  indexUserId = 'idxUserActivityUserId';

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
            name: 'user_id',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'timestamp',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexUserId,
        columnNames: ['user_id'],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        name: this.foreignKeyUserId,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
    await queryRunner.dropTable(this.tableName);
  }
}
