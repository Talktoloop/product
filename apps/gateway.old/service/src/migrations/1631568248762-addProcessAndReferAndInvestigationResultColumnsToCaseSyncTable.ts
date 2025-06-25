import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddProcessAndReferAndInvestigationResultColumnsToCaseSyncTable1631568248762
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumns = [
    new TableColumn({
      name: 'process_and_refer_status',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'investigation_result',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
