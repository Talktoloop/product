import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMinorityGroupToThematicTable1675673599023
  implements MigrationInterface
{
  tableName = 'thematic';
  thematicCategory = 'protection';
  newSubcategory = 'minorityGroup';
  nextSubcategory = 'other';

  async getCategory(queryRunner: QueryRunner): Promise<{ id: number }> {
    return queryRunner
      .query(
        `SELECT \`id\` FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` IS NULL AND \`code\` = '${this.thematicCategory}'`,
      )
      .then((result) => result[0]);
  }

  async getSubcategory(
    queryRunner: QueryRunner,
    categoryId: number,
    name: string,
  ): Promise<{ id: number; order: number }> {
    return queryRunner
      .query(
        `SELECT \`id\`, \`order\` FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` = ${categoryId} AND \`code\` = '${name}'`,
      )
      .then((result) => result[0]);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const category = await this.getCategory(queryRunner);
    const nextSubcategory = await this.getSubcategory(
      queryRunner,
      category.id,
      this.nextSubcategory,
    );

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`order\` = \`order\` + 1 WHERE \`order\` >= ?`,
      [nextSubcategory.order],
    );

    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`code\`, \`parent_thematic_id\`, \`order\`) VALUES (?, ?, ?)`,
      [this.newSubcategory, category.id, nextSubcategory.order],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const category = await this.getCategory(queryRunner);
    const subcategory = await this.getSubcategory(
      queryRunner,
      category.id,
      this.newSubcategory,
    );

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`order\` = \`order\` - 1 WHERE \`order\` > ?`,
      [subcategory.order],
    );

    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`id\` = ?`,
      [subcategory.id],
    );

    return;
  }
}
