import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateIndonesianCode1630600596542 implements MigrationInterface {
  private newCode = 'id';
  private oldCode = 'ind';
  private tableName = 'language';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET code = '${this.newCode}' WHERE code = '${this.oldCode}'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET code = '${this.oldCode}' WHERE code = '${this.newCode}'`,
    );
  }
}
