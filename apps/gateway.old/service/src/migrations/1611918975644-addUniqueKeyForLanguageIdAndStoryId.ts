import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddUniqueKeyForLanguageIdAndStoryId1611918975644
  implements MigrationInterface {
  private tableName = 'story_translation';
  private index = new TableIndex({
    name: 'IDXstoryTranslationStoryIdLanguageId',
    columnNames: ['story_id', 'language_id'],
    isUnique: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(this.tableName, this.index);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.index);
  }
}
