import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class messengerFlowMessageTable1634580022215
  implements MigrationInterface {
  private tableName = 'messenger_message';
  private foreignKeyMessengerConversation =
    'FKmessengerFlowMessageToMessengerConversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'content',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'type',
            type: 'tinyint',
            isNullable: false,
          },
          {
            name: 'message_created_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'messenger_conversation_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messenger_conversation',
        name: this.foreignKeyMessengerConversation,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      this.foreignKeyMessengerConversation,
    );
    await queryRunner.dropTable(this.tableName);
  }
}
