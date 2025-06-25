import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class dropOriginalStoryColumn1647654475748
  implements MigrationInterface
{
  name = 'dropOriginalStoryColumn1647654475748';
  conversationTableName = 'conversation';
  messengerConversationTableName = 'messenger_conversation';

  column = new TableColumn({
    name: 'oryginal_story',
    type: 'text',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.conversationTableName, this.column);
    await queryRunner.dropColumn(
      this.messengerConversationTableName,
      this.column,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.conversationTableName, this.column);
    await queryRunner.addColumn(
      this.messengerConversationTableName,
      this.column,
    );
  }
}
