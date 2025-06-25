import { MigrationInterface, QueryRunner } from 'typeorm';

export class AWSInsteadOfGoogleforTagalog1668510628937
  implements MigrationInterface
{
  tableName = 'language';
  columnName = 'provider';
  newProvider = 'aws';
  oldProvider = 'google';

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
