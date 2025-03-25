import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsEnabledColumnToUserTable1695736169582
  implements MigrationInterface
{
  tableName = 'user';
  column = new TableColumn({
    name: 'is_enabled',
    type: 'boolean',
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
