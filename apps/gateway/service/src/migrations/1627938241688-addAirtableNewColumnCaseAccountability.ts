import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAirtableNewColumnCaseAccountability1627938241688
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumn = new TableColumn({
    name: 'case_accountability',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
