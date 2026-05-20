import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateGenderAndAgeColumns1626814670686
  implements MigrationInterface {
  private tableName = 'story';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET age = ? WHERE age IS NULL`,
      [0],
    );

    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY age tinyint NOT NULL DEFAULT 0`,
    );

    await queryRunner.query(
      `UPDATE ${this.tableName} SET gender = ? WHERE gender IS NULL`,
      [0],
    );

    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY gender tinyint NOT NULL DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY age tinyint NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY gender tinyint NULL`,
    );
  }
}
