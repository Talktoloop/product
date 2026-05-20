import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultLanguageForAdministrativeDataForGermanLanguage1684490838373
  implements MigrationInterface
{
  tableName = 'country';
  countryCode = 'de';
  languageCode = 'de';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const languages = await queryRunner.query(
      `SELECT \`id\`, \`code\` FROM \`language\``,
    );

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = ? WHERE code = ?`,
      [
        languages.find((item) => item.code === this.languageCode)?.id,
        this.countryCode,
      ],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`default_language_id_for_administrative_data\` = null WHERE code = ?`,
      [this.countryCode],
    );
  }
}
