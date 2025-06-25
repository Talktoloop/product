import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addAccessColumnToSubscriptionApplicationTable1692361561796
  implements MigrationInterface
{
  tableName = 'subscription_application';
  column = new TableColumn({
    name: 'access',
    type: 'varchar',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
