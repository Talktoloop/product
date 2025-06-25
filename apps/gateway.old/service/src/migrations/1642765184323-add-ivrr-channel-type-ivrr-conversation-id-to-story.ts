import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addIvrrTypeToChannelStoryColumn1642765184323
  implements MigrationInterface {
  private tableName = 'story';

  private oldChannelColumn = new TableColumn({
    name: 'channel',
    type: 'enum',
    enum: ['sms', 'web', 'whatsapp', 'messenger'],
    enumName: 'channelEnum',
    default: '"web"',
  });

  private newChannelColumn = new TableColumn({
    name: 'channel',
    type: 'enum',
    enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr'],
    enumName: 'channelEnum',
    default: '"web"',
  });

  private foreignKey = 'fk_StoryToIvrrConversationId';
  private ivrrConversationColumn = new TableColumn({
    name: 'ivrr_conversation_id',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      'channel',
      this.newChannelColumn,
    );

    await queryRunner.addColumn(this.tableName, this.ivrrConversationColumn);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['ivrr_conversation_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ivrr_conversation',
        name: this.foreignKey,
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      'channel',
      this.oldChannelColumn,
    );

    await queryRunner.dropColumn(this.tableName, this.ivrrConversationColumn);
  }
}
