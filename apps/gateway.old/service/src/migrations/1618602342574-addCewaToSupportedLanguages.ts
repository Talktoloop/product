import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCewaToSupportedLanguages1618602342574
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`code\` varchar(3);`,
    );

    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`machine_translated\`) VALUES (?, ?)`,
      ['cew', 0],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['cew'],
    );
  }
}
