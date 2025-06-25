import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addExternalIdColumnToOrganisationTable1690818732851
  implements MigrationInterface
{
  tableName = 'organisation';
  column = new TableColumn({
    name: 'external_id',
    type: 'varchar',
    isNullable: true,
    length: '32',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
