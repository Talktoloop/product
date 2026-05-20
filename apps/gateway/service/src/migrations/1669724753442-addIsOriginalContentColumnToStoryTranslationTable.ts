import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsOriginalContentColumnToStoryTranslationTable1669724753442
  implements MigrationInterface
{
  private tableName = 'story_translation';
  private newColumn = new TableColumn({
    name: 'is_original_content',
    type: 'boolean',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
