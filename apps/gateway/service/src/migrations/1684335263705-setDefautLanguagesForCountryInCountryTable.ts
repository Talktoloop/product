import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefautLanguagesForCountryInCountryTable1684335263705
  implements MigrationInterface
{
  tableName = 'country';
  languages = {
    pl: 'pl',
    ca: 'en',
    de: 'de',
    lt: 'lt',
    nl: 'nl',
    za: 'en',
    gb: 'en',
    zw: 'en',
    zm: 'en',
    so: 'en',
    ph: 'en',
    ls: 'en',
    ke: 'en',
    kh: 'en',
    id: 'en',
    et: 'en',
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    const languages = await queryRunner.query(
      `SELECT \`id\`, \`code\` FROM \`language\``,
    );
    const operations = [];

    for (const [key, value] of Object.entries(this.languages)) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`,
          [languages.find((item) => item.code === value)?.id, key],
        ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const operations = [];

    for (const key of Object.keys(this.languages)) {
      operations.push(
        queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = null WHERE code = ?`,
          [key],
        ),
      );
    }

    await Promise.all(operations);
  }
}
