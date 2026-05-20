import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCommentTableToStoryCommentTable1677833203085
  implements MigrationInterface
{
  oldTableName = 'comment';
  newTableName = 'story_comment';

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
