import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveGermanFromLanguageTable1614588641003
  implements MigrationInterface {
  private tableName = 'language';
  private languageCode = 'de';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      [this.languageCode],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`, \`machine_translated\`) VALUES (?, ?, ?)`,
      [this.languageCode, false, true],
    );
  }
}
