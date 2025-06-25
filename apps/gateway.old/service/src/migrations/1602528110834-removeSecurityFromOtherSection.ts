import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveSecurityFromOtherSection1602528110834
  implements MigrationInterface {
  private titleToRemove = 'Security';
  private categoryToRemove = 'Other';
  private tableName = 'thematic';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const category = await queryRunner.query(
      `SELECT \`id\` FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id IS NULL`,
      [this.categoryToRemove],
    );

    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id = ?`,
      [this.titleToRemove, category[0].id],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const category = await queryRunner.query(
      `SELECT \`id\` FROM \`${this.tableName}\` WHERE \`title\` = ? AND parent_thematic_id IS NULL`,
      [this.categoryToRemove],
    );

    await queryRunner.query(
      `
      INSERT INTO \`${this.tableName}\` (\`title\`, \`parentThematicId\` )
      VALUES (?, ?)
      `,
      [this.titleToRemove, category.id],
    );
  }
}
