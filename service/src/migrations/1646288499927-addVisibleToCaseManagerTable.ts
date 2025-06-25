import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddVisibleToCaseManagerTable1646288499927
  implements MigrationInterface
{
  tableName = 'case_manager';
  newColumn = new TableColumn({
    name: 'visible',
    type: 'boolean',
    default: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
