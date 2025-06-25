import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPublishedByColumnToStoryTable1664186826195
  implements MigrationInterface
{
  private tableName = 'story';

  private newColumnNickname = new TableColumn({
    name: 'published_by',
    type: 'varchar',
    length: '36',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumnNickname);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumnNickname);
  }
}
