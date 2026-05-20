import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class isPinnedField1646486166287 implements MigrationInterface {
  name = 'isPinnedField1646486166287';

  messangerTableName = 'messenger_message';
  smsTableName = 'message';
  conversationTableName = 'conversation';

  isPinnedColumn = new TableColumn({
    name: 'is_pinned',
    type: 'boolean',
    isNullable: false,
    default: false,
  });

  originalStoryConversationColumn = new TableColumn({
    type: 'text',
    name: 'oryginal_story',
  });

  nullableOriginalStoryConversationColumn = new TableColumn({
    type: 'text',
    name: 'oryginal_story',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.messangerTableName, this.isPinnedColumn);
    await queryRunner.addColumn(this.smsTableName, this.isPinnedColumn);
    await queryRunner.addColumn(
      this.conversationTableName,
      this.nullableOriginalStoryConversationColumn,
    );

    const conversationsWithContents: {
      id: string;
      content: string;
    }[] = await queryRunner.query(
      `select c.id, m.content from conversation c INNER JOIN message m ON c.id = m.conversation_id where m.story_id is not null`,
    );

    for (const conversation of conversationsWithContents) {
      await queryRunner.query(
        `UPDATE conversation SET oryginal_story=? where id=?`,
        [conversation.content, conversation.id],
      );
    }

    await queryRunner.changeColumn(
      this.conversationTableName,
      this.nullableOriginalStoryConversationColumn,
      this.originalStoryConversationColumn,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.messangerTableName, this.isPinnedColumn);
    await queryRunner.dropColumn(this.smsTableName, this.isPinnedColumn);
    await queryRunner.dropColumn(
      this.conversationTableName,
      this.originalStoryConversationColumn,
    );
  }
}
