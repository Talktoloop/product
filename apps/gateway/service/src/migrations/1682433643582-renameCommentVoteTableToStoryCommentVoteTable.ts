import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameCommentVoteTableToStoryCommentVoteTable1682433643582
  implements MigrationInterface
{
  oldTableName = 'comment_vote';
  newTableName = 'story_comment_vote';

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
