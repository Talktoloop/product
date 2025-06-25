import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTranslationStatusToStory1616874622637
  implements MigrationInterface {
  private tableName = 'story_translation';
  private newColumn = new TableColumn({
    name: 'status',
    type: 'tinyint',
    default: 2,
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
