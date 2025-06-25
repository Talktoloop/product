import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddChannelTypeToComment1614673815382
  implements MigrationInterface {
  private tableName = 'comment';
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
