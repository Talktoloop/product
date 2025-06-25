import { MigrationInterface, QueryRunner } from 'typeorm';

export class moveThematicToNewParent1748957012634 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const livelihoodsId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'livelihoods'`))[0]?.id;
    const aidEffectivenessId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'aid-effectiveness'`))[0]?.id;
    const healthId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'health'`))[0]?.id;
    const energyEnvironmentId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'energy-environment'`))[0]?.id;
    const governanceId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'governance'`))[0]?.id;

    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${livelihoodsId} WHERE code = 'crop-livestock'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${aidEffectivenessId} WHERE code = 'awareness-raising'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${healthId} WHERE code = 'gender-basedViolence'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${livelihoodsId} WHERE code = 'agriculture'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${energyEnvironmentId} WHERE code = 'flooding/HeavyRains'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${energyEnvironmentId} WHERE code = 'lightingAndElectricity'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${governanceId} WHERE code = 'telecommunications'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${livelihoodsId} WHERE code = 'cash'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${energyEnvironmentId} WHERE code = 'climateChange'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${aidEffectivenessId} WHERE code = 'loopOnboarding'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${energyEnvironmentId} WHERE code = 'drrAndPreparedness'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${energyEnvironmentId} WHERE code = 'droughts'`);
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    const foodSecurityId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'foodSecurity'`))[0]?.id;
    const educationId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'education'`))[0]?.id;
    const protectionId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'protection'`))[0]?.id;
    const washId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'wash'`))[0]?.id;
    const crossCuttingId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'cross-cutting'`))[0]?.id;

    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${foodSecurityId} WHERE code = 'crop-livestock'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${educationId} WHERE code = 'awareness-raising'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${protectionId} WHERE code = 'gender-basedViolence'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${foodSecurityId} WHERE code = 'agriculture'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${washId} WHERE code = 'flooding/HeavyRains'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'lightingAndElectricity'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'telecommunications'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'cash'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'climateChange'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'loopOnboarding'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'drrAndPreparedness'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'droughts'`);
  }

}
