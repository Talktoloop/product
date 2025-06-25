import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAidEffectivenessAndMigrateStoryThematic1748956388458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO thematic (code, parent_thematic_id, \`order\`, label)
      VALUES ('aid-effectiveness', NULL, 0, 'Community feedback on Aid effectiveness')
    `);

    const aidEffectivenessId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'aid-effectiveness'`))[0]?.id;
    const educationId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'education'`))[0]?.id;

    await queryRunner.query(`
      UPDATE thematic SET parent_thematic_id = ${aidEffectivenessId}
      WHERE code = 'awareness-raising'
    `);

    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = ${aidEffectivenessId} WHERE thematic_id = ${educationId}
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const aidEffectivenessId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'aid-effectiveness'`))[0]?.id;
    const educationId = (await queryRunner.query(`SELECT id FROM thematic WHERE code = 'education'`))[0]?.id;

    await queryRunner.query(`
      UPDATE thematic SET parent_thematic_id = ${educationId}
      WHERE code = 'awareness-raising'
    `);

    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = ${educationId} WHERE thematic_id = ${aidEffectivenessId}
    `);

    await queryRunner.query(`DELETE FROM thematic WHERE code = 'aid-effectiveness'`);
  }
}
