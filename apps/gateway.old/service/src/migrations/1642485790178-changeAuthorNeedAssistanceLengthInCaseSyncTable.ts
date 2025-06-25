import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeAuthorNeedAssistanceLengthInCaseSyncTable1642485790178
  implements MigrationInterface {
  private tableName = 'case_sync';
  private columnName = 'author_need_assistance';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(200)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(50)`,
    );
  }
}
