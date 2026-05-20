import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSupportedLanguagesData1611869973090
  implements MigrationInterface {
  private supportedLanguages = ['de', 'fr', 'es', 'ar'];
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.supportedLanguages.map(async (language: string) => {
        await queryRunner.query(
          `INSERT INTO \`${this.tableName}\` (\`code\`) VALUES (?)`,
          [language],
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.supportedLanguages.map(async (language: string) => {
        await queryRunner.query(
          `DELETE FROM \`${this.tableName}\` WHERE 'code'=?`,
          [language],
        );
      }),
    );
  }
}
