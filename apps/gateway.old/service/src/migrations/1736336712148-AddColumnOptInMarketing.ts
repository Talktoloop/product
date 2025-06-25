import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnOptInMarketing1736336712148
  implements MigrationInterface
{
  private tableName = 'user';
  private columnName = 'optin_marketing';
  private newColumn = new TableColumn({
    name: this.columnName,
    type: 'boolean',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnName);
  }
}
