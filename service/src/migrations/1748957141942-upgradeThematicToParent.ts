import { MigrationInterface, QueryRunner } from 'typeorm';

export class upgradeThematicToParent1748957141942 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = NULL WHERE code = 'livelihoods'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = NULL WHERE code = 'logistics'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = NULL WHERE code = 'essential-living-supplies'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = NULL WHERE code = 'energy-environment'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const foodSecurityId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'foodSecurity'`))[0]?.id;
    const crossCuttingId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'cross-cutting'`))[0]?.id;
    const shelterId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'shelter'`))[0]?.id;

    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${foodSecurityId} WHERE code = 'livelihoods'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'logistics'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${shelterId} WHERE code = 'essential-living-supplies'`);
    await queryRunner.query(`UPDATE thematic SET parent_thematic_id = ${crossCuttingId} WHERE code = 'energy-environment'`);
  }
}
