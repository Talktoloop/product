import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetIndonesianAsDefaultLanguageIdForAdministrativeData1684820102497
  implements MigrationInterface
{
  tableName = 'country';
  countryCode = 'id';
  newLanguageCode = 'id';
  oldLanguageCode = 'en';

  getLanguages(queryRunner: QueryRunner) {
    return queryRunner.query(`SELECT \`id\`, \`code\` FROM \`language\``);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const languages = await this.getLanguages(queryRunner);

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`,
      [
        languages.find((item) => item.code === this.newLanguageCode)?.id,
        this.countryCode,
      ],
    );

    await queryRunner.query(
      `UPDATE \`country_administrative_area_name\` caan JOIN \`country_administrative_area\` caa
      ON caan.administrative_area_id = caa.id JOIN \`country\` c ON caa.country_id = c.id
      SET caan.language_id = ? WHERE c.code = ?`,
      [
        languages.find((item) => item.code === this.newLanguageCode)?.id,
        this.countryCode,
      ],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const languages = await this.getLanguages(queryRunner);

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`,
      [
        languages.find((item) => item.code === this.oldLanguageCode)?.id,
        this.countryCode,
      ],
    );

    await queryRunner.query(
      `UPDATE \`country_administrative_area_name\` caan JOIN \`country_administrative_area\` caa
      ON caan.administrative_area_id = caa.id
      SET caan.language_id = ? JOIN \`country\` c
      ON caa.country_id = c.id
      WHERE c.code = ?`,
      [
        languages.find((item) => item.code === this.oldLanguageCode)?.id,
        this.countryCode,
      ],
    );
  }
}
