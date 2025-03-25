import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveUnsupportedLanguages1729514328511
  implements MigrationInterface
{
  private readonly supportedLanguagesCode = ['en', 'ar', 'fr', 'so', 'es'];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE language SET visible = false WHERE code NOT IN (?)`,
      [this.supportedLanguagesCode],
    );
  }

  public async down(): Promise<void> {}
}
