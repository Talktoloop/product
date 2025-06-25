import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addAccountStatusColumnToUserTable1691482883376
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'account_status',
    type: 'varchar',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
