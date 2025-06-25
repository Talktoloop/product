import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEditedColumnToStoryTable1704888404026
  implements MigrationInterface
{
  tableName = 'story';
  column = new TableColumn({
    name: 'edited',
    type: 'boolean',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
