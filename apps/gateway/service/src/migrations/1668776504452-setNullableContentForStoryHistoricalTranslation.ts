import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetNullableContentForStoryHistoricalTranslation1668776504452
  implements MigrationInterface
{
  private tableName = 'story_translation_history';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY content MEDIUMTEXT NOT NULL;`,
    );
  }
}
