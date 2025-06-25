import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import getCountries from './utils/get-countries';

export class AddCountryTableWIthValues1621321636648
  implements MigrationInterface {
  private tableName = 'country';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'smallint',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'prefix',
            type: 'smallint',
            length: '30',
            isNullable: false,
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
            length: '2',
            isUnique: true,
          },
        ],
      }),
    );

    const countries = getCountries();

    for (const country of countries) {
      await queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`) VALUES (?, ?)`,
        [country.prefix, country.code],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
