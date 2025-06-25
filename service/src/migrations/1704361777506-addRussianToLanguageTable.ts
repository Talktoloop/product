import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRussianToLanguageTable1704361777506
  implements MigrationInterface
{
  private tableName = 'language';
  private languageCode = 'ru';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`provider\`, \`transcribe_lang\`) VALUES (?, ?, ?, ?)`,
      [this.languageCode, false, 'aws', 'ru-RU'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      [this.languageCode],
    );
  }
}
