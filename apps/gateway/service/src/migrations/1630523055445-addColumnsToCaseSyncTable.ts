import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsToCaseSyncTable1630523055445
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumns = [
    new TableColumn({
      name: 'process_and_refer_last_update_time',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'response_to_referral_last_update_time',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'enough_information_to_investigate_last_update',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'investigation_status_last_update',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'author_informed_of_case_outcomes_last_update',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'decision_to_investigate_status_last_update',
      type: 'datetime',
      length: '6',
      isNullable: true,
    }),
    new TableColumn({
      name: 'thematic_area',
      type: 'varchar',
      isNullable: true,
      length: '100',
    }),
    new TableColumn({
      name: 'thematic_area_subsection',
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
