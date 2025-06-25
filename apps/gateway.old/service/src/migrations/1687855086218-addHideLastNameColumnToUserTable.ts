import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddHideLastNameColumnToUserTable1687855086218
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'hide_last_name',
    type: 'boolean',
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
