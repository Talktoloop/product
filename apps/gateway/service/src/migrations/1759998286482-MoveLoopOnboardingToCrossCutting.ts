import { MigrationInterface, QueryRunner } from "typeorm";

export class MoveLoopOnboardingToCrossCutting1759998286482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 39 WHERE code = 'loopOnboarding'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET parent_thematic_id = 107 WHERE code = 'loopOnboarding'`);
    }

}

