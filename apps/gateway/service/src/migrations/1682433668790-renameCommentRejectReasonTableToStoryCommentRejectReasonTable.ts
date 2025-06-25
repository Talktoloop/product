import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCommentRejectReasonTableToStoryCommentRejectReasonTable1682433668790
  implements MigrationInterface
{
  oldTableName = 'comment_reject_reason';
  newTableName = 'story_comment_reject_reason';

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
