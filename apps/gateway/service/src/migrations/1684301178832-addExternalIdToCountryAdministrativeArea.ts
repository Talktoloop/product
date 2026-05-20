import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddExternalIdToCountryAdministrativeArea1684301178832
  implements MigrationInterface
{
  tableName = 'country_administrative_area';
  column = new TableColumn({
    name: 'external_id',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
