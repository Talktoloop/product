import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRumourToOpinion1602528048556 implements MigrationInterface {
  private previousTitle = 'Rumour';
  private newTitle = 'Opinion';
  private tableName = 'category';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE title = ?`,
      [this.newTitle, this.previousTitle],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE title = ?`,
      [this.previousTitle, this.newTitle],
    );
  }
}
