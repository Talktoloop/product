import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixWhatsappPageId1644936034374 implements MigrationInterface {
  name = 'fixWhatsappPageId1644936034374';
  tableName = 'messenger_conversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const conversations: {
      id: string;
      story_id: string;
      channel: string;
      page_id: string;
    }[] = await queryRunner.query(`select mc.id, mc.story_id, channel, page_id  from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id where s.channel = 'whatsapp'`);

    for (const conversation of conversations) {
      const newPageId = conversation.page_id.includes('whatsapp:')
        ? conversation.page_id
        : `whatsapp:${conversation.page_id}`;

      await queryRunner.query(
        `UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const conversations: {
      id: string;
      story_id: string;
      channel: string;
      page_id: string;
    }[] = await queryRunner.query(`select mc.id, mc.story_id, channel, page_id  from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id where s.channel = 'whatsapp'`);

    for (const conversation of conversations) {
      const newPageId = conversation.page_id.replace('whatsapp:', '');

      await queryRunner.query(
        `UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `,
      );
    }
  }
}
