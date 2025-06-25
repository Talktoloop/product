import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeRoleIdendtifier1614162825777 implements MigrationInterface {
  private tableName = 'user';

  private async changeRole(
    queryRunner: QueryRunner,
    oldRole: number,
    newRole: number,
  ) {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`role\` = ? WHERE \`role\` = ?`,
      [newRole, oldRole],
    );
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.changeRole(queryRunner, 0, 1);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.changeRole(queryRunner, 1, 0);
  }
}
