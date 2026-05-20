import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class messengerFlowIsStory1634842928647 implements MigrationInterface {
  private tableName = 'messenger_message';
  private column = new TableColumn({
    name: 'is_story',
    type: 'boolean',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
