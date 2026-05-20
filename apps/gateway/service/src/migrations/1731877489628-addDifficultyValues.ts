import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDifficultyValues1731877489628 implements MigrationInterface {
  private tableName = 'difficulty';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO ${this.tableName} (code)
      VALUES ('unspecified')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM ${this.tableName}
      WHERE code = 'unspecified'
    `);
  }
}
