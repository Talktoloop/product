import { MigrationInterface, QueryRunner } from 'typeorm';
import getThematicAreaCategories from './utils/get-thematic-area-categories';

export class migrateThematicAreaOption1680777155261
  implements MigrationInterface
{
  tableName = 'thematic';
  oldSubcategoryCode = 'other.loopOnboarding';
  nextSubcategoryCode = 'cross-cutting.drrAndPreparedness';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = await getThematicAreaCategories(queryRunner);
    const subcategories = await queryRunner.query(
      `SELECT \`id\`, \`parent_thematic_id\`, \`code\` FROM \`thematic\` WHERE \`parent_thematic_id\` IS NOT NULL`,
    );
    const oldSubcategoryCodeArr = this.oldSubcategoryCode.split('.');
    const nextSubcategoryCodeArr = this.nextSubcategoryCode.split('.');
    const oldSubcategory = subcategories.find(
      (entity) =>
        entity?.parent_thematic_id === categories[oldSubcategoryCodeArr[0]] &&
        entity?.code === oldSubcategoryCodeArr[1],
    );
    const nextSubcategory = await queryRunner
      .query(
        `SELECT \`id\`, \`parent_thematic_id\`, \`code\`, \`order\` FROM \`thematic\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`,
        [categories[nextSubcategoryCodeArr[0]], nextSubcategoryCodeArr[1]],
      )
      .then((result) => result[0]);

    await queryRunner.query(
      `UPDATE \`thematic\` SET \`order\` = \`order\` + 1 WHERE \`order\` >= ?`,
      [nextSubcategory.order],
    );

    const { insertId } = await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`, \`code\`, \`order\`) VALUES (?, ?, ?)`,
      [
        nextSubcategory.parent_thematic_id,
        oldSubcategoryCodeArr[1],
        nextSubcategory.order,
      ],
    );

    await queryRunner.query(
      `UPDATE \`story_thematic\` SET \`thematic_id\` = ? WHERE \`thematic_id\` >= ?`,
      [insertId, oldSubcategory.id],
    );

    await queryRunner.query(`DELETE FROM \`thematic\` WHERE \`id\` = ?`, [
      oldSubcategory.id,
    ]);

    await queryRunner.query(
      `UPDATE \`thematic\` SET \`order\` = \`order\` - 1 WHERE \`order\` >= ?`,
      [oldSubcategory.order],
    );

    await queryRunner.query(`DELETE FROM \`thematic\` WHERE \`id\` = ?`, [
      categories[oldSubcategoryCodeArr[0]],
    ]);
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
