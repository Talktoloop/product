import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSomaliToSupportedLangauges1618428850803
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`machine_translated\`) VALUES (?, ?)`,
      ['so', 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['so'],
    );
  }
}
