import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGoogleProviderForNy1621365829303 implements MigrationInterface {
  private tableName = 'language';
  private columnName = 'provider';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `,
      ['google', 'ny'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `,
      [null, 'ny'],
    );
  }
}
