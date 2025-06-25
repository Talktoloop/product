import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNumberOfWordsToStoryTranslationTable1700039112502
  implements MigrationInterface
{
  tableName = 'story_translation';
  column = new TableColumn({
    name: 'number_of_words',
    type: 'smallint',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
