import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateIsMinorityByModeratorBasedOnThematicTag1731602526953
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE story_recipient sr
      SET sr.is_minority_by_moderator = false
    `);

    await queryRunner.query(`
      UPDATE story_recipient sr
      SET sr.is_minority_by_moderator = true
      WHERE sr.id IN (
        SELECT s.recipient_id
        FROM story s
        INNER JOIN story_thematic st ON s.id = st.story_id
        WHERE st.thematic_id = 86
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE story_recipient
      SET is_minority_by_moderator = NULL
    `);
  }
}
