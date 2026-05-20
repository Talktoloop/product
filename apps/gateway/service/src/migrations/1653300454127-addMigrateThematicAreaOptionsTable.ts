import { MigrationInterface, QueryRunner } from 'typeorm';
import getThematicAreaCategories from './utils/get-thematic-area-categories';

export class AddMigrateThematicAreaOptionsTable1653300454127
  implements MigrationInterface
{
  tableName = 'thematic';
  options = {
    'health.nutrition': 'foodSecurity.nutrition',
    'emergencyResponse.foodItems': 'foodSecurity.foodItems',
    'emergencyResponse.non-foodItems': 'shelter.non-foodItems',
    'emergencyResponse.distribution': 'shelter.non-foodItems',
    'cross-cutting.campCoordinationManagement':
      'shelter.campCoordinationManagement',
    'emergencyResponse.campCoordinationManagement':
      'shelter.campCoordinationManagement',
    'emergencyResponse.idCards': 'shelter.campCoordinationManagement',
    'shelter.logistics': 'cross-cutting.logistics',
    'emergencyResponse.cash': 'cross-cutting.cash',
    'foodSecurity.cash': 'cross-cutting.cash',
    'health.communitySensitisation': 'cross-cutting.communitySensitisation',
    'cross-cutting.safetyAndSecurity': 'governance.safetyAndSecurity',
    'education.capacityBuilding': 'cross-cutting.capacityBuilding',
    'foodSecurity.capacityBuilding': 'cross-cutting.capacityBuilding',
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories = await getThematicAreaCategories(queryRunner);
    const subcategories = await queryRunner.query(
      `SELECT \`id\`, \`parent_thematic_id\`, \`code\` FROM \`thematic\` WHERE \`parent_thematic_id\` IS NOT NULL`,
    );
    let oldSubcategoryCodeArr: string[], newSubcategoryCodeArr: string[];
    let oldSubcategory, newSubcategory;

    for (const [oldSubcategoryCode, newSubcategoryCode] of Object.entries(
      this.options,
    )) {
      oldSubcategoryCodeArr = oldSubcategoryCode.split('.');
      newSubcategoryCodeArr = newSubcategoryCode.split('.');
      oldSubcategory = subcategories.find(
        (entity) =>
          entity?.parent_thematic_id === categories[oldSubcategoryCodeArr[0]] &&
          entity?.code === oldSubcategoryCodeArr[1],
      );
      newSubcategory = subcategories.find(
        (entity) =>
          entity?.parent_thematic_id === categories[newSubcategoryCodeArr[0]] &&
          entity?.code === newSubcategoryCodeArr[1],
      );

      if (!oldSubcategory) {
        continue;
      }

      if (!newSubcategory) {
        await queryRunner.query(
          `UPDATE \`${this.tableName}\` SET \`parent_thematic_id\` = ? WHERE \`parent_thematic_id\` = ? AND code = ?`,
          [
            categories[newSubcategoryCodeArr[0]],
            categories[oldSubcategoryCodeArr[0]],
            oldSubcategoryCodeArr[1],
          ],
        );

        newSubcategory = await queryRunner
          .query(
            `SELECT \`id\`, \`parent_thematic_id\`, \`code\` FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`,
            [categories[newSubcategoryCodeArr[0]], newSubcategoryCodeArr[1]],
          )
          .then((result) => result[0]);

        subcategories.push(newSubcategory);
      } else {
        await queryRunner.query(
          `UPDATE \`story_thematic\` SET \`thematic_id\` = ? WHERE \`thematic_id\` = ?`,
          [newSubcategory.id, oldSubcategory.id],
        );
        await queryRunner.query(
          `DELETE FROM \`${this.tableName}\` WHERE \`id\` = ?`,
          [oldSubcategory.id],
        );
      }
    }

    await queryRunner.query(
      `DELETE FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` IS NULL AND \`code\`= ?`,
      ['emergencyResponse'],
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
