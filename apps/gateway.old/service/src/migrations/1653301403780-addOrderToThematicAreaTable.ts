import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import getThematicAreaCategories from './utils/get-thematic-area-categories';

export class AddOrderToThematicAreaTable1653301403780
  implements MigrationInterface
{
  tableName = 'thematic';
  private newColumn = new TableColumn({
    name: 'order',
    type: 'smallint',
    length: '3',
  });
  private order = {
    health: 1,
    'health.medicalCentres': 2,
    'health.medications/MedicinesFacilitiesAndServices': 3,
    'health.epidemics/Pandemics': 4,
    'health.covid': 5,
    'health.ebola': 6,
    'health.hivAids': 7,
    'health.gender-basedViolence': 8,
    'health.sexualAndReproductiveRights': 9,
    'health.mentalHealth': 10,
    'health.other': 11,
    foodSecurity: 12,
    'foodSecurity.nutrition': 13,
    'foodSecurity.feeding/Malnutrition': 14,
    'foodSecurity.livelihoods': 15,
    'foodSecurity.foodItems': 16,
    'foodSecurity.other': 17,
    wash: 18,
    'wash.handwashingStations': 19,
    'wash.waterPoints': 20,
    'wash.latrines': 21,
    'wash.waterTrucking': 22,
    'wash.solidWaste/GarbageManagement': 23,
    'wash.waterFacilitiesAndSupplies': 24,
    'wash.other': 25,
    shelter: 26,
    'shelter.non-foodItems': 27,
    'shelter.temporaryShelters': 28,
    'shelter.campCoordinationManagement': 29,
    'shelter.housing': 30,
    'shelter.lightingAndElectricity': 31,
    'shelter.construction': 32,
    'shelter.technicalSupport': 33,
    'shelter.other': 34,
    education: 35,
    'education.earlyChildhood': 36,
    'education.primary': 37,
    'education.secondary': 38,
    'education.university/Colleges/Trades': 39,
    'education.scholarships': 40,
    'education.other': 41,
    protection: 42,
    'protection.children': 43,
    'protection.youngPeople': 44,
    'protection.women': 45,
    'protection.personWithDisabiltiies': 46,
    'protection.elderlies': 47,
    'protection.lgtbq+': 48,
    'protection.chronicallyIllPeople': 49,
    'protection.legalStatus(refugees)': 50,
    'protection.indigenousCommunity': 51,
    'protection.lowIncomeFamilies': 52,
    'protection.other': 53,
    governance: 54,
    'governance.elections': 55,
    'governance.finance': 56,
    'governance.civicSpace': 57,
    'governance.safetyAndSecurity': 58,
    'governance.other': 59,
    'cross-cutting': 60,
    'cross-cutting.logistics': 61,
    'cross-cutting.cash': 62,
    'cross-cutting.telecommunications': 63,
    'cross-cutting.capacityBuilding': 64,
    'cross-cutting.communitySensitisation': 65,
    'cross-cutting.aidWorkers': 66,
    'cross-cutting.climateChange': 67,
    'cross-cutting.environment': 68,
    'cross-cutting.drrAndPreparedness': 69,
    'cross-cutting.other': 70,
  };

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    const categories = await getThematicAreaCategories(queryRunner);
    const operations = [];
    let categoryCode: string, subcategoryCode: string;

    for (const [key, value] of Object.entries(this.order)) {
      [categoryCode, subcategoryCode] = key.split('.');

      operations.push(
        subcategoryCode
          ? queryRunner.query(
              `UPDATE \`${this.tableName}\` SET \`order\` = ? WHERE \`parent_thematic_id\` = ? AND \`code\` = ?`,
              [value, categories[categoryCode], subcategoryCode],
            )
          : queryRunner.query(
              `UPDATE \`${this.tableName}\` SET \`order\` = ? WHERE \`parent_thematic_id\`IS NULL AND \`code\` = ?`,
              [value, categoryCode],
            ),
      );
    }

    await Promise.all(operations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
