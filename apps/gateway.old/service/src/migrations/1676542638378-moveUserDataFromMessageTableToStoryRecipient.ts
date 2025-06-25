import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoveUserDataFromMessageTableToStoryRecipient1676542638378
  implements MigrationInterface
{
  table = 'message';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const data = await queryRunner.query(
      `SELECT m.sender, s.recipient_id FROM \`${this.table}\` m JOIN \`story\` s ON m.story_id = s.id WHERE m.story_id IS NOT NULL`,
    );

    for (const item of data) {
      await queryRunner.query(
        `UPDATE \`story_recipient\` SET \`phone\` = ? WHERE id = ? and phone is null`,
        [item.sender, item.recipient_id],
      );
    }

    await queryRunner.query(
      `UPDATE \`${this.table}\` SET \`sender\` = NULL WHERE is_user = 1`,
    );

    await queryRunner.query(
      `UPDATE \`${this.table}\` SET \`recipient\` = NULL WHERE is_user = 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const data = await queryRunner.query(
      `SELECT sr.phone, s.conversation_id FROM \`story_recipient\` sr JOIN \`story\` s ON s.recipient_id = sr.id WHERE s.channel = 'sms'`,
    );

    for (const item of data) {
      await queryRunner.query(
        `UPDATE \`${this.table}\` SET \`sender\` = ? WHERE conversation_id = ? and is_user = 1`,
        [item.phone, item.conversation_id],
      );

      await queryRunner.query(
        `UPDATE \`${this.table}\` SET \`recipient\` = ? WHERE conversation_id = ? and is_user = 0`,
        [item.phone, item.conversation_id],
      );
    }
  }
}
