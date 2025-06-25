import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMaayToSupportedLanguages1630437897210
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`,
      ['maa', null, 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['maa'],
    );
  }
}
