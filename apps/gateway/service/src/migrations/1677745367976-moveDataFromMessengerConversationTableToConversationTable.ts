import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  Table,
} from 'typeorm';

export class MoveDataFromMessengerConversationTableToConversationTable1677745367976
  implements MigrationInterface
{
  table = 'conversation';
  column = new TableColumn({
    name: 'additional_info',
    type: 'varchar',
    length: '3000',
    isNullable: true,
  });
  foreignKeyMessageToMessengerConversation =
    'FKmessengerFlowMessageToMessengerConversation';
  foreignKeyMessageToConversation = 'FKmessengerMessageToConversation';
  foreignKeyStoryToMessengerConversation = 'fk_StoryToMessengerConversationId';
  foreignKeyConversationToStory = 'FKconversationToStory';
  foreignKeyStoryToConversation = 'FKstoryToConversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.table, this.column);
    await queryRunner.dropForeignKey(
      'messenger_message',
      this.foreignKeyMessageToMessengerConversation,
    );
    await queryRunner.dropForeignKey(
      'story',
      this.foreignKeyStoryToMessengerConversation,
    );
    await queryRunner.dropForeignKey(
      this.table,
      this.foreignKeyConversationToStory,
    );
    await queryRunner.renameColumn(
      'messenger_message',
      'messenger_conversation_id',
      'messenger_conversation_id_tmp',
    );
    await queryRunner.addColumn(
      'messenger_message',
      new TableColumn({
        name: 'conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.renameColumn(
      'story',
      'messenger_conversation_id',
      'messenger_conversation_id_tmp',
    );
    await queryRunner.addColumn(
      'story',
      new TableColumn({
        name: 'messenger_conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );

    let data = await queryRunner.query(
      `SELECT c.id, c.story_uuid, c.language_id, c.page_id, s.id story_id, c.started_at, c.additional_info FROM \`messenger_conversation\` c LEFT JOIN \`story\` s ON c.id = s.messenger_conversation_id_tmp`,
    );

    for (const item of data) {
      const result = await queryRunner.query(
        `INSERT INTO \`conversation\` (\`uuid\`, \`language_id\`, \`service_number\`, \`story_id\`, \`started_at\`, \`additional_info\`) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          item.story_uuid,
          item.language_id !== 0 ? item.language_id : null,
          item.page_id,
          item.story_id ? item.story_id : null,
          item.started_at,
          item.additional_info,
        ],
      );

      await queryRunner.query(
        `UPDATE \`messenger_message\` SET \`conversation_id\` = ? WHERE messenger_conversation_id_tmp = ?`,
        [result.insertId, item.id],
      );

      await queryRunner.query(
        `UPDATE \`story\` SET \`messenger_conversation_id\` = ? WHERE messenger_conversation_id_tmp = ?`,
        [result.insertId, item.id],
      );
    }

    for (const table of ['messenger_message', 'story']) {
      await queryRunner.query(
        `ALTER TABLE \`${table}\` DROP COLUMN messenger_conversation_id_tmp`,
      );
    }

    data = await queryRunner.query(
      `SELECT id FROM \`messenger_message\` WHERE DATE_FORMAT(message_created_at, "%Y") = '0000' order by message_created_at asc`,
    );

    for (const item of data) {
      await queryRunner.query(
        `UPDATE \`messenger_message\` SET message_created_at = created_at WHERE id = ?`,
        [item.id],
      );
    }

    await queryRunner.dropTable('messenger_conversation');
    await queryRunner.createForeignKey(
      'messenger_message',
      new TableForeignKey({
        columnNames: ['conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: this.table,
        name: this.foreignKeyMessageToConversation,
      }),
    );
    await queryRunner.createForeignKey(
      'story',
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: this.table,
        name: this.foreignKeyStoryToConversation,
        onDelete: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      'conversation',
      new TableForeignKey({
        columnNames: ['story_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'story',
        name: this.foreignKeyConversationToStory,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'messenger_message',
      this.foreignKeyMessageToConversation,
    );
    await queryRunner.dropForeignKey(
      'story',
      this.foreignKeyStoryToConversation,
    );
    await queryRunner.createTable(
      new Table({
        name: 'messenger_conversation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'story_uuid',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'additional_info',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'country_code',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'language_id',
            type: 'smallint',
            isNullable: true,
            length: '2',
          },
          {
            name: 'country_id',
            type: 'smallint',
            isNullable: true,
          },
          {
            name: 'story_id',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'story_type',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'started_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            length: '6',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP(6)',
          },
          {
            name: 'page_id',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.addColumn(
      'messenger_message',
      new TableColumn({
        name: 'messenger_conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.renameColumn(
      'story',
      'messenger_conversation_id',
      'messenger_conversation_id_tmp',
    );
    await queryRunner.addColumn(
      'story',
      new TableColumn({
        name: 'messenger_conversation_id',
        type: 'int',
        isNullable: true,
      }),
    );

    const data = await queryRunner.query(
      `SELECT c.id, c.uuid, c.language_id, c.service_number, c.story_id, c.started_at, c.additional_info FROM \`${this.table}\` c JOIN  \`messenger_message\` m ON c.id = m.conversation_id GROUP BY m.conversation_id`,
    );

    for (const item of data) {
      const result = await queryRunner.query(
        `INSERT INTO \`messenger_conversation\` (\`story_uuid\`, \`language_id\`, \`page_id\`, \`story_id\`, \`started_at\`, \`additional_info\`) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          item.uuid,
          item.language_id,
          item.service_number,
          item.story_id,
          item.started_at,
          item.additional_info,
        ],
      );

      await queryRunner.query(
        `UPDATE \`messenger_message\` SET \`messenger_conversation_id\` = ? WHERE conversation_id = ?`,
        [result.insertId, item.id],
      );
      await queryRunner.query(
        `UPDATE \`story\` SET \`messenger_conversation_id\` = ? WHERE messenger_conversation_id_tmp = ?`,
        [result.insertId, item.id],
      );
      await queryRunner.query(
        `DELETE FROM \`${this.table}\` WHERE \`id\` = ?`,
        [item.id],
      );
    }

    await queryRunner.dropColumn(this.table, this.column);
    await queryRunner.query(
      `ALTER TABLE \`messenger_message\` DROP COLUMN conversation_id`,
    );
    await queryRunner.query(
      `ALTER TABLE \`story\` DROP COLUMN messenger_conversation_id_tmp`,
    );

    await queryRunner.createForeignKey(
      'messenger_message',
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messenger_conversation',
        name: this.foreignKeyMessageToMessengerConversation,
      }),
    );
    await queryRunner.createForeignKey(
      'story',
      new TableForeignKey({
        columnNames: ['messenger_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messenger_conversation',
        name: this.foreignKeyStoryToMessengerConversation,
        onDelete: 'SET NULL',
      }),
    );
  }
}
