import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class OneColumnWithConversationIdInStoryTable1677769124265
  implements MigrationInterface
{
  table = 'story';
  foreignKeyStoryToIvrrConversation = 'fk_IvrrStoryToConversationId';
  foreignKeyStoryToMessengerConversation = 'FKstoryToConversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.table,
      this.foreignKeyStoryToIvrrConversation,
    );
    await queryRunner.dropForeignKey(
      this.table,
      this.foreignKeyStoryToMessengerConversation,
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET conversation_id = messenger_conversation_id WHERE messenger_conversation_id IS NOT NULL`,
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET conversation_id = ivrr_conversation_id WHERE ivrr_conversation_id IS NOT NULL`,
    );
    await queryRunner.query(`
        ALTER TABLE \`${this.table}\` 
        DROP COLUMN messenger_conversation_id, 
        DROP COLUMN ivrr_conversation_id
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.table,
      new TableColumn({
        name: 'messenger_conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'story',
      new TableColumn({
        name: 'ivrr_conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET messenger_conversation_id = conversation_id WHERE channel IN ('whatsapp','messenger','telegram')`,
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET conversation_id = NULL WHERE messenger_conversation_id IS NOT NULL`,
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET ivrr_conversation_id = conversation_id WHERE channel = 'ivrr'`,
    );
    await queryRunner.query(
      `UPDATE \`${this.table}\` SET conversation_id = NULL WHERE ivrr_conversation_id IS NOT NULL`,
    );
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['ivrr_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conversation',
        name: this.foreignKeyStoryToIvrrConversation,
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conversation',
        name: this.foreignKeyStoryToMessengerConversation,
        onDelete: 'SET NULL',
      }),
    );
  }
}
