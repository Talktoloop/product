import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateThematicCodes1748943718649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE thematic SET code = 'essential-living-supplies' WHERE code = 'non-foodItems'`);
    await queryRunner.query(`UPDATE thematic SET code = 'logistics' WHERE code = 'logistic'`);
    await queryRunner.query(`UPDATE thematic SET code = 'energy-environment' WHERE code = 'environment'`);
    await queryRunner.query(`UPDATE thematic SET code = 'medications' WHERE code = 'medications/MedicinesFacilitiesAndServices'`);
    await queryRunner.query(`UPDATE thematic SET code = 'crop-livestock' WHERE code = 'livestock'`);
    await queryRunner.query(`UPDATE thematic SET code = 'formal-education' WHERE code = 'primary'`);
    await queryRunner.query(`UPDATE thematic SET code = 'higher-education' WHERE code = 'university/Colleges/Trades'`);
    await queryRunner.query(`UPDATE thematic SET code = 'awareness-raising' WHERE code = 'informationEducationAndCommunicationActivities'`);
    await queryRunner.query(`UPDATE thematic SET code = 'gov-spending-social-protection' WHERE code = 'finance'`);
    await queryRunner.query(`UPDATE thematic SET code = 'hygiene' WHERE code = 'hygienicPracticesCommunityDisinfection'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE thematic SET code = 'non-foodItems' WHERE code = 'essential-living-supplies'`);
    await queryRunner.query(`UPDATE thematic SET code = 'logistic' WHERE code = 'logistics'`);
    await queryRunner.query(`UPDATE thematic SET code = 'environment' WHERE code = 'energy-environment'`);
    await queryRunner.query(`UPDATE thematic SET code = 'medications/MedicinesFacilitiesAndServices' WHERE code = 'medications'`);
    await queryRunner.query(`UPDATE thematic SET code = 'livestock' WHERE code = 'crop-livestock'`);
    await queryRunner.query(`UPDATE thematic SET code = 'primary' WHERE code = 'formal-education'`);
    await queryRunner.query(`UPDATE thematic SET code = 'university/Colleges/Trades' WHERE code = 'higher-education'`);
    await queryRunner.query(`UPDATE thematic SET code = 'informationEducationAndCommunicationActivities' WHERE code = 'awareness-raising'`);
    await queryRunner.query(`UPDATE thematic SET code = 'finance' WHERE code = 'gov-spending-social-protection'`);
    await queryRunner.query(`UPDATE thematic SET code = 'hygienicPracticesCommunityDisinfection' WHERE code = 'hygiene'`);
  }
}
