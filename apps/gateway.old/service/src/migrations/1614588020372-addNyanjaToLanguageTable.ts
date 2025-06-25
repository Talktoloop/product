import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNyanjaToLanguageTable1614588020372
  implements MigrationInterface {
  private tableName = 'language';
  private languageCode = 'ny';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`machine_translated\`) VALUES (?, ?, ?)`,
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
