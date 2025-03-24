import { MigrationInterface, QueryRunner } from 'typeorm';
import { CHANNEL_CONSTANTS } from '../common/constant/channel.constant';

export class FixStoryChannelAndPageId1645020690596
  implements MigrationInterface
{
  storyTableName = 'story';
  conversationTableName = 'messenger_conversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const whatsAppPageId = '+260976256521';
    const FbPageId = '105269598511751';

    await queryRunner.query(
      `UPDATE \`${this.storyTableName}\` s
        JOIN \`${this.conversationTableName}\` c ON s.messenger_conversation_id = c.id
        SET s.channel = ?, c.page_id = ? WHERE c.sender_id LIKE 'whatsapp%'`,
      [CHANNEL_CONSTANTS.WHATSAPP, whatsAppPageId],
    );
    await queryRunner.query(
      `UPDATE \`${this.storyTableName}\` s
          JOIN \`${this.conversationTableName}\` c ON s.messenger_conversation_id = c.id
          SET s.channel = ?, c.page_id = ? WHERE c.sender_id NOT LIKE 'whatsapp%'`,
      [CHANNEL_CONSTANTS.MESSENGER, FbPageId],
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
