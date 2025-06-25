import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeFeedingMalnutritionThematic1748959049661 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 14 WHERE thematic_id = 50
    `);

    await queryRunner.query(`
      DELETE FROM thematic WHERE id = 50
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO thematic (id, parent_thematic_id, code, \`order\`) VALUES (50, 22, 'feeding/Malnutrition', 14)
    `);

    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 50 WHERE thematic_id = 14
    `);
  }
}

