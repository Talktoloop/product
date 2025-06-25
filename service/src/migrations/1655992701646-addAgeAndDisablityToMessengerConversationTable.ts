import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAgeAndDisablityToMessengerConversationTable1655992701646
  implements MigrationInterface
{
  tableName = 'messenger_conversation';
  private newColumns = [
    new TableColumn({
      name: 'age',
      type: 'varchar',
      length: '500',
      isNullable: true,
    }),
    new TableColumn({
      name: 'disability',
      type: 'varchar',
      length: '500',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
