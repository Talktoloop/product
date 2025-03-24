import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTongaToSupportedLanguage1633632984183
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`) VALUES (?, ?, ?)`,
      ['tog', null, 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['tog'],
    );
  }
}
