import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrateAdministrativeDataForSelectedCountries1684335263704
  implements MigrationInterface
{
  tableName = 'country_administrative_area_name';
  countries = [
    'ca',
    'za',
    'gb',
    'zw',
    'zm',
    'so',
    'ph',
    'ls',
    'ke',
    'kh',
    'id',
    'et',
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const countries = await queryRunner.query(
      `SELECT \`id\` FROM \`country\` WHERE \`code\` IN (?)`,
      [this.countries],
    );
    const language = await queryRunner
      .query(`SELECT \`id\` FROM \`language\` WHERE \`code\` = 'en'`)
      .then((result) => result[0]);

    await queryRunner.query(
      `INSERT INTO  \`country_administrative_area_name\` (language_id, administrative_area_id, name) 
      SELECT ${language.id} as language_id, id, name FROM \`country_administrative_area\` WHERE \`country_id\` IN (?)`,
      [countries.map((country) => country.id)],
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
