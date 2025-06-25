import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddContactNeededToConversationTable1619550430324
  implements MigrationInterface {
  private tableName = 'conversation';
  private newColumn = new TableColumn({
    name: 'contact_needed',
    type: 'boolean',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
