import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeSecondaryThematic1748959369335 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 35 WHERE thematic_id = 36
    `);

    await queryRunner.query(`
      DELETE FROM thematic WHERE id = 36
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO thematic (id, parent_thematic_id, code, \`order\`) VALUES (36, 34, 'secondary', 42)
    `);

    await queryRunner.query(`
      UPDATE story_thematic SET thematic_id = 36 WHERE thematic_id = 35
    `);
  }
}
