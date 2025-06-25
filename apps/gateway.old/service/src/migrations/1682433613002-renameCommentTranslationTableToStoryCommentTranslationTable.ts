import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCommentTranslationTableToStoryCommentTranslationTable1682433613002
  implements MigrationInterface
{
  oldTableName = 'comment_translation';
  newTableName = 'story_comment_translation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.oldTableName} RENAME ${this.newTableName}`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.newTableName} RENAME ${this.oldTableName}`,
    );
  }
}
