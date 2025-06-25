import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoveDataFromCommentTableToCommentRejectReasonTable1634330495242
  implements MigrationInterface {
  private tableName = 'comment';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO \`comment_reject_reason\` (\`comment_id\`, \`reject_reason_id\`, \`reject_reason_text\`) 
          SELECT id, reject_reason_id, reject_reason_text
          FROM  \`${this.tableName}\` 
          WHERE reject_reason_id IS NOT NULL
      `);
    await queryRunner.dropForeignKey(this.tableName, 'fk_CommentRejectReason');
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_id`,
    );
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` DROP COLUMN reject_reason_text`,
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
