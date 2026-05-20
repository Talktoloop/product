import { COMMENT_STATUS } from '@ourloop/shared';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCommentStatusType1648670170392
  implements MigrationInterface
{
  private tableName = 'comment';
  private columnName = 'status';
  private oldCommentData = {
    DRAFT: 0,
    ACCEPTED_BY_AUTHOR: 1,
    PUBLISHED: 2,
    REJECTED: 3,
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} varchar(100) NOT NULL`,
    );

    await Promise.all(
      Object.keys(this.oldCommentData).map(async (oldCommentStatus) => {
        await queryRunner.query(
          `UPDATE ${this.tableName} SET ${this.columnName} = '${
            COMMENT_STATUS[oldCommentStatus] ?? COMMENT_STATUS.PENDING_REVIEW
          }' WHERE ${this.columnName} = '${
            this.oldCommentData[oldCommentStatus]
          }'`,
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY ${this.columnName} int NOT NULL`,
    );
  }
}
