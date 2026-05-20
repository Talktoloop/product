import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCrossCuttingOtherLabel1758889685597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = 'Other' WHERE code = 'other' AND parent_thematic_id = 39`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = NULL WHERE code = 'other' AND parent_thematic_id = 39`);
    }

} 