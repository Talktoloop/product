import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLanguagesToLanguageTable1684335210683
  implements MigrationInterface
{
  tableName = 'language';
  languageCodes = ['nl', 'lt'];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.languageCodes.map((value) =>
        queryRunner.query(
          `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`visible\`) VALUES (?, ?, ?)`,
          [value, false, false],
        ),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.languageCodes.map((value) =>
        queryRunner.query(
          `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
          [value],
        ),
      ),
    );
  }
}
