import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeCovidThematic1748958228370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 19 WHERE thematic_id = 20
    `);

    await queryRunner.query(`
      DELETE FROM thematic WHERE id = 20
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO thematic (id, parent_thematic_id, code, \`order\`) VALUES (20, 12, 'covid', 5)
    `);

    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 20 WHERE thematic_id = 19
    `);
  }
}
