import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIndonesianToSupportedLanguage1630442747951
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`,
      ['ind', 'aws', 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['ind'],
    );
  }
}
