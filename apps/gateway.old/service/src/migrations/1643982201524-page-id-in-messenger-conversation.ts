import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class pageIdInMessengerConversation1643982201524
  implements MigrationInterface
{
  name = 'pageIdInMessengerConversation1643982201524';
  tableName = 'messenger_conversation';

  column = new TableColumn({
    name: 'page_id',
    type: 'varchar',
    isNullable: true,
  });

  notNullColumn = new TableColumn({
    name: 'page_id',
    type: 'varchar',
    isNullable: false,
  });

  prodWaPageId = '+260976256521';
  prodFbPageId = '105269598511751';
  devWaPageId = '+14155238886';
  devFbPageId = '2049287381976538';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);

    const conversations: { id: string; story_id: string; channel: string }[] =
      await queryRunner.query(`select mc.id, mc.story_id, channel from messenger_conversation mc 
INNER JOIN story s ON mc.story_id = s.id`);
    const pageId = this.prodFbPageId;
    const waId = this.prodWaPageId;

    for (const conversation of conversations) {
      const newPageId = conversation.channel === 'whatsapp' ? waId : pageId;

      await queryRunner.query(
        `UPDATE messenger_conversation SET page_id="${newPageId}" where id="${conversation.id}" `,
      );
    }

    await queryRunner.changeColumn(
      this.tableName,
      this.column,
      this.notNullColumn,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
