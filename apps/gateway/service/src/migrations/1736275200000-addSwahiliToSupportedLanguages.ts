import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSwahiliToSupportedLanguages1736275200000
  implements MigrationInterface
{
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const existing = await queryRunner.query(
      `SELECT * FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['sw'],
    );

    if (existing && existing.length > 0) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`provider\` = ?, \`visible\` = ?, \`transcribe_lang\` = ? WHERE \`code\` = ?`,
        ['google', 1, 'sw', 'sw'],
      );
    } else {
      await queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`, \`transcribe_lang\`) VALUES (?, ?, ?, ?)`,
        ['sw', 'google', 1, 'sw'],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['sw'],
    );
  }
}

