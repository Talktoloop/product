import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddUniqueIndexToStoryTranslationId1668428768981 implements MigrationInterface {
  private tableName = 'story_translation';
  private indexName = 'IDXstoryTranslationId';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      this.tableName,
      new TableIndex({
        name: this.indexName,
        columnNames: ['id'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex(this.tableName, this.indexName);
  }
}