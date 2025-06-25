import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUaTuUk1647801761741 implements MigrationInterface {
  name = 'changeUaTuUk1647801761741';

  private tableName = 'language';
  private newCode = 'uk';
  private oldCode = 'ua';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET code = "${this.newCode}" WHERE code = "${this.oldCode}"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE ${this.tableName} SET code = "${this.oldCode}" WHERE code = "${this.newCode}"`,
    );
  }
}
