import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoveDataFromStoryTableToStoryRejectReasonTable1634328720550
  implements MigrationInterface {
  private tableName = 'story';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO \`story_reject_reason\` (\`story_id\`, \`reject_reason_id\`, \`reject_reason_text\`) 
        SELECT id, reject_reason_id, reject_reason_text
        FROM  \`${this.tableName}\` 
        WHERE reject_reason_id IS NOT NULL
    `);
    await queryRunner.dropForeignKey(this.tableName, 'fk_StoryRejectReason');
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
