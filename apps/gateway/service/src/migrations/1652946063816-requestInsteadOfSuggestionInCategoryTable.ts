import { MigrationInterface, QueryRunner } from 'typeorm';

export class RequestInsteadOfSuggestionInCategoryTable1652946063816
  implements MigrationInterface
{
  tableName = 'category';
  oldCode = 'suggestion';
  newCode = 'request';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`,
      [this.newCode, this.oldCode],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`code\` = ? WHERE \`code\` = ?`,
      [this.oldCode, this.newCode],
    );
  }
}
