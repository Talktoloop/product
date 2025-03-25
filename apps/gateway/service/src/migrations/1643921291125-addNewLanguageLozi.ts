import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewLanguageLozi1643921291125 implements MigrationInterface {
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`) VALUES (?, ?)`,
      ['loz', null],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
      ['loz'],
    );
  }
}
