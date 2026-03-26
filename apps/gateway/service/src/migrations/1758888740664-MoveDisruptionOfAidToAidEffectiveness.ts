import { MigrationInterface, QueryRunner } from "typeorm";

export class MoveDisruptionOfAidToAidEffectiveness1758888740664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 107 WHERE code = 'disruption-of-aid'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 67 WHERE code = 'disruption-of-aid'`);
    }

} 