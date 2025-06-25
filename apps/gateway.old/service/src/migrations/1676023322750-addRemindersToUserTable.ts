import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddRemindersToUserTable1676023322750
  implements MigrationInterface
{
  private tableName = 'user';
  private newColumn = new TableColumn({
    name: 'reminders',
    type: 'boolean',
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
