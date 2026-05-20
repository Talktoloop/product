import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addIvrrTypeToChannelStoryColumn1642765184865
  implements MigrationInterface {
  private ivrrTableName = 'ivrr_conversation';
  private callTableName = 'ivrr_call';
  private foreignKeyIvrrConversation = 'FKivrrFlowMessageToIvrrConversation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.ivrrTableName, 's3_audio_story_file_id');
    await queryRunner.dropColumn(this.ivrrTableName, 's3_audio_reply_file_id');
    await queryRunner.dropColumn(
      this.ivrrTableName,
      's3_moderator_reply_file_id',
    );

    await queryRunner.dropColumn(this.ivrrTableName, 'twilio_call_sid');

    await queryRunner.createTable(
      new Table({
        name: this.callTableName,
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'twilio_call_sid',
            type: 'text',
            isNullable: false,
          },
          {
            name: 's3_file_id',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'url',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'call_date',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'ivrr_conversation_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'is_story',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'is_moderator_call',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          { name: 'user_id', type: 'varchar', length: '36', isNullable: true },
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
      this.callTableName,
      new TableForeignKey({
        columnNames: ['ivrr_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ivrr_conversation',
        name: this.foreignKeyIvrrConversation,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.callTableName,
      this.foreignKeyIvrrConversation,
    );

    await queryRunner.dropTable(this.callTableName);

    await queryRunner.addColumns(this.ivrrTableName, [
      new TableColumn({
        name: 's3_audio_story_file_id',
        type: 'text',
        isNullable: false,
      }),
      new TableColumn({
        name: 's3_audio_reply_file_id',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 's3_moderator_reply_file_id',
        type: 'text',
        isNullable: true,
      }),
      new TableColumn({
        name: 'twilio_call_sid',
        type: 'text',
      }),
    ]);
  }
}
