import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateNotPregnantText1601841845727 implements MigrationInterface {
  private idToChange = 1;
  private newTitle = 'Not pregnant or breastfeeding';
  private oldTitle = 'Not pregnant and breastfeeding';
  private tableName = 'pregnancy_status';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`,
      [this.newTitle, this.idToChange],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`,
      [this.oldTitle, this.idToChange],
    );
  }
}
