import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeStoryStatusIdentifiers1614260326841
  implements MigrationInterface
{
  private tableName = 'story';

  private async changeStatus(
    queryRunner: QueryRunner,
    oldStatus: number,
    newStatus: number,
  ) {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`status\` = ? WHERE \`status\` = ?`,
      [newStatus, oldStatus],
    );
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.changeStatus(queryRunner, 3, 11);
    await this.changeStatus(queryRunner, 2, 10);
    await this.changeStatus(queryRunner, 1, 2);
    await this.changeStatus(queryRunner, 0, 1);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await this.changeStatus(queryRunner, 1, 0);
    await this.changeStatus(queryRunner, 2, 1);
    await this.changeStatus(queryRunner, 11, 3);
    await this.changeStatus(queryRunner, 10, 2);
  }
}
