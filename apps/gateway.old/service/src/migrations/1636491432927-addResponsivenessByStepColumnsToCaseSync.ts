import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddResponsivenessByStepColumnsToCaseSync1636491432927
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumns = [
    new TableColumn({
      name: 'process_and_refer_responsiveness',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'referral_response_responsiveness',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'investigation_responsiveness',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'investigation_result_responsiveness',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'informing_author_responsiveness',
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
