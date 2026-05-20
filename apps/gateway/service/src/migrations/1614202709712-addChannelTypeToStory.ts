import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddChannelTypeToStory1614202709712 implements MigrationInterface {
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'channel',
    type: 'enum',
    enum: ['sms', 'web', 'whatsapp', 'messenger'],
    enumName: 'channelEnum',
    default: '"web"',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
