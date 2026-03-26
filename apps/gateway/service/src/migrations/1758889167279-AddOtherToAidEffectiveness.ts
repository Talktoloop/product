import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOtherToAidEffectiveness1758889167279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('aid-effectiveness-other', 107, 0, 'Other')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM thematic WHERE code = 'aid-effectiveness-other'`);
    }

} 