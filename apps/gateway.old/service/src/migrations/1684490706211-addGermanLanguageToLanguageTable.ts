import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGermanLanguageToLanguageTable1684490706211
  implements MigrationInterface
{
  tableName = 'language';
  languageCode = 'de';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`visible\`) VALUES (?, ?, ?)`,
      [this.languageCode, false, false],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      [this.languageCode],
    );
  }
}
