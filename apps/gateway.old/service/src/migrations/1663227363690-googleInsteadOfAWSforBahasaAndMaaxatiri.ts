import { MigrationInterface, QueryRunner } from 'typeorm';

export class GoogleInsteadOfAWSforBahasaAndMaaxatiri1663227363690
  implements MigrationInterface
{
  tableName = 'language';
  columnName = 'provider';
  newProvider = 'google';
  oldProvider = 'aws';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` IN (?)`,
      [this.newProvider, ['id', 'so']],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` IN (?)`,
      [this.oldProvider, ['id', 'so']],
    );
  }
}
