import { MigrationInterface, QueryRunner } from 'typeorm';

export class addBembaToSupportedLanguages1623097580724
  implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`code\` varchar(3);`,
    );

    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`visible\`, \`provider\`) VALUES (?, ?, ?)`,
      ['bem', 1, null],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['bem'],
    );
  }
}
