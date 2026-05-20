import { MigrationInterface, QueryRunner } from 'typeorm';

export class googleInsteadOfAwsforTagalog1676909416367
  implements MigrationInterface
{
  tableName = 'language';
  columnName = 'provider';
  newProvider = 'google';
  oldProvider = 'aws';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`,
      [this.newProvider, 'tl'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ?`,
      [this.oldProvider, 'tl'],
    );
  }
}
