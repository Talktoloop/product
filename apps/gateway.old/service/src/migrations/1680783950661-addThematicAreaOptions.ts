import { MigrationInterface, QueryRunner } from 'typeorm';
import getThematicAreaCategories from './utils/get-thematic-area-categories';

export class AddThematicAreaOptions1680783950661 implements MigrationInterface {
  tableName = 'thematic';
  options = {
    'foodSecurity.livestock': 'foodSecurity.foodItems',
    'foodSecurity.agriculture': 'foodSecurity.livestock',
    'foodSecurity.locust': 'foodSecurity.agriculture',
    'protection.idp': 'protection.lowIncomeFamilies',
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = await getThematicAreaCategories(queryRunner);
    let previousSubcategoryCodeArr: string[], newSubcategoryCodeArr: string[];

    for (const [newSubcategoryCode, previousSubcategoryCode] of Object.entries(
      this.options,
    )) {
      newSubcategoryCodeArr = newSubcategoryCode.split('.');
      previousSubcategoryCodeArr = previousSubcategoryCode.split('.');

      const oldSubcategory = await queryRunner
        .query(
          `SELECT \`id\`, \`parent_thematic_id\`, \`code\`, \`order\` FROM \`thematic\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`,
          [
            categories[previousSubcategoryCodeArr[0]],
            previousSubcategoryCodeArr[1],
          ],
        )
        .then((result) => result[0]);

      await queryRunner.query(
        `UPDATE \`thematic\` SET \`order\` = \`order\` + 1 WHERE \`order\` > ?`,
        [oldSubcategory.order],
      );

      await queryRunner.query(
        `INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`, \`code\`, \`order\`) VALUES (?, ?, ?)`,
        [
          categories[newSubcategoryCodeArr[0]],
          newSubcategoryCodeArr[1],
          oldSubcategory.order + 1,
        ],
      );
    }
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
