import { MigrationInterface, QueryRunner } from 'typeorm';
import getThematicAreaCategories from './utils/get-thematic-area-categories';

export class AddNewThematicAreaOptions1653291706074
  implements MigrationInterface
{
  tableName = 'thematic';
  options = [
    'health.medications/MedicinesFacilitiesAndServices',
    'health.hivAids',
    'health.other',
    'foodSecurity.other',
    'wash.handwashingStations',
    'wash.waterTrucking',
    'wash.solidWaste/GarbageManagement',
    'wash.waterFacilitiesAndSupplies',
    'wash.other',
    'shelter.temporaryShelters',
    'shelter.technicalSupport',
    'shelter.other',
    'education.earlyChildhood',
    'education.scholarships',
    'education.other',
    'protection',
    'protection.children',
    'protection.youngPeople',
    'protection.women',
    'protection.personWithDisabiltiies',
    'protection.elderlies',
    'protection.lgtbq+',
    'protection.chronicallyIllPeople',
    'protection.legalStatus(refugees)',
    'protection.indigenousCommunity',
    'protection.lowIncomeFamilies',
    'protection.other',
    'governance.elections',
    'governance.other',
    'cross-cutting.telecommunications',
    'cross-cutting.climateChange',
    'cross-cutting.environment',
    'cross-cutting.drrAndPreparedness',
    'cross-cutting.other',
  ];

  async addCategory(
    queryRunner: QueryRunner,
    categoryIds: Record<string, number>,
    categoryCode: string,
  ) {
    await queryRunner.query(
      `INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`,\`code\`) VALUES (?,?)`,
      [null, categoryCode],
    );

    const category = await queryRunner
      .query(
        `SELECT \`id\`, \`code\` FROM \`${this.tableName}\` WHERE \`code\` = ?`,
        [categoryCode],
      )
      .then((result) => result[0]);

    categoryIds[category.code] = category.id;

    return categoryIds;
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    let categories = await getThematicAreaCategories(queryRunner);
    const operations = [];
    let categoryCode: string, subcategoryCode: string;

    for (const option of this.options) {
      [categoryCode, subcategoryCode] = option.split('.');

      if (!categories[categoryCode]) {
        categories = await this.addCategory(
          queryRunner,
          categories,
          categoryCode,
        );
      }

      if (subcategoryCode) {
        operations.push(
          queryRunner.query(
            `INSERT INTO \`${this.tableName}\` (\`parent_thematic_id\`,\`code\`) VALUES (?,?)`,
            [categories[categoryCode], subcategoryCode],
          ),
        );
      }
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const categories = await getThematicAreaCategories(queryRunner);
    const operations = [];
    let categoryCode: string, subcategoryCode: string;

    for (const option of this.options) {
      [categoryCode, subcategoryCode] = option.split('.');

      operations.push(
        subcategoryCode
          ? queryRunner.query(
              `DELETE FROM \`${this.tableName}\` WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`,
              [categories[categoryCode], subcategoryCode],
            )
          : queryRunner.query(
              `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ? AND parent_thematic_id IS NULL`,
              [categoryCode],
            ),
      );
    }

    await Promise.all(operations);
  }
}
