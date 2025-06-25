import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeLengthOfCaseManagerNoteInStoryTable1638911995269
  implements MigrationInterface {
  private tableName = 'story';
  private columnName = 'case_manager_note';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(5000)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(100)`,
    );
  }
}
