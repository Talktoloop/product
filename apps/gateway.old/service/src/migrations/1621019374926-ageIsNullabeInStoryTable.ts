import { MigrationInterface, QueryRunner } from 'typeorm';

export class AgeIsNullableInStoryTable1621019374926
  implements MigrationInterface {
  private tableName = 'story';
  private columnName = 'age';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` TINYINT NULL DEFAULT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY \`${this.columnName}\` TINYINT NOT NULL DEFAULT 0;`,
    );
  }
}
