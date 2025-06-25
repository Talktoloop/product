import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLoopOnboardingToThematicTable1675676220422
  implements MigrationInterface
{
  tableName = 'thematic';
  newCategory = 'other';
  newSubcategory = 'loopOnboarding';

  async getLastItem(
    queryRunner: QueryRunner,
  ): Promise<{ order: number; id: number }> {
    return queryRunner
      .query(
        `SELECT \`id\`, \`order\` FROM \`${this.tableName}\` order by \`order\` DESC limit 1`,
      )
      .then((result) => result[0]);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    let lastItem = await this.getLastItem(queryRunner);

    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`,
      [this.newCategory, null, lastItem.order + 1],
    );

    lastItem = await this.getLastItem(queryRunner);

    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`,
      [this.newSubcategory, lastItem.id, lastItem.order + 1],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 2; i++) {
      const lastItem = await this.getLastItem(queryRunner);

      await queryRunner.query(
        `DELETE FROM \`${this.tableName}\` WHERE \`id\` = ?`,
        [lastItem.id],
      );
    }
  }
}
