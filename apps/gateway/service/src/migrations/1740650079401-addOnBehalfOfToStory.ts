import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnBehalfOfToStory1740650079401 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE story ADD COLUMN on_behalf_of VARCHAR(300) DEFAULT NULL;
        `);

        await queryRunner.query(`
            UPDATE story s
            LEFT JOIN story_recipient sr ON s.recipient_id = sr.id
            SET s.on_behalf_of = sr.nickname
            WHERE s.recipient_id IS NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE story DROP COLUMN on_behalf_of;`);
    }
}
