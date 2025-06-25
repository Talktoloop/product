import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddUniqueKeyForLanguageIdAndCommentId1611918985726
  implements MigrationInterface {
  private tableName = 'comment_translation';
  private index = new TableIndex({
    name: 'IDXstoryTranslationStoryIdLanguageId',
    columnNames: ['comment_id', 'language_id'],
    isUnique: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(this.tableName, this.index);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.index);
  }
}
