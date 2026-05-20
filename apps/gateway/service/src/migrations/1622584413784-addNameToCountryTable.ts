import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import getCountries from './utils/get-countries';

export class AddNameToCountryTable1622584413784 implements MigrationInterface {
  private tableName = 'country';
  private newColumn = new TableColumn({
    name: 'name',
    type: 'varchar',
    length: '50',
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    const countries = getCountries();
    const operations = [];

    for (const country of countries) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`,
          [country.name, country.code],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
