import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPolishToSupportedLanguages1647253054091
  implements MigrationInterface
{
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`visible\`, \`provider\`) VALUES (?, ?, ?)`,
      ['pl', 1, 'google'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['pl'],
    );
  }
}
