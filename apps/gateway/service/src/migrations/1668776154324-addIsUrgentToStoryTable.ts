import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsUrgentToStoryTable1668776154324
  implements MigrationInterface
{
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'is_urgent',
    type: 'boolean',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
