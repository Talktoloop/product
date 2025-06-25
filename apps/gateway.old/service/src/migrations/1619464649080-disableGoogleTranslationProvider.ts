import { MigrationInterface, QueryRunner } from 'typeorm';

export class DisableGoogleTranslationProvider1619464649080
  implements MigrationInterface {
  private tableName = 'language';
  private columnName = 'provider';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`,
      [null, 'ny'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`,
      ['google', 'ny'],
    );
  }
}
