import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addDeleteAtColumnToCaseSyncTable1629317232270
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumn = new TableColumn({
    name: 'deleted_at',
    type: 'datetime',
    length: '6',
    isNullable: true,
    default: null,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
