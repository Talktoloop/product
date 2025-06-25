import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateDefaultValueForStoryAge1599555935648
  implements MigrationInterface {
  private tableName = 'story';
  private columName = 'age';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ALTER COLUMN ${this.columName} SET DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ALTER COLUMN ${this.columName} SET DEFAULT 4`,
    );
  }
}
