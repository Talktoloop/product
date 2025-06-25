import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIVRRTypeToChannelInCommentTable1650980075798
  implements MigrationInterface
{
  private tableName = 'comment';

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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      'channel',
      this.newChannelColumn,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      'channel',
      this.oldChannelColumn,
    );
  }
}
