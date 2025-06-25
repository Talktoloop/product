import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class messengerConversation1634580022214 implements MigrationInterface {
  private tableName = 'story';
  private foreignKey = 'fk_StoryToMessengerConversationId';
  private messengerConversationColumn = new TableColumn({
    name: 'messenger_conversation_id',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      this.messengerConversationColumn,
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messenger_conversation',
        name: this.foreignKey,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      this.tableName,
      this.messengerConversationColumn,
    );
  }
}
