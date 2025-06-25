import { MigrationInterface, QueryRunner } from 'typeorm';

export class setDefaultLanguagesForSudanAndUkraine1684480978975
  implements MigrationInterface
{
  tableName = 'country';
  languages = {
    sd: 'ar',
    ua: 'uk',
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
