import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveNameColumnFromCountryAdministrativeArea1684344491629
  implements MigrationInterface
{
  tableName = 'country_administrative_area';
  column = new TableColumn({
    name: 'name',
    type: 'varchar',
    length: '150',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }
}
