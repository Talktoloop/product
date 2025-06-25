import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddHasChildColumnToCountryAdministrativeAreaTable1682672437475
  implements MigrationInterface
{
  tableName = 'country_administrative_area';

  private newColumn = new TableColumn({
    name: 'has_child',
    type: 'boolean',
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
