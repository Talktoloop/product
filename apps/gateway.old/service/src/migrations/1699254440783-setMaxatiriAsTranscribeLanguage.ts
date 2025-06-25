import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetMaxatiriAsTranscribeLanguage1699254440783
  implements MigrationInterface
{
  tableName = 'language';
  private columnName = 'transcribe_lang';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`,
      ['so-SO', 'so'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`,
      [null, 'so'],
    );
  }
}
