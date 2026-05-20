import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNullableTranslationForStory1617739341025
  implements MigrationInterface {
  private tableName = 'story_translation';
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
