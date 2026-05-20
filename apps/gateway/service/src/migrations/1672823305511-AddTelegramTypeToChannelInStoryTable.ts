import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTelegramTypeToChannelInStoryTable1672823305511
  implements MigrationInterface
{
  private tableName = 'story';

  private oldChannelColumn = new TableColumn({
    name: 'channel',
    type: 'enum',
    enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr'],
    enumName: 'channelEnum',
    default: '"web"',
  });

  private newChannelColumn = new TableColumn({
    name: 'channel',
    type: 'enum',
    enum: ['sms', 'web', 'whatsapp', 'messenger', 'ivrr', 'telegram'],
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
