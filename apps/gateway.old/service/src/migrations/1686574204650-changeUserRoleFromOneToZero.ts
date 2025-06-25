import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeUserRoleFromOneToZero1686574204650
  implements MigrationInterface
{
  tableName = 'user';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`role\` = 0 WHERE \`role\` = 1`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`role\` = 1 WHERE \`role\` = 0`,
    );
  }
}
